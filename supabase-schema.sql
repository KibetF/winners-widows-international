-- Winners Widows & Widowers International
-- Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- DONATIONS TABLE
-- Stores verified donation records with receipt tracking
-- =====================================================
CREATE TABLE donations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  receipt_number VARCHAR(20) UNIQUE,
  donor_name VARCHAR(255) NOT NULL,
  donor_email VARCHAR(255) NOT NULL,
  donor_phone VARCHAR(50),
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  payment_method VARCHAR(50) NOT NULL,
  donation_date DATE NOT NULL,
  designation VARCHAR(100) DEFAULT 'General Fund',
  designated_camp VARCHAR(50),
  designated_program VARCHAR(100),
  verified BOOLEAN DEFAULT FALSE,
  verified_at TIMESTAMP,
  receipt_generated BOOLEAN DEFAULT FALSE,
  receipt_generated_at TIMESTAMP,
  receipt_sent BOOLEAN DEFAULT FALSE,
  receipt_sent_at TIMESTAMP,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- ALLOCATIONS TABLE
-- Tracks how funds are allocated to programs and camps
-- =====================================================
CREATE TABLE allocations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'KES',
  allocation_date DATE NOT NULL,
  camp VARCHAR(50) NOT NULL,
  purpose VARCHAR(100) NOT NULL,
  description TEXT,
  beneficiary_type VARCHAR(20) DEFAULT 'all', -- 'all' or 'specific'
  photo_url TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- MEMBERS TABLE
-- Registry of beneficiary members across all camps
-- =====================================================
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  camp VARCHAR(50) NOT NULL,
  role VARCHAR(50) DEFAULT 'Member',
  join_date DATE,
  status VARCHAR(20) DEFAULT 'Active',
  phone VARCHAR(50),
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- ALLOCATION BENEFICIARIES TABLE
-- Junction table for specific allocation beneficiaries
-- =====================================================
CREATE TABLE allocation_beneficiaries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  allocation_id UUID REFERENCES allocations(id) ON DELETE CASCADE,
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- CONTACT SUBMISSIONS TABLE
-- Stores contact form submissions from the website
-- =====================================================
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- DONATION SUBMISSIONS TABLE
-- Public donation confirmations before admin verification
-- =====================================================
CREATE TABLE donation_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  donor_name VARCHAR(255) NOT NULL,
  donor_email VARCHAR(255) NOT NULL,
  donor_phone VARCHAR(50),
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  payment_method VARCHAR(50) NOT NULL,
  donation_date DATE NOT NULL,
  designation VARCHAR(100) DEFAULT 'General Fund',
  designated_camp VARCHAR(50),
  message TEXT,
  processed BOOLEAN DEFAULT FALSE,
  processed_at TIMESTAMP,
  donation_id UUID REFERENCES donations(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- INDEXES
-- Optimize query performance
-- =====================================================
CREATE INDEX idx_donations_date ON donations(donation_date);
CREATE INDEX idx_donations_verified ON donations(verified);
CREATE INDEX idx_donations_receipt ON donations(receipt_number);
CREATE INDEX idx_allocations_camp ON allocations(camp);
CREATE INDEX idx_allocations_date ON allocations(allocation_date);
CREATE INDEX idx_members_camp ON members(camp);
CREATE INDEX idx_members_status ON members(status);
CREATE INDEX idx_donation_submissions_processed ON donation_submissions(processed);
CREATE INDEX idx_contact_submissions_read ON contact_submissions(read);

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- Protect data access
-- =====================================================
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE allocations ENABLE ROW LEVEL SECURITY;
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE allocation_beneficiaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE donation_submissions ENABLE ROW LEVEL SECURITY;

-- Admin full access policies
CREATE POLICY "Admin full access donations" ON donations
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access allocations" ON allocations
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access members" ON members
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access allocation_beneficiaries" ON allocation_beneficiaries
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access contact_submissions" ON contact_submissions
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin full access donation_submissions" ON donation_submissions
  FOR ALL USING (auth.role() = 'authenticated');

-- Public can insert submissions (no authentication required)
CREATE POLICY "Public can submit donations" ON donation_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can submit contact" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- =====================================================
-- FUNCTIONS & TRIGGERS
-- Auto-generate receipt numbers
-- =====================================================
CREATE OR REPLACE FUNCTION generate_receipt_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.receipt_number := 'WWWI-' || TO_CHAR(NOW(), 'YYYY') || '-' ||
    LPAD(CAST((SELECT COALESCE(COUNT(*), 0) + 1 FROM donations WHERE
    EXTRACT(YEAR FROM created_at) = EXTRACT(YEAR FROM NOW())) AS VARCHAR), 4, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_receipt_number
  BEFORE INSERT ON donations
  FOR EACH ROW
  EXECUTE FUNCTION generate_receipt_number();

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER donations_updated_at
  BEFORE UPDATE ON donations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER allocations_updated_at
  BEFORE UPDATE ON allocations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER members_updated_at
  BEFORE UPDATE ON members
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- =====================================================
-- STORAGE BUCKET
-- For allocation photos and other uploads
-- Run this in the Supabase Dashboard under Storage
-- =====================================================
-- Create a public bucket named 'uploads' with the following policy:
--
-- INSERT policy: (auth.role() = 'authenticated')
-- SELECT policy: true (public read access)
-- DELETE policy: (auth.role() = 'authenticated')

-- =====================================================
-- SAMPLE DATA (Optional - for testing)
-- Uncomment to add sample members
-- =====================================================
/*
INSERT INTO members (name, camp, role, join_date, status) VALUES
  ('Sample Coordinator', 'Kasoiyo', 'Coordinator', '2020-01-01', 'Active'),
  ('Sample Chairperson', 'Kasoiyo', 'Chairperson', '2020-01-01', 'Active'),
  ('Sample Member 1', 'Kasoiyo', 'Member', '2021-03-15', 'Active'),
  ('Sample Member 2', 'Talai', 'Member', '2021-06-20', 'Active'),
  ('Sample Coordinator 2', 'Talai', 'Coordinator', '2019-08-10', 'Active'),
  ('Sample Member 3', 'Cheburur', 'Member', '2022-01-05', 'Active');
*/

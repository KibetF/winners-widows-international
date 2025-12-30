// Database types
export interface Donation {
  id: string;
  receipt_number: string | null;
  donor_name: string;
  donor_email: string;
  donor_phone: string | null;
  amount: number;
  currency: string;
  payment_method: string;
  donation_date: string;
  designation: string;
  designated_camp: string | null;
  designated_program: string | null;
  verified: boolean;
  verified_at: string | null;
  receipt_generated: boolean;
  receipt_generated_at: string | null;
  receipt_sent: boolean;
  receipt_sent_at: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Allocation {
  id: string;
  amount: number;
  currency: string;
  allocation_date: string;
  camp: string;
  purpose: string;
  description: string | null;
  beneficiary_type: "all" | "specific";
  photo_url: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Member {
  id: string;
  name: string;
  camp: string;
  role: string;
  join_date: string | null;
  status: "Active" | "Inactive" | "Deceased";
  phone: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface AllocationBeneficiary {
  id: string;
  allocation_id: string;
  member_id: string;
  created_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  read_at: string | null;
  created_at: string;
}

export interface DonationSubmission {
  id: string;
  donor_name: string;
  donor_email: string;
  donor_phone: string | null;
  amount: number;
  currency: string;
  payment_method: string;
  donation_date: string;
  designation: string;
  designated_camp: string | null;
  message: string | null;
  processed: boolean;
  processed_at: string | null;
  donation_id: string | null;
  created_at: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface DonationFormData {
  donor_name: string;
  donor_email: string;
  donor_phone?: string;
  amount: number;
  currency: "USD" | "KES";
  payment_method: string;
  donation_date: string;
  designation: string;
  designated_camp?: string;
  message?: string;
}

export interface MemberFormData {
  name: string;
  camp: string;
  role: string;
  join_date?: string;
  status: "Active" | "Inactive" | "Deceased";
  phone?: string;
  notes?: string;
}

export interface AllocationFormData {
  amount: number;
  currency: string;
  allocation_date: string;
  camp: string;
  purpose: string;
  description?: string;
  beneficiary_type: "all" | "specific";
  beneficiary_ids?: string[];
  notes?: string;
}

// Report types
export interface DonationReport {
  total_amount: number;
  total_count: number;
  by_method: Record<string, number>;
  by_designation: Record<string, number>;
  donations: Donation[];
}

export interface AllocationReport {
  total_amount: number;
  total_count: number;
  by_camp: Record<string, number>;
  by_purpose: Record<string, number>;
  allocations: Allocation[];
}

// News/Blog types
export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

// Camp type
export interface Camp {
  id: string;
  name: string;
  location: string;
  members: number;
  description: string;
}

// Program type
export interface Program {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

// Board member type
export interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

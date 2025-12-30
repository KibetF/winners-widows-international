import { Metadata } from "next";
import Link from "next/link";
import { Hero, CTASection } from "@/components/sections";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ADDRESSES, CAMPS } from "@/lib/constants";
import {
  PieChart,
  TrendingUp,
  FileText,
  Shield,
  CheckCircle,
  Download,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "See how Winners Widows & Widowers International uses your donations. Complete transparency in fund allocation and operations.",
};

export default function TransparencyPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Your Trust, Our Commitment"
        subheadline="Complete transparency in how your donations create impact"
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
        size="sm"
      />

      {/* Fund Usage Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                How Funds Are Used
              </h2>
              <p className="text-lg text-neutral-600">
                We are committed to ensuring every dollar reaches those who need
                it most.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Pie Chart Placeholder */}
              <div className="relative">
                <div className="aspect-square max-w-sm mx-auto">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* 85% - Program Support */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#722F37"
                      strokeWidth="20"
                      strokeDasharray="213.6 251.3"
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                    />
                    {/* 10% - Operations */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="20"
                      strokeDasharray="25.1 251.3"
                      strokeDashoffset="-213.6"
                      transform="rotate(-90 50 50)"
                    />
                    {/* 5% - Fundraising */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#228B22"
                      strokeWidth="20"
                      strokeDasharray="12.6 251.3"
                      strokeDashoffset="-238.7"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl font-heading font-bold text-primary-900">
                        85%
                      </p>
                      <p className="text-sm text-neutral-600">Direct Programs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-primary-50">
                  <div className="w-4 h-4 rounded-full bg-primary-900" />
                  <div className="flex-1">
                    <p className="font-semibold text-neutral-900">
                      85% - Direct Program Support
                    </p>
                    <p className="text-sm text-neutral-600">
                      Livestock, education, healthcare, skills training, and
                      seasonal support
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary-50">
                  <div className="w-4 h-4 rounded-full bg-secondary-400" />
                  <div className="flex-1">
                    <p className="font-semibold text-neutral-900">
                      10% - Operations & Administration
                    </p>
                    <p className="text-sm text-neutral-600">
                      Staff, office operations, and local coordination
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-accent-50">
                  <div className="w-4 h-4 rounded-full bg-accent-500" />
                  <div className="flex-1">
                    <p className="font-semibold text-neutral-900">
                      5% - Fundraising & Outreach
                    </p>
                    <p className="text-sm text-neutral-600">
                      Donor communications, website, and awareness campaigns
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Allocations */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Recent Fund Allocation
              </h2>
              <p className="text-lg text-neutral-600">
                A look at how funds have been used in recent months.
              </p>
            </div>

            <div className="space-y-6">
              {/* Q4 2024 */}
              <Card>
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <CardTitle>Q4 2024</CardTitle>
                    <Badge variant="accent">Recent</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        date: "December 2024",
                        title: "Christmas Food Distribution",
                        camp: "All Camps",
                        description:
                          "92+ families received food packages including rice, flour, sugar, and cooking oil",
                        amount: "KES 150,000",
                      },
                      {
                        date: "November 2024",
                        title: "Livestock Health Program",
                        camp: "Kasoiyo Camp",
                        description:
                          "Veterinary services and vaccination program for dairy cows",
                        amount: "KES 35,000",
                      },
                      {
                        date: "October 2024",
                        title: "Education Support",
                        camp: "Talai Camp",
                        description:
                          "School fees payment for 15 children returning to school",
                        amount: "KES 75,000",
                      },
                    ].map((allocation, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg bg-neutral-50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-neutral-500">
                              {allocation.date}
                            </span>
                            <span className="text-neutral-300">•</span>
                            <Badge variant="secondary">{allocation.camp}</Badge>
                          </div>
                          <h4 className="font-semibold text-neutral-900">
                            {allocation.title}
                          </h4>
                          <p className="text-sm text-neutral-600">
                            {allocation.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono font-semibold text-primary-900">
                            {allocation.amount}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Q3 2024 */}
              <Card>
                <CardHeader className="border-b">
                  <CardTitle>Q3 2024</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        date: "September 2024",
                        title: "Back to School Program",
                        camp: "All Camps",
                        description:
                          "School supplies and uniforms for new school year",
                        amount: "KES 85,000",
                      },
                      {
                        date: "August 2024",
                        title: "Healthcare Support",
                        camp: "Cheburur Camp",
                        description:
                          "Medical bills assistance for 8 members",
                        amount: "KES 45,000",
                      },
                      {
                        date: "July 2024",
                        title: "Skills Training Workshop",
                        camp: "Talai Camp",
                        description:
                          "Tailoring and business skills training for 20 members",
                        amount: "KES 60,000",
                      },
                    ].map((allocation, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg bg-neutral-50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-neutral-500">
                              {allocation.date}
                            </span>
                            <span className="text-neutral-300">•</span>
                            <Badge variant="default">{allocation.camp}</Badge>
                          </div>
                          <h4 className="font-semibold text-neutral-900">
                            {allocation.title}
                          </h4>
                          <p className="text-sm text-neutral-600">
                            {allocation.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono font-semibold text-primary-900">
                            {allocation.amount}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Our Transparency Commitments
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: PieChart,
                  title: "Clear Fund Allocation",
                  description:
                    "We maintain detailed records of every donation and how it's used, with regular public reporting.",
                },
                {
                  icon: Shield,
                  title: "Secure Handling",
                  description:
                    "All funds are managed through proper banking channels with dual oversight and approval processes.",
                },
                {
                  icon: FileText,
                  title: "Documented Impact",
                  description:
                    "We document all programs with photos, reports, and testimonials from beneficiaries.",
                },
                {
                  icon: CheckCircle,
                  title: "Regular Audits",
                  description:
                    "Our finances undergo regular review and we're committed to annual third-party audits as we grow.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Request Report */}
      <section className="section bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <FileText className="w-16 h-16 text-secondary-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Request Detailed Report
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Want more details about our financials and operations? We&apos;re
              happy to provide detailed reports to donors and partners.
            </p>
            <a
              href={`mailto:${ADDRESSES.us.email}?subject=Request for Detailed Financial Report`}
              className="btn btn-secondary btn-lg inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Request a Report
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to Support Our Mission?"
        description="Your donation is handled with care and transparency."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}

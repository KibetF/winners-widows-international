import { Metadata } from "next";
import { Hero, CTASection } from "@/components/sections";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DonationForm } from "@/components/forms/donation-form";
import { DONATION_METHODS, ADDRESSES } from "@/lib/constants";
import {
  AlertTriangle,
  DollarSign,
  Send,
  Mail,
  Smartphone,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support widows and widowers in Kenya. 100% of your donation goes directly to our empowerment programs.",
};

const iconMap: Record<string, React.ElementType> = {
  DollarSign,
  Send,
  Mail,
  Smartphone,
  Building,
};

export default function DonatePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Give Hope Today"
        subheadline="100% of your donation goes directly to empowering widows and widowers in Kenya"
        backgroundImage="/images/impact/IMG_5573.jpeg"
        size="sm"
      />

      {/* 501(c)(3) Notice */}
      <section className="py-6 bg-yellow-50 border-y border-yellow-200">
        <div className="container">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-1">
                501(c)(3) Status Pending
              </h3>
              <p className="text-sm text-yellow-700">
                Winners Widows & Widowers International is a registered nonprofit
                organization. Our 501(c)(3) tax-exempt status is currently pending
                with the IRS. Donation receipts are provided for your personal
                records. Please note that donations may not currently qualify for
                tax deductions. We appreciate your generous support and will update
                our status once approved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                How to Donate
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Choose your preferred payment method below. After sending your
                donation, complete the confirmation form so we can send your
                receipt.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* US Donors */}
              <Card>
                <CardHeader className="border-b bg-neutral-50">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇺🇸</span>
                    <CardTitle>For US Donors</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {DONATION_METHODS.us.map((method) => {
                      const Icon = iconMap[method.icon] || DollarSign;
                      return (
                        <div
                          key={method.id}
                          className="flex items-start gap-4 p-4 rounded-lg bg-neutral-50"
                        >
                          <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary-900" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-neutral-900 mb-1">
                              {method.name}
                            </h4>
                            <p className="font-mono text-lg text-primary-900 mb-1">
                              {method.details}
                            </p>
                            <p className="text-sm text-neutral-500">
                              {method.instructions}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Kenya Donors */}
              <Card>
                <CardHeader className="border-b bg-neutral-50">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇰🇪</span>
                    <CardTitle>For Kenya Donors</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {DONATION_METHODS.kenya.map((method) => {
                      const Icon = iconMap[method.icon] || Smartphone;
                      return (
                        <div
                          key={method.id}
                          className="flex items-start gap-4 p-4 rounded-lg bg-neutral-50"
                        >
                          <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-accent-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-neutral-900 mb-1">
                              {method.name}
                            </h4>
                            <p className="font-mono text-lg text-primary-900 mb-1">
                              {method.details}
                            </p>
                            <p className="text-sm text-neutral-500">
                              {method.instructions}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Donation Confirmation Form */}
            <Card className="border-2 border-primary-200">
              <CardHeader className="border-b bg-primary-50">
                <CardTitle className="text-center">
                  Donation Confirmation Form
                </CardTitle>
                <p className="text-center text-neutral-600 mt-2">
                  After sending your donation, please complete this form so we can
                  verify and send your receipt.
                </p>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <DonationForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact of Donations */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              See how your donation creates real change in the lives of widows
              and widowers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { amount: 25, impact: "Provides food for a family for one week" },
              { amount: 50, impact: "Covers veterinary care for livestock" },
              { amount: 100, impact: "Pays one child's school fees for a term" },
              { amount: 500, impact: "Purchases a dairy cow for a community" },
            ].map((item) => (
              <Card key={item.amount} className="text-center p-6">
                <CardContent className="p-0">
                  <p className="text-3xl font-heading font-bold text-primary-900 mb-2">
                    ${item.amount}
                  </p>
                  <p className="text-sm text-neutral-600">{item.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
              Questions About Donating?
            </h2>
            <p className="text-neutral-600 mb-6">
              We&apos;re here to help. Contact us for any questions about making a
              donation or how your contribution will be used.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${ADDRESSES.us.email}`}
                className="btn btn-outline btn-md"
              >
                Email Us
              </a>
              <a href="/transparency" className="btn btn-ghost btn-md">
                View Transparency Report
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

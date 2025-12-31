import { Metadata } from "next";
import { Hero, CTASection } from "@/components/sections";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";
import { ADDRESSES, ORGANIZATION } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Winners Widows & Widowers International. Contact our US or Kenya office.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Get in Touch"
        subheadline="We'd love to hear from you"
        backgroundImage="/images/general/IMG_5489.jpeg"
        size="sm"
      />

      {/* Contact Info + Form Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                {/* US Office */}
                <Card>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🇺🇸</span>
                      <CardTitle className="text-lg">
                        {ADDRESSES.us.label}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                      <address className="not-italic text-sm text-neutral-600">
                        {ADDRESSES.us.street}
                        <br />
                        {ADDRESSES.us.city}, {ADDRESSES.us.state}{" "}
                        {ADDRESSES.us.zip}
                        <br />
                        {ADDRESSES.us.country}
                      </address>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                      <a
                        href={`tel:${ADDRESSES.us.phone}`}
                        className="text-sm text-neutral-600 hover:text-primary-900"
                      >
                        {ADDRESSES.us.phone}
                      </a>
                    </div>
                    <div className="flex gap-3">
                      <Mail className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                      <a
                        href={`mailto:${ADDRESSES.us.email}`}
                        className="text-sm text-neutral-600 hover:text-primary-900"
                      >
                        {ADDRESSES.us.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Kenya Office */}
                <Card>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🇰🇪</span>
                      <CardTitle className="text-lg">
                        {ADDRESSES.kenya.label}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                      <address className="not-italic text-sm text-neutral-600">
                        {ADDRESSES.kenya.building}
                        <br />
                        {ADDRESSES.kenya.city}
                        <br />
                        {ADDRESSES.kenya.country}
                      </address>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                      <a
                        href={`tel:${ADDRESSES.kenya.phone}`}
                        className="text-sm text-neutral-600 hover:text-primary-900"
                      >
                        {ADDRESSES.kenya.phone}
                      </a>
                    </div>
                    <div className="flex gap-3">
                      <Mail className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                      <a
                        href={`mailto:${ADDRESSES.kenya.email}`}
                        className="text-sm text-neutral-600 hover:text-primary-900"
                      >
                        {ADDRESSES.kenya.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      <a
                        href={ORGANIZATION.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-900 transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href={ORGANIZATION.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-900 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href={ORGANIZATION.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-900 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <p className="text-neutral-600 mt-1">
                      Fill out the form below and we&apos;ll get back to you as
                      soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-8 text-center">
              Our Locations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* US Map */}
              <div>
                <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <span className="text-xl">🇺🇸</span>
                  United States Office
                </h3>
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5721543099844!2d-96.6415!3d32.8977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f4b5acd3f89%3A0x12345678!2s916%20N%20Jupiter%20Rd%2C%20Garland%2C%20TX%2075042!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="US Office Location"
                  />
                </div>
              </div>

              {/* Kenya Map */}
              <div>
                <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <span className="text-xl">🇰🇪</span>
                  Kenya Office
                </h3>
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.016669684656!2d35.2699!3d0.5143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101e82fffffff%3A0x12345678!2sEldoret%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kenya Office Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "How can I donate to the organization?",
                  answer:
                    "You can donate through CashApp, Zelle, check, or M-Pesa (for Kenya donors). Visit our Donate page for full details and instructions.",
                },
                {
                  question: "Are my donations tax-deductible?",
                  answer:
                    "Our 501(c)(3) status is currently pending. We provide donation receipts for your records, but donations may not currently qualify for tax deductions. We'll update this once our status is approved.",
                },
                {
                  question: "Can I visit the communities in Kenya?",
                  answer:
                    "Yes! We welcome visitors and mission trips to our camps in Kenya. Contact us to discuss arrangements and timing.",
                },
                {
                  question: "How can I partner with the organization?",
                  answer:
                    "We partner with churches, businesses, and other organizations. Contact us to discuss partnership opportunities that align with your mission.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-neutral-50 border border-neutral-200"
                >
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to Make a Difference?"
        description="Join us in empowering widows and widowers across Kenya."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Get Involved", href: "/get-involved" }}
      />
    </>
  );
}

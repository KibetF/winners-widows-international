import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero, CTASection } from "@/components/sections";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  Building,
  Share2,
  Gift,
  Calendar,
  HandHeart,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join our mission to empower widows and widowers in Kenya. Donate, sponsor a program, partner with us, or spread the word.",
};

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Join Our Mission"
        subheadline="Every act of kindness creates ripples of hope"
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
        size="md"
      />

      {/* Ways to Help Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Ways You Can Help
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              There are many ways to support our mission. Choose the one that
              resonates with you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Donate */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-100 rounded-bl-full opacity-50" />
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-secondary-100 flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-secondary-600" />
                </div>
                <CardTitle className="text-2xl">Make a Donation</CardTitle>
                <CardDescription className="text-base">
                  Your generosity transforms lives. Every dollar goes directly to
                  empowering widows and widowers in Kenya.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-accent-500" />
                    One-time or recurring donations
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-accent-500" />
                    Multiple payment methods accepted
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-accent-500" />
                    Donation receipts provided
                  </li>
                </ul>
                <Link href="/donate">
                  <Button variant="secondary" size="md" className="w-full">
                    Donate Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Sponsor a Program */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-100 rounded-bl-full opacity-50" />
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-accent-100 flex items-center justify-center mb-4">
                  <Gift className="w-7 h-7 text-accent-600" />
                </div>
                <CardTitle className="text-2xl">Sponsor a Program</CardTitle>
                <CardDescription className="text-base">
                  Choose a specific program to support with monthly or one-time
                  sponsorship.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-accent-500" />
                    $50/month sponsors livestock care
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-accent-500" />
                    $100/month supports education
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-accent-500" />
                    $200/month funds healthcare
                  </li>
                </ul>
                <Link href="/donate">
                  <Button variant="primary" size="md" className="w-full">
                    Explore Sponsorship <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Partner With Us */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full opacity-50" />
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <Building className="w-7 h-7 text-primary-900" />
                </div>
                <CardTitle className="text-2xl">Partner With Us</CardTitle>
                <CardDescription className="text-base">
                  Churches, businesses, and organizations can create lasting
                  impact together.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-accent-500" />
                    Mission trip opportunities
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-accent-500" />
                    Corporate giving programs
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-accent-500" />
                    Church fundraising campaigns
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" size="md" className="w-full">
                    Become a Partner <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Spread the Word */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-100 rounded-bl-full opacity-50" />
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-neutral-100 flex items-center justify-center mb-4">
                  <Share2 className="w-7 h-7 text-neutral-600" />
                </div>
                <CardTitle className="text-2xl">Spread the Word</CardTitle>
                <CardDescription className="text-base">
                  Help us reach more supporters by sharing our mission with your
                  network.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-accent-500" />
                    Follow us on social media
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-accent-500" />
                    Share our story with friends
                  </li>
                  <li className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check className="w-4 h-4 text-accent-500" />
                    Invite us to speak at events
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="ghost" size="md" className="w-full">
                    Connect With Us <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Monthly Giving Impact
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              See how your monthly contribution creates ongoing change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                amount: 50,
                title: "Sustainer",
                impact: "Provides feed and care for livestock at one camp for a month",
                icon: HandHeart,
              },
              {
                amount: 100,
                title: "Champion",
                impact: "Supports one child's education including fees, uniforms, and supplies",
                icon: Users,
                featured: true,
              },
              {
                amount: 200,
                title: "Transformer",
                impact: "Funds comprehensive healthcare support for multiple members",
                icon: Heart,
              },
            ].map((tier) => (
              <Card
                key={tier.amount}
                className={`text-center ${
                  tier.featured ? "border-2 border-primary-900 relative" : ""
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-900 text-white text-xs font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-secondary-100 flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="w-7 h-7 text-secondary-600" />
                  </div>
                  <p className="text-4xl font-heading font-bold text-primary-900 mb-2">
                    ${tier.amount}
                    <span className="text-lg text-neutral-500">/month</span>
                  </p>
                  <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-3">
                    {tier.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-6">{tier.impact}</p>
                  <Link href="/donate">
                    <Button
                      variant={tier.featured ? "primary" : "outline"}
                      size="md"
                      className="w-full"
                    >
                      Give ${tier.amount}/month
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-neutral-500 mt-8">
            Can&apos;t commit monthly?{" "}
            <Link href="/donate" className="text-primary-900 hover:underline">
              Make a one-time donation
            </Link>
          </p>
        </div>
      </section>

      {/* Corporate Partnership */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-primary-900 uppercase tracking-wider mb-4 block">
                Corporate & Church Partnerships
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
                Partner With Purpose
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Organizations looking to make a meaningful impact can partner with
                Winners Widows & Widowers International in various ways. We offer
                customized partnership opportunities that align with your mission
                and values.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Employee giving and matching programs",
                  "Sponsored mission trips to Kenya",
                  "Church fundraising campaigns",
                  "In-kind donations (equipment, supplies)",
                  "Skills-based volunteering",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent-600" />
                    </div>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Discuss Partnership
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Corporate team meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer/Visit Section */}
      <section className="section bg-neutral-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="Community visit in Kenya"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-medium text-secondary-400 uppercase tracking-wider mb-4 block">
                Experience Our Work Firsthand
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Visit Our Communities
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Nothing compares to seeing our work in person. We welcome
                individuals, church groups, and organizations to visit our
                communities in Kenya and experience the impact firsthand.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Meet the widows and widowers you're helping",
                  "See our programs in action",
                  "Participate in community activities",
                  "Build lasting connections",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-secondary-400" />
                    <span className="text-neutral-200">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Plan a Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to Make a Difference?"
        description="Choose your way to get involved and start creating impact today."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}

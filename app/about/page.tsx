import { Metadata } from "next";
import Image from "next/image";
import { Hero, StatsBanner, Testimonial, CTASection } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import { STATS, ORGANIZATION, CAMPS } from "@/lib/constants";
import { Target, Eye, Heart, Users, Handshake, TrendingUp, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Winners Widows & Widowers International - our story, mission, vision, and approach to empowering widows and widowers in rural Kenya.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Our Story"
        subheadline="A journey of faith, compassion, and community transformation"
        backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
        size="md"
      />

      {/* The Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
                How It Began
              </h2>
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                  {/* PLACEHOLDER: Mary Kipchilis's personal story */}
                  In 2014, Mary Kipchilis felt a deep calling to serve those who
                  had lost their spouses in the rural communities of Kenya. Having
                  witnessed firsthand the struggles faced by widows and widowers
                  — the social stigma, economic hardship, and emotional isolation
                  — she knew something had to be done.
                </p>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  What started as a small gathering of widows in Kabarnet has
                  grown into a movement spanning three communities and serving
                  over 92 members. Winners Widows & Widowers International was
                  born from a simple belief: that every person deserves dignity,
                  hope, and the opportunity to thrive.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Today, we operate in both the United States and Kenya, connecting
                  compassionate supporters with real impact on the ground. Our dual
                  registration ensures efficient fund management, transparent
                  operations, and direct impact on the lives we serve.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80"
                  alt="Community gathering in Kenya"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-900 text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-secondary-400" />
                  <div>
                    <p className="text-2xl font-heading font-bold">Since 2014</p>
                    <p className="text-sm text-white/80">Serving with love</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary-900" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  To empower widows and widowers in rural Kenya through sustainable
                  livelihood programs that restore dignity, build self-sufficiency,
                  and strengthen communities.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  A Kenya where no widow or widower faces poverty alone — where
                  every grieving family has the support and resources to thrive
                  and build a brighter future.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  Our Values
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Dignity, compassion, transparency, community, and sustainability
                  guide everything we do. We believe in empowerment over charity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-neutral-600">
              We don&apos;t believe in handouts. We believe in sustainable empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Sustainable Empowerment",
                description:
                  "Providing resources that generate ongoing income — livestock, skills training, and business development.",
              },
              {
                icon: Users,
                title: "Community Ownership",
                description:
                  "Each camp has elected leadership. Members make decisions together, fostering responsibility and unity.",
              },
              {
                icon: Handshake,
                title: "Shared Prosperity",
                description:
                  "Proceeds from livestock and community enterprises are shared equally among all members.",
              },
              {
                icon: Heart,
                title: "Holistic Support",
                description:
                  "Addressing economic, educational, health, and emotional needs for complete transformation.",
              },
              {
                icon: MapPin,
                title: "Local Presence",
                description:
                  "Our Kenya office in Eldoret keeps us close to the communities we serve, ensuring direct impact.",
              },
              {
                icon: Eye,
                title: "Long-term Partnership",
                description:
                  "We don't just give and leave. We walk alongside our members for years, providing ongoing support.",
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
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBanner stats={STATS} variant="secondary" />

      {/* Timeline Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-12 text-center">
              Our Journey
            </h2>

            <div className="space-y-8">
              {[
                {
                  year: "2014",
                  title: "Founded",
                  description:
                    "Mary Kipchilis establishes Winners Widows & Widowers International with a vision to empower the vulnerable.",
                },
                {
                  year: "2015",
                  title: "Kasoiyo Camp Established",
                  description:
                    "Our first community camp is formed in Kabarnet, Kenya, with 10 founding members.",
                },
                {
                  year: "2018",
                  title: "Expansion to Talai",
                  description:
                    "The Talai camp is launched in Kaptumo Ward, growing our reach significantly.",
                },
                {
                  year: "2020",
                  title: "Cheburur Camp Joins",
                  description:
                    "Our third community in Chembulet is established, bringing our total to three active camps.",
                },
                {
                  year: "2021",
                  title: "Livestock Program Launch",
                  description:
                    "Introduction of dairy cows and Dorper sheep with our innovative shared proceeds model.",
                },
                {
                  year: "2024",
                  title: "Growing Strong",
                  description:
                    "Now serving 92+ active members with comprehensive empowerment programs across all camps.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-900 flex items-center justify-center text-secondary-400 font-heading font-bold text-sm">
                      {item.year.slice(-2)}
                    </div>
                    {index < 5 && (
                      <div className="w-0.5 h-full bg-neutral-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm text-primary-900 font-medium mb-1">
                      {item.year}
                    </p>
                    <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2">
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

      {/* Dual Registration Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
                Dual Registration
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Winners Widows & Widowers International operates in both the
                United States and Kenya. This structure ensures:
              </p>
              <ul className="space-y-4">
                {[
                  "Efficient fund management and transparent operations",
                  "Direct connection between donors and impact on the ground",
                  "Local leadership and decision-making in Kenya",
                  "Accountability and reporting to both regions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-accent-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-xl">🇺🇸</span>
                  </div>
                  <h3 className="font-heading font-semibold">USA</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  Our fundraising and donor relations hub in Garland, Texas,
                  connecting compassionate supporters with real impact.
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <span className="text-xl">🇰🇪</span>
                  </div>
                  <h3 className="font-heading font-semibold">Kenya</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  Our operations center in Eldoret, close to the communities we
                  serve, ensuring programs are implemented effectively.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Join Our Mission"
        description="Be part of a movement that's transforming lives across Kenya."
        primaryCta={{ label: "Support Us Today", href: "/donate" }}
        secondaryCta={{ label: "Meet Our Team", href: "/team" }}
      />
    </>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import { Hero, StatsBanner, Testimonial, CTASection, CampGallery } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import { CAMPS, STATS } from "@/lib/constants";
import { MapPin, Users, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "See the real impact of our work - meet the communities we serve across Kenya: Kasoiyo, Talai, and Cheburur camps.",
};

const campDetails = [
  {
    ...CAMPS[0],
    story: `Nestled in the highlands of Kabarnet, the Kasoiyo camp was our first community, established with a vision to create sustainable change. This tight-knit community of 22 widows and widowers has embraced our livestock empowerment model with remarkable success.

What started as a small group meeting under a tree has grown into a thriving community with dairy cows and Dorper sheep generating consistent income for all members.`,
    highlights: [
      "Pioneer community in our livestock program",
      "Dairy cows and Dorper sheep generating consistent income",
      "Democratic profit-sharing model in action",
      "Strong local leadership and mentorship",
    ],
    testimonial: {
      quote:
        "Before joining Kasoiyo camp, I didn't know how I would feed my children. Now, I have income from our cows, my children are in school, and I have a community that supports me. We are no longer alone.",
      author: "Grace M.",
      role: "Kasoiyo Camp Member since 2016",
    },
    images: [
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&q=80",
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80",
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
    ],
  },
  {
    ...CAMPS[1],
    story: `Our largest community, Talai in Kaptumo Ward, represents the scale of impact possible when communities unite. With 45 active members, this camp demonstrates the power of collective empowerment.

Talai has become a model for how our programs can transform entire communities. The members have not only improved their own lives but have also become advocates for widows' rights in the broader region.`,
    highlights: [
      "Largest active membership among all camps",
      "Full suite of programs operational",
      "Strong inter-member support network",
      "Active youth engagement initiatives",
    ],
    testimonial: {
      quote:
        "The skills training changed everything for me. I learned tailoring and now run a small business from my home. I can pay school fees and buy medicine when my children are sick. This program gave me a second chance at life.",
      author: "Margaret K.",
      role: "Talai Camp Member since 2018",
    },
    images: [
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    ],
  },
  {
    ...CAMPS[2],
    story: `In the village of Cheburur within Chembulet, 25 widows and widowers have found new hope and community. Though our newest camp, Cheburur has quickly become known for its strong focus on skills training and community initiatives.

The members of Cheburur have started a community garden that provides fresh vegetables for families and generates additional income through local market sales.`,
    highlights: [
      "Community garden initiative generating income",
      "Growing membership with strong new leaders",
      "Skills training hub for the region",
      "Youth mentorship programs",
    ],
    testimonial: {
      quote:
        "When my husband passed, I thought my life was over. But joining Cheburur camp showed me that I'm not alone. We support each other, we learn together, and we grow together. My children now see me as a businesswoman, not just a widow.",
      author: "Sarah T.",
      role: "Cheburur Camp Member since 2020",
    },
    images: [
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80",
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80",
    ],
  },
];

export default function ImpactPage() {
  const totalMembers = CAMPS.reduce((sum, camp) => sum + camp.members, 0);

  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Real Impact, Real Lives"
        subheadline="Meet the communities we serve across Kenya"
        backgroundImage="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1920&q=80"
        size="md"
      />

      {/* Stats Highlight */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-4xl font-heading font-bold text-primary-900">
                {totalMembers}+
              </p>
              <p className="text-neutral-600">Active Members</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-neutral-200" />
            <div>
              <p className="text-4xl font-heading font-bold text-primary-900">3</p>
              <p className="text-neutral-600">Community Camps</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-neutral-200" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary-900" />
              <span className="text-neutral-600">
                Kabarnet • Kaptumo • Chembulet
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Sections */}
      {campDetails.map((camp, index) => (
        <section
          key={camp.id}
          id={camp.id}
          className={`section ${index % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
        >
          <div className="container">
            {/* Camp Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-900" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900">
                  {camp.name}
                </h2>
                <div className="flex items-center gap-4 text-neutral-600 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {camp.location}
                  </span>
                  <span>•</span>
                  <span className="font-semibold text-primary-900">
                    {camp.members} Members
                  </span>
                </div>
              </div>
            </div>

            {/* Camp Content */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                {/* Story */}
                <div className="prose prose-neutral max-w-none mb-8">
                  {camp.story.split("\n\n").map((para, i) => (
                    <p key={i} className="text-neutral-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-4">
                    What Makes {camp.name.split(" ")[0]} Special
                  </h3>
                  <ul className="space-y-3">
                    {camp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-4 h-4 text-secondary-600"
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
                        <span className="text-neutral-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <Testimonial
                  quote={camp.testimonial.quote}
                  author={camp.testimonial.author}
                  role={camp.testimonial.role}
                  variant="featured"
                />
              </div>

              {/* Photo Gallery */}
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                      <Image
                        src={camp.images[0]}
                        alt={`${camp.name} community`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {camp.images.slice(1).map((image, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-xl overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${camp.name} activity ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Overall Impact Stats */}
      <StatsBanner stats={STATS} />

      {/* Success Metrics */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Measuring Our Success
            </h2>
            <p className="text-lg text-neutral-600 mb-12">
              Beyond numbers, we measure success in transformed lives, empowered
              families, and thriving communities.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <p className="text-5xl font-heading font-bold text-accent-500 mb-2">
                    100%
                  </p>
                  <p className="text-neutral-600">
                    of member children attending school
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <p className="text-5xl font-heading font-bold text-secondary-500 mb-2">
                    85%
                  </p>
                  <p className="text-neutral-600">
                    report improved household income
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <p className="text-5xl font-heading font-bold text-primary-900 mb-2">
                    92%
                  </p>
                  <p className="text-neutral-600">
                    feel more hopeful about the future
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <CampGallery />

      {/* CTA Section */}
      <CTASection
        headline="Be Part of Our Impact"
        description="Your support directly empowers widows and widowers across these three communities."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Get Involved", href: "/get-involved" }}
      />
    </>
  );
}

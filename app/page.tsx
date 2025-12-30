import Link from "next/link";
import Image from "next/image";
import { Hero, StatsBanner, ProgramCard, Testimonial, CTASection } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { STATS, PROGRAMS, ORGANIZATION } from "@/lib/constants";
import { Heart, Users, HandHeart, Share2, ArrowRight, Calendar } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Empowering Lives, Restoring Hope"
        subheadline="Supporting 92+ widows and widowers across Kenya through sustainable empowerment programs since 2014"
        primaryCta={{ label: "Support Our Mission", href: "/donate" }}
        secondaryCta={{ label: "See Our Impact", href: "/impact" }}
        backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
      />

      {/* Stats Banner */}
      <StatsBanner stats={STATS} />

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Winners Widows & Widowers International believes in empowerment, not
              handouts. We walk alongside widows and widowers in rural Kenya,
              providing sustainable resources that restore dignity and build
              lasting prosperity for families and communities.
            </p>
            <Link href="/about">
              <Button variant="outline" size="md">
                Learn Our Story <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Programs That Empower
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Sustainable solutions that transform lives and build lasting prosperity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {PROGRAMS.slice(0, 3).map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/programs">
              <Button variant="primary" size="md">
                View All Programs <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-primary-900 uppercase tracking-wider mb-4 block">
                Featured Impact Story
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
                Transforming Lives Through Community
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with a real story */}
                When Mary first joined the Kasoiyo camp, she was struggling to
                provide for her three children. Through our livestock empowerment
                program, she received a dairy cow that now provides daily income
                from milk sales. Today, all her children are in school, and she
                has become a mentor to other widows in her community.
              </p>
              <Testimonial
                quote="This program gave me more than a cow. It gave me hope and the tools to rebuild my family's future."
                author="Mary W."
                role="Kasoiyo Camp Member"
              />
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80"
                  alt="Community members with livestock"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-lg hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&q=80"
                  alt="Children at school"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="section bg-neutral-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How You Can Help
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Every act of kindness creates ripples of hope. Join us in empowering
              widows and widowers across Kenya.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-neutral-800 border-neutral-700 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary-400/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-secondary-400" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Donate</h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Your generosity transforms lives. Every dollar goes directly to
                  empowerment programs.
                </p>
                <Link href="/donate">
                  <Button variant="secondary" size="sm" className="w-full">
                    Give Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Sponsor a Program
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Choose a specific program to support with monthly or one-time
                  sponsorship.
                </p>
                <Link href="/get-involved">
                  <Button variant="outline" size="sm" className="w-full border-white/30 text-white hover:bg-white hover:text-neutral-900">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Partner With Us
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Churches, businesses, and organizations can create lasting impact
                  together.
                </p>
                <Link href="/get-involved">
                  <Button variant="outline" size="sm" className="w-full border-white/30 text-white hover:bg-white hover:text-neutral-900">
                    Become a Partner
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary-400/20 flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-7 h-7 text-secondary-400" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Spread the Word
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Share our mission with your network and help us reach more
                  supporters.
                </p>
                <Link href="/contact">
                  <Button variant="outline" size="sm" className="w-full border-white/30 text-white hover:bg-white hover:text-neutral-900">
                    Connect
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-2">
                Latest Updates
              </h2>
              <p className="text-neutral-600">
                Stories of hope and impact from our communities
              </p>
            </div>
            <Link href="/news">
              <Button variant="outline" size="sm">
                View All News <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Placeholder News Items */}
            {[
              {
                title: "Christmas 2024: Joy in Every Camp",
                date: "December 25, 2024",
                excerpt:
                  "This Christmas, we brought joy to all 92+ members across our three camps with food packages and celebration.",
                image:
                  "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80",
              },
              {
                title: "Livestock Program Expansion",
                date: "November 15, 2024",
                excerpt:
                  "New Dorper sheep added to the Kasoiyo camp, expanding our sustainable income generation efforts.",
                image:
                  "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&q=80",
              },
              {
                title: "Education Support: Back to School",
                date: "September 1, 2024",
                excerpt:
                  "Celebrating the start of a new school year with our education support program reaching more children.",
                image:
                  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
              },
            ].map((news, index) => (
              <Card key={index} hover className="overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2 mb-4">
                    {news.excerpt}
                  </p>
                  <Link
                    href="/news"
                    className="text-sm font-medium text-primary-900 hover:text-primary-700 inline-flex items-center gap-1"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Ready to Make a Difference?"
        description="Join us in empowering widows and widowers across Kenya. Your support creates lasting change."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}

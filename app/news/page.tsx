import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero, CTASection } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Latest news and updates from Winners Widows & Widowers International. Stories of hope and impact from our communities.",
};

// PLACEHOLDER: These would come from a CMS or database
const newsItems = [
  {
    slug: "christmas-2024-joy-in-every-camp",
    title: "Christmas 2024: Joy in Every Camp",
    excerpt:
      "This Christmas, Winners Widows & Widowers International brought joy to all 92+ members across our three camps with food packages and celebration.",
    content: `This Christmas, Winners Widows & Widowers International brought joy to all 92+ members across our three camps with comprehensive food packages and heartfelt celebrations.

Each family received packages containing rice, flour, sugar, cooking oil, and other essentials to ensure they could celebrate the holiday season with dignity and abundance.

The distribution events in Kasoiyo, Talai, and Cheburur were marked by singing, prayers, and testimonies of gratitude. Members shared how the organization has transformed their lives over the past year.

"This is more than food," said one Talai camp member. "This is love. This is family. We are not forgotten."

Our founder Mary Kipchilis personally attended the Kasoiyo distribution, sharing words of encouragement and hope for the new year ahead.`,
    image:
      "/images/impact/IMG_5578.jpeg",
    date: "December 25, 2024",
    category: "Events",
    readTime: "3 min read",
  },
  {
    slug: "livestock-program-expansion-november-2024",
    title: "Livestock Program Expands with New Dorper Sheep",
    excerpt:
      "New Dorper sheep added to the Kasoiyo camp, expanding our sustainable income generation efforts and bringing hope to more families.",
    content: `Our livestock program continues to grow with the addition of 10 new Dorper sheep to the Kasoiyo camp in November 2024.

Dorper sheep are particularly well-suited to the Kenyan highlands, known for their resilience and excellent meat quality. These additions will help diversify the income streams for our Kasoiyo members.

The sheep will be managed collectively, with proceeds shared equally among all 22 members of the camp. Training sessions on sheep husbandry have been conducted to ensure proper care.

"The cows changed our lives, and now the sheep will help even more," shared a Kasoiyo coordinator. "We are learning new skills and growing together."

This expansion was made possible through generous donations from supporters in both the US and Kenya.`,
    image:
      "/images/programs/photo-5845_singular_display_fullPicture.jpeg",
    date: "November 15, 2024",
    category: "Programs",
    readTime: "4 min read",
  },
  {
    slug: "back-to-school-september-2024",
    title: "Education Support: Back to School Success",
    excerpt:
      "Celebrating the start of a new school year with our education support program reaching more children than ever before.",
    content: `September 2024 marked another successful back-to-school season for children supported by Winners Widows & Widowers International.

Fifty children from across our three camps returned to school with paid fees, new uniforms, and complete sets of school supplies. For many of these children, consistent schooling would be impossible without this support.

"My mother works so hard, but school fees were always a struggle," shared a 14-year-old from Talai camp. "Now I can focus on my studies. I want to be a teacher."

The education program has been a cornerstone of our empowerment approach since the beginning. We believe that educating the next generation is key to breaking the cycle of poverty.

Parents participated in a workshop on supporting their children's education at home, emphasizing the partnership between home and school.`,
    image:
      "/images/impact/IMG_5550.jpeg",
    date: "September 1, 2024",
    category: "Programs",
    readTime: "3 min read",
  },
  {
    slug: "skills-training-workshop-august-2024",
    title: "Skills Training Workshop Empowers 20 Women",
    excerpt:
      "Talai camp hosts successful tailoring and business skills workshop, opening new income opportunities for members.",
    content: `Twenty women from our Talai camp completed an intensive tailoring and business skills workshop in August 2024.

The two-week program covered basic sewing techniques, pattern making, and essential business skills including pricing, customer service, and basic bookkeeping.

Each participant received a sewing kit to continue practicing their skills, and several have already begun taking orders from their communities.

"I never thought I could learn something new at my age," shared one participant. "Now I'm making dresses and earning money. My grandchildren are so proud of me."

This program was designed based on feedback from members themselves, who identified tailoring as a high-demand skill in their communities.`,
    image:
      "/images/impact/IMG_5553.jpeg",
    date: "August 10, 2024",
    category: "Programs",
    readTime: "4 min read",
  },
  {
    slug: "healthcare-outreach-july-2024",
    title: "Community Health Outreach Reaches 50+ Members",
    excerpt:
      "Free health screenings and education sessions held across all three camps in partnership with local healthcare providers.",
    content: `In July 2024, Winners Widows & Widowers International partnered with local healthcare providers to bring free health screenings to over 50 members across our three camps.

The outreach included blood pressure checks, diabetes screening, and general health consultations. Health education sessions covered nutrition, hygiene, and common health concerns.

Several members were referred for follow-up care, with medical bills covered by our healthcare assistance fund.

"Access to healthcare is a challenge in rural areas," explained our Kenya coordinator. "These outreach events help identify issues early and connect our members with the care they need."

The success of this initiative has led to plans for quarterly health outreach events in 2025.`,
    image:
      "/images/programs/699e9ca9-244e-433b-a671-647731808083.jpg",
    date: "July 20, 2024",
    category: "Healthcare",
    readTime: "3 min read",
  },
];

export default function NewsPage() {
  const featuredPost = newsItems[0];
  const otherPosts = newsItems.slice(1);

  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Latest News"
        subheadline="Stories of hope and impact from our communities"
        backgroundImage="/images/impact/IMG_5549.jpeg"
        size="sm"
      />

      {/* Featured Post */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <Badge
                    variant="primary"
                    className="absolute top-4 left-4"
                  >
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Badge variant="secondary" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-neutral-600 mb-6">{featuredPost.excerpt}</p>
                  <Link
                    href={`/news/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-primary-900 font-medium hover:text-primary-700"
                  >
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-8">
              More Stories
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {otherPosts.map((post) => (
                <Card key={post.slug} hover className="overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <Badge variant="default">{post.category}</Badge>
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/news/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary-900 hover:text-primary-700"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Placeholder */}
      <section className="section bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-white/80 mb-8">
              Want to receive updates about our work and impact? Follow us on
              social media or contact us to join our mailing list.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-secondary btn-md">
                Get in Touch
              </Link>
              <a
                href="https://facebook.com/winnerswidows"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-md border-white text-white hover:bg-white hover:text-primary-900"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Be Part of Our Story"
        description="Your support creates the stories of hope we share here."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Get Involved", href: "/get-involved" }}
      />
    </>
  );
}

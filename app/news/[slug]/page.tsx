import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";

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

Our founder Mary Kipchilis personally attended the Kasoiyo distribution, sharing words of encouragement and hope for the new year ahead.

The Christmas program has been a tradition since our founding, ensuring that no member celebrates alone. This year's distribution was made possible by generous donors from both the United States and Kenya.

As we look forward to 2025, we are grateful for the community of supporters who make moments like these possible. Your donations don't just provide food—they provide hope, dignity, and belonging.`,
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&q=80",
    date: "December 25, 2024",
    category: "Events",
    readTime: "3 min read",
    author: "WWWI Team",
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

This expansion was made possible through generous donations from supporters in both the US and Kenya.

The Dorper breed was selected after consultation with local agricultural experts who confirmed their suitability for the region's climate and terrain. Unlike some sheep breeds, Dorpers are low-maintenance and adapt well to varying conditions.

Each sheep represents not just an asset but an opportunity—for income, for skill-building, and for community growth. As the flock grows, so does the potential for sustainable income generation.

We are grateful to all donors who made this expansion possible and look forward to sharing more success stories as this program develops.`,
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1200&q=80",
    date: "November 15, 2024",
    category: "Programs",
    readTime: "4 min read",
    author: "WWWI Team",
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

Parents participated in a workshop on supporting their children's education at home, emphasizing the partnership between home and school.

This year's back-to-school program included:
- Full term school fees for 50 children
- New uniforms for students who had outgrown theirs
- Complete sets of school supplies including books, pens, and mathematical sets
- Parent education workshop on supporting learning at home

We are committed to ensuring that every child in our community has access to quality education. Your donations make this possible.`,
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80",
    date: "September 1, 2024",
    category: "Programs",
    readTime: "3 min read",
    author: "WWWI Team",
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

This program was designed based on feedback from members themselves, who identified tailoring as a high-demand skill in their communities.

The workshop was led by an experienced tailor from Eldoret who volunteered her time and expertise. Her patience and encouragement helped even the most hesitant participants gain confidence.

Beyond technical skills, the workshop fostered a sense of community and mutual support among participants. Many have formed informal groups to share resources and refer customers to each other.

This is the power of sustainable empowerment—giving people the skills and tools they need to generate their own income and support their families.`,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
    date: "August 10, 2024",
    category: "Programs",
    readTime: "4 min read",
    author: "WWWI Team",
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

The success of this initiative has led to plans for quarterly health outreach events in 2025.

Health statistics from the outreach revealed important insights:
- 15% of members screened had elevated blood pressure requiring monitoring
- Several cases of early-stage conditions were identified and treated
- All participants received personalized health advice

We are grateful to the healthcare volunteers who donated their time and expertise to make this outreach possible. Together, we are ensuring that our members have access to the healthcare they deserve.`,
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80",
    date: "July 20, 2024",
    category: "Healthcare",
    readTime: "3 min read",
    author: "WWWI Team",
  },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = newsItems.find((item) => item.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  return newsItems.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NewsArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const post = newsItems.find((item) => item.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = newsItems
    .filter((item) => item.category === post.category && item.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* Article Header */}
      <article>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container">
              <div className="max-w-3xl">
                <Badge variant="secondary" className="mb-4">
                  {post.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <span>By {post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary-900 hover:text-primary-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>

            {/* Content */}
            <div className="prose prose-lg prose-neutral max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="font-semibold text-neutral-900">
                  Share this article
                </span>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `https://winnerswidows.org/news/${post.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      `https://winnerswidows.org/news/${post.slug}`
                    )}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-sky-100 hover:text-sky-600 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-neutral-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/news/${related.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-neutral-500 mb-2">
                          {related.date}
                        </p>
                        <h3 className="font-heading font-semibold text-lg text-neutral-900 group-hover:text-primary-900 transition-colors">
                          {related.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        headline="Support Our Mission"
        description="Your donation helps us continue this important work."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Get Involved", href: "/get-involved" }}
      />
    </>
  );
}

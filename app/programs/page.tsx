import { Metadata } from "next";
import Image from "next/image";
import { Hero, ProgramCard, CTASection } from "@/components/sections";
import { PROGRAMS } from "@/lib/constants";
import {
  Beef,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Gift,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Explore our sustainable empowerment programs - livestock, education, healthcare, skills training, and seasonal support for widows and widowers in Kenya.",
};

const programDetails = [
  {
    ...PROGRAMS[0],
    fullDescription: `Our flagship program provides dairy cows and Dorper sheep to community members. Unlike traditional charity models, our livestock program creates ongoing income through a unique shared proceeds model.

Members receive livestock as a community resource, learning valuable animal husbandry skills while generating sustainable income. Milk and sale proceeds are shared equally among all members, ensuring everyone benefits. As animals reproduce, the community's assets grow over time.`,
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1200&q=80",
    stats: [
      { label: "Dairy Cows", value: "12+" },
      { label: "Dorper Sheep", value: "30+" },
      { label: "Beneficiaries", value: "92+" },
    ],
  },
  {
    ...PROGRAMS[1],
    fullDescription: `Education breaks the cycle of poverty. We support children of widows and widowers through comprehensive educational assistance, ensuring they have every opportunity to succeed.

Our education program covers school fees, uniforms, and supplies. We also provide scholarship opportunities for higher education and adult literacy programs to empower parents alongside their children.`,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80",
    stats: [
      { label: "Students Supported", value: "50+" },
      { label: "Schools Partnered", value: "8" },
      { label: "Scholarships Given", value: "15" },
    ],
  },
  {
    ...PROGRAMS[2],
    fullDescription: `Health is wealth. Our healthcare support ensures that members and their families have access to medical care when they need it most.

We assist with medical bills, coordinate health education and awareness programs, partner with local healthcare providers for discounted services, and maintain an emergency medical fund for urgent situations.`,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80",
    stats: [
      { label: "Medical Bills Paid", value: "100+" },
      { label: "Health Camps", value: "6" },
      { label: "Partner Clinics", value: "3" },
    ],
  },
  {
    ...PROGRAMS[3],
    fullDescription: `We teach skills that last a lifetime. Our income and skills training program equips members with the knowledge and abilities they need to generate sustainable income.

From vocational training to small business development, financial literacy education to agricultural best practices, we provide comprehensive training that transforms livelihoods.`,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
    stats: [
      { label: "Members Trained", value: "75+" },
      { label: "Business Started", value: "20+" },
      { label: "Training Programs", value: "12" },
    ],
  },
  {
    ...PROGRAMS[4],
    fullDescription: `We're there when it matters most. Our seasonal and emergency support program provides crucial assistance during holidays and unexpected crises.

Every Christmas, all members receive food packages to celebrate with their families. Throughout the year, we respond to emergencies with quick assistance, organize community celebration events, and provide bereavement support for those who have lost loved ones.`,
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&q=80",
    stats: [
      { label: "Christmas Packages", value: "92+" },
      { label: "Emergencies Assisted", value: "40+" },
      { label: "Community Events", value: "8" },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Programs That Empower"
        subheadline="Sustainable solutions that transform lives and build lasting prosperity"
        backgroundImage="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&q=80"
        size="md"
      />

      {/* Program Grid Overview */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Our Five Pillars of Empowerment
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Each program is designed to address specific needs while working
              together to provide holistic support for our members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program) => (
              <ProgramCard key={program.id} {...program} showLink={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program Sections */}
      {programDetails.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`section ${index % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
        >
          <div className="container">
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    {program.icon === "Beef" && (
                      <Beef className="w-6 h-6 text-primary-900" />
                    )}
                    {program.icon === "GraduationCap" && (
                      <GraduationCap className="w-6 h-6 text-primary-900" />
                    )}
                    {program.icon === "HeartPulse" && (
                      <HeartPulse className="w-6 h-6 text-primary-900" />
                    )}
                    {program.icon === "Briefcase" && (
                      <Briefcase className="w-6 h-6 text-primary-900" />
                    )}
                    {program.icon === "Gift" && (
                      <Gift className="w-6 h-6 text-primary-900" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-primary-900 uppercase tracking-wider">
                    Program {index + 1}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
                  {program.title}
                </h2>
                <div className="prose prose-neutral max-w-none mb-8">
                  {program.fullDescription.split("\n\n").map((para, i) => (
                    <p key={i} className="text-neutral-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {program.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="text-center p-4 bg-white rounded-xl border border-neutral-200"
                    >
                      <p className="text-2xl font-heading font-bold text-primary-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-neutral-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Impact Numbers */}
      <section className="section bg-primary-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Collective Impact
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Through our five programs, we&apos;re creating measurable change in the
              lives of widows and widowers across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "92+", label: "Active Members" },
              { value: "3", label: "Community Camps" },
              { value: "200+", label: "Lives Impacted" },
              { value: "$50K+", label: "Allocated Annually" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-heading font-bold text-secondary-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Support Our Programs"
        description="Your donation directly funds these life-changing programs. Choose a program to support or give to our general fund."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "See Our Impact", href: "/impact" }}
      />
    </>
  );
}

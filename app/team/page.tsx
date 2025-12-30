import { Metadata } from "next";
import Image from "next/image";
import { Hero, TeamCard, CTASection } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import { BOARD_MEMBERS, CAMPS } from "@/lib/constants";
import { Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the dedicated team behind Winners Widows & Widowers International - our founder, board of directors, and Kenya operations team.",
};

export default function TeamPage() {
  const founder = BOARD_MEMBERS[0];
  const boardMembers = BOARD_MEMBERS.slice(1);

  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Our Team"
        subheadline="Dedicated leaders serving with compassion and purpose"
        backgroundImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
        size="md"
      />

      {/* Founder Spotlight */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <TeamCard
              name={founder.name}
              role={founder.role}
              bio={founder.bio}
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              featured
            />

            {/* Founder's Quote */}
            <div className="mt-12 bg-primary-50 rounded-2xl p-8 md:p-12 text-center">
              <blockquote>
                <p className="text-xl md:text-2xl font-heading italic text-neutral-800 mb-6">
                  &ldquo;When I see a widow smile again, when I see her children
                  thriving in school, when I see communities united in purpose —
                  that is why we do this work. That is our calling.&rdquo;
                </p>
                <footer className="text-primary-900 font-semibold">
                  — Mary Kipchilis, Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Board of Directors
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our board members bring diverse expertise and a shared commitment
              to our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Re-include founder in the grid */}
            <TeamCard
              name={founder.name}
              role={founder.role}
              bio={founder.bio}
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
            />
            {boardMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={`https://images.unsplash.com/photo-${
                  [
                    "1507003211169-0a1dd7228f2d",
                    "1472099645785-5658abf4ff4e",
                    "1519345182560-3f2917c472ef",
                  ][index]
                }?w=600&q=80`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Kenya Operations Team */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Kenya Operations Team
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Our three community camps are led by dedicated local coordinators,
                chairpersons, secretaries, and treasurers who ensure programs run
                effectively and funds reach those who need them most.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {CAMPS.map((camp) => (
                <Card key={camp.id} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-primary-900" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-neutral-900 mb-1">
                      {camp.name}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-3">{camp.location}</p>
                    <p className="text-2xl font-heading font-bold text-primary-900 mb-1">
                      {camp.members}
                    </p>
                    <p className="text-sm text-neutral-600">Active Members</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-neutral-50 rounded-2xl p-8 text-center">
              <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-4">
                Camp Leadership Structure
              </h3>
              <p className="text-neutral-600 mb-6">
                Each camp operates with democratic leadership elected by members:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Coordinator", "Chairperson", "Secretary", "Treasurer"].map(
                  (role) => (
                    <span
                      key={role}
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium text-neutral-700 border border-neutral-200"
                    >
                      {role}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Work With Us
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Whether you&apos;re interested in volunteering, partnering, or joining
              our mission in another way, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn btn-primary btn-lg"
              >
                Get in Touch
              </a>
              <a
                href="/get-involved"
                className="btn btn-outline btn-lg"
              >
                Ways to Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Support Our Team's Work"
        description="Your donation enables our team to continue empowering widows and widowers across Kenya."
        primaryCta={{ label: "Donate Now", href: "/donate" }}
        secondaryCta={{ label: "Learn More", href: "/about" }}
      />
    </>
  );
}

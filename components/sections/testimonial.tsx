import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  variant?: "default" | "featured";
}

export function Testimonial({
  quote,
  author,
  role,
  variant = "default",
}: TestimonialProps) {
  if (variant === "featured") {
    return (
      <div className="relative bg-primary-900 text-white rounded-2xl p-8 md:p-12">
        <Quote className="absolute top-6 left-6 w-12 h-12 text-secondary-400/30" />
        <blockquote className="relative z-10">
          <p className="text-xl md:text-2xl font-heading italic leading-relaxed mb-6">
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-400/20 flex items-center justify-center">
              <span className="text-secondary-400 font-heading font-bold text-lg">
                {author.charAt(0)}
              </span>
            </div>
            <div>
              <cite className="not-italic font-semibold text-white">
                {author}
              </cite>
              {role && (
                <p className="text-sm text-white/70">{role}</p>
              )}
            </div>
          </footer>
        </blockquote>
      </div>
    );
  }

  return (
    <div className="relative bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-200" />
      <blockquote>
        <p className="text-neutral-700 italic leading-relaxed mb-4">
          &ldquo;{quote}&rdquo;
        </p>
        <footer>
          <cite className="not-italic font-semibold text-neutral-900">
            {author}
          </cite>
          {role && (
            <p className="text-sm text-neutral-500">{role}</p>
          )}
        </footer>
      </blockquote>
    </div>
  );
}

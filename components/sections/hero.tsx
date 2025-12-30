import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  headline: string;
  subheadline?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  overlay?: boolean;
  centered?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlay = true,
  centered = true,
  size = "lg",
}: HeroProps) {
  const heights = {
    sm: "min-h-[300px] md:min-h-[400px]",
    md: "min-h-[400px] md:min-h-[500px]",
    lg: "min-h-[500px] md:min-h-[600px] lg:min-h-[700px]",
  };

  return (
    <section
      className={cn(
        "relative flex items-center",
        heights[size],
        backgroundImage ? "text-white" : "bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white"
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-primary-900/50" />
          )}
        </div>
      )}

      {/* Decorative Pattern */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-pattern opacity-50" />
      )}

      {/* Content */}
      <div className={cn("container relative z-10", centered && "text-center")}>
        <div className={cn("max-w-3xl", centered && "mx-auto")}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-balance">
            {headline}
          </h1>
          {subheadline && (
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {subheadline}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4",
                centered && "justify-center"
              )}
            >
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <Button variant="secondary" size="lg">
                    {primaryCta.label}
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary-900"
                  >
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      {size === "lg" && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="currentColor"
              className="text-neutral-50"
            />
          </svg>
        </div>
      )}
    </section>
  );
}

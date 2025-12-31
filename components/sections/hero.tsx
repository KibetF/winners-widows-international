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
            className="object-cover object-[center_15%]"
            priority
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 via-primary-900/20 to-transparent" />
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {headline}
          </h1>
          {subheadline && (
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
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

    </section>
  );
}

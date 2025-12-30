import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  headline: string;
  description?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "primary" | "secondary" | "accent";
}

export function CTASection({
  headline,
  description,
  primaryCta,
  secondaryCta,
  variant = "primary",
}: CTASectionProps) {
  const variants = {
    primary: "bg-primary-900",
    secondary: "bg-secondary-400",
    accent: "bg-accent-500",
  };

  const textColors = {
    primary: "text-white",
    secondary: "text-neutral-900",
    accent: "text-white",
  };

  return (
    <section className={cn("py-16 md:py-24 relative overflow-hidden", variants[variant])}>
      {/* Decorative Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-heading font-bold mb-4",
              textColors[variant]
            )}
          >
            {headline}
          </h2>
          {description && (
            <p
              className={cn(
                "text-lg mb-8",
                variant === "primary" && "text-white/80",
                variant === "secondary" && "text-neutral-700",
                variant === "accent" && "text-white/80"
              )}
            >
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryCta.href}>
              <Button
                variant={variant === "secondary" ? "primary" : "secondary"}
                size="lg"
              >
                {primaryCta.label}
              </Button>
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button
                  variant="outline"
                  size="lg"
                  className={cn(
                    variant === "primary" &&
                      "border-white text-white hover:bg-white hover:text-primary-900",
                    variant === "secondary" &&
                      "border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white",
                    variant === "accent" &&
                      "border-white text-white hover:bg-white hover:text-accent-500"
                  )}
                >
                  {secondaryCta.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

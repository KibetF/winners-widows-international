import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface StatsBannerProps {
  stats: readonly Stat[] | Stat[];
  variant?: "primary" | "secondary" | "white";
}

export function StatsBanner({ stats, variant = "primary" }: StatsBannerProps) {
  const variants = {
    primary: "bg-primary-900 text-white",
    secondary: "bg-secondary-400 text-neutral-900",
    white: "bg-white text-neutral-900 shadow-lg",
  };

  return (
    <section className={cn("py-12 md:py-16", variants[variant])}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={cn(
                  "text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-2",
                  variant === "primary" && "text-secondary-400",
                  variant === "secondary" && "text-primary-900",
                  variant === "white" && "text-primary-900"
                )}
              >
                {stat.value}
              </div>
              <div
                className={cn(
                  "text-sm md:text-base font-medium",
                  variant === "primary" && "text-white/80",
                  variant === "secondary" && "text-neutral-700",
                  variant === "white" && "text-neutral-600"
                )}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

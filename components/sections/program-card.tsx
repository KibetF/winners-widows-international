import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Beef,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Gift,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Beef,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Gift,
};

interface ProgramCardProps {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  showLink?: boolean;
}

export function ProgramCard({
  id,
  title,
  icon,
  description,
  features,
  showLink = true,
}: ProgramCardProps) {
  const Icon = iconMap[icon] || Beef;

  return (
    <Card hover className="h-full flex flex-col">
      <CardHeader>
        <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-primary-900" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-2 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        {showLink && (
          <Link href={`/programs#${id}`}>
            <Button variant="ghost" size="sm" className="w-full">
              Learn More
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}

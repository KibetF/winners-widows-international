import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  featured?: boolean;
}

export function TeamCard({ name, role, bio, image, featured = false }: TeamCardProps) {
  if (featured) {
    return (
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[400px]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-top"
            />
          </div>
          <CardContent className="p-8 flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit mb-4">
              {role}
            </Badge>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              {name}
            </h3>
            <p className="text-neutral-600 leading-relaxed">{bio}</p>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card hover className="overflow-hidden">
      <div className="relative aspect-[3/4]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-1">
          {name}
        </h3>
        <p className="text-sm text-primary-900 font-medium mb-3">{role}</p>
        <p className="text-sm text-neutral-600">{bio}</p>
      </CardContent>
    </Card>
  );
}

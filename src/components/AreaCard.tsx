import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

interface AreaCardProps {
  name: string;
  slug: string;
  description: string;
}

export const AreaCard = ({ name, slug, description }: AreaCardProps) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-card-hover">
      <CardHeader>
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <MapPin className="h-5 w-5" />
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <Button variant="outline" size="sm" asChild className="group-hover:bg-primary group-hover:text-primary-foreground">
          <Link to={`/gutter-cleaning/${slug}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

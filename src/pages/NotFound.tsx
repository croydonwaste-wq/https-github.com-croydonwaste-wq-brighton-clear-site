import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Gutter Cleanings Near Me</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage for professional gutter cleaning services across Brighton, Sussex & Surrey." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="container max-w-2xl text-center">
          <h1 className="mb-4 text-6xl font-bold">404</h1>
          <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                <Search className="mr-2 h-5 w-5" />
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

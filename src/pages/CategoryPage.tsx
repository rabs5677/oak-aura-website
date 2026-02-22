import { useParams, Link } from "react-router-dom";
import { categories } from "@/data/categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationSection from "@/components/ConsultationSection";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="heading-section">Category Not Found</h1>
            <Button asChild variant="outline" className="mt-4">
              <Link to="/">Go Home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Generate placeholder products for the category
  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `${category.name} Design ${i + 1}`,
    price: `₹${(15000 + i * 5000).toLocaleString("en-IN")}`,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">

        {/* TOP SECTION */}
        <div className="section-padding py-8">

          {/* Back Buttons */}
          <div className="flex items-center gap-4 mb-6">

            <Link
              to="/#hero"
              state={{ scrollTo: "hero" }}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
               ↑ Back to Home
            </Link>

            <Link
              to="/#categories"
              state={{ scrollTo: "categories" }}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Back to Categories
            </Link>

          </div>

          {/* Heading */}
          <h1 className="heading-display">{category.name}</h1>

          <p className="mt-2 text-muted-foreground">
            Explore our curated collection of premium {category.name.toLowerCase()}.
          </p>

          {/* Products Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-card"
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={category.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-foreground">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Starting from {product.price}
                  </p>

                  <Button asChild size="sm" variant="outline" className="mt-3 w-full">
                    <a
                      href={`https://wa.me/919076072584?text=Hi, I'm interested in ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire Now
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>

        <ConsultationSection />
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
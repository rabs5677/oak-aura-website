
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "@/data/categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationSection from "@/components/ConsultationSection";
import { Button } from "@/components/ui/button";

// Sofa images
import sofa1 from "@/assets/products/sofa-images/sofa1.png";
import sofa2 from "@/assets/products/sofa-images/sofa2.png";
import sofa3 from "@/assets/products/sofa-images/sofa3.png";
import sofa4 from "@/assets/products/sofa-images/sofa4.png";
import sofa5 from "@/assets/products/sofa-images/sofa5.png";
import sofa6 from "@/assets/products/sofa-images/sofa6.png";
import sofa7 from "@/assets/products/sofa-images/sofa7.png";
import sofa8 from "@/assets/products/sofa-images/sofa8.jpeg";
import sofa9 from "@/assets/products/sofa-images/sofa9.jpeg";

// Bed images
import bed1 from "@/assets/products/bed-images/bed1.png";
import bed2 from "@/assets/products/bed-images/bed2.png";
import bed3 from "@/assets/products/bed-images/bed3.png";
import bed4 from "@/assets/products/bed-images/bed4.png";
import bed5 from "@/assets/products/bed-images/bed5.png";
import bed6 from "@/assets/products/bed-images/bed6.png";
import bed7 from "@/assets/products/bed-images/bed7.png";
import bed8 from "@/assets/products/bed-images/bed8.png";

// Wardrobe images
import wardrobe1 from "@/assets/products/wardrobe-images/wardrobe1.png";
import wardrobe2 from "@/assets/products/wardrobe-images/wardrobe2.png";
import wardrobe3 from "@/assets/products/wardrobe-images/wardrobe3.png";
import wardrobe4 from "@/assets/products/wardrobe-images/wardrobe4.png";

// Dressing table images
import dress1 from "@/assets/products/dressing-table-images/dress1.png";
import dress2 from "@/assets/products/dressing-table-images/dress2.png";
import dress3 from "@/assets/products/dressing-table-images/dress3.png";

type SelectedProduct = {
  name: string;
  image: string;
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const category = categories.find((c) => c.slug === slug);

  const [selectedProduct, setSelectedProduct] =
    useState<SelectedProduct | null>(null);

  const [zoom, setZoom] = useState(1);

  // Identify the current category using its slug and name
  const categoryIdentifier =
    `${category?.slug ?? ""} ${category?.name ?? ""}`.toLowerCase();

  const isSofaCategory =
    categoryIdentifier.includes("sofa");

  const isBedCategory =
    categoryIdentifier.includes("bed");

  const isWardrobeCategory =
    categoryIdentifier.includes("wardrobe");

  const isDressingTableCategory =
    categoryIdentifier.includes("dressing") ||
    categoryIdentifier.includes("dresser");

  // Close zoom viewer using Escape key
  useEffect(() => {
    if (!selectedProduct) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
        setZoom(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="heading-section">
              Category Not Found
            </h1>

            <Button asChild variant="outline" className="mt-4">
              <Link to="/">Go Home</Link>
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Sofa products
  const sofaProducts = [
    { id: 1, name: "Sofa Design 1", price: "₹35,000", image: sofa1 },
    { id: 2, name: "Sofa Design 2", price: "₹40,000", image: sofa2 },
    { id: 3, name: "Sofa Design 3", price: "₹45,000", image: sofa3 },
    { id: 4, name: "Sofa Design 4", price: "₹50,000", image: sofa4 },
    { id: 5, name: "Sofa Design 5", price: "Price on request", image: sofa5 },
    { id: 6, name: "Sofa Design 6", price: "Price on request", image: sofa6 },
    { id: 7, name: "Sofa Design 7", price: "Price on request", image: sofa7 },
    { id: 8, name: "Sofa Design 8", price: "Price on request", image: sofa8 },
    { id: 9, name: "Sofa Design 9", price: "Price on request", image: sofa9 },
  ];

  // Bed products
  const bedProducts = [
    { id: 1, name: "Bed Design 1", price: "Price on request", image: bed1 },
    { id: 2, name: "Bed Design 2", price: "Price on request", image: bed2 },
    { id: 3, name: "Bed Design 3", price: "Price on request", image: bed3 },
    { id: 4, name: "Bed Design 4", price: "Price on request", image: bed4 },
    { id: 5, name: "Bed Design 5", price: "Price on request", image: bed5 },
    { id: 6, name: "Bed Design 6", price: "Price on request", image: bed6 },
    { id: 7, name: "Bed Design 7", price: "Price on request", image: bed7 },
    { id: 8, name: "Bed Design 8", price: "Price on request", image: bed8 },
  ];

  // Wardrobe products
  const wardrobeProducts = [
    { id: 1, name: "Wardrobe Design 1", price: "Price on request", image: wardrobe1 },
    { id: 2, name: "Wardrobe Design 2", price: "Price on request", image: wardrobe2 },
    { id: 3, name: "Wardrobe Design 3", price: "Price on request", image: wardrobe3 },
    { id: 4, name: "Wardrobe Design 4", price: "Price on request", image: wardrobe4 },
  ];

  // Dressing table products
  const dressingTableProducts = [
    { id: 1, name: "Dressing Table Design 1", price: "Price on request", image: dress1 },
    { id: 2, name: "Dressing Table Design 2", price: "Price on request", image: dress2 },
    { id: 3, name: "Dressing Table Design 3", price: "Price on request", image: dress3 },
  ];

  // Select products according to category
  const products = isSofaCategory
    ? sofaProducts
    : isBedCategory
      ? bedProducts
      : isWardrobeCategory
        ? wardrobeProducts
        : isDressingTableCategory
          ? dressingTableProducts
          : Array.from({ length: 8 }, (_, i) => ({
              id: i + 1,
              name: `${category.name} Design ${i + 1}`,
              price: `₹${(15000 + i * 5000).toLocaleString("en-IN")}`,
              image: category.image,
            }));

  // Close image viewer and reset zoom
  const closeImageViewer = () => {
    setSelectedProduct(null);
    setZoom(1);
  };

  // Apply consistent image sizing to all four furniture categories
  const useContainedImages =
    isSofaCategory ||
    isBedCategory ||
    isWardrobeCategory ||
    isDressingTableCategory;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="section-padding py-8">

          {/* Navigation links */}
          <div className="mb-6 flex items-center gap-4">
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

          <h1 className="heading-display">
            {category.name}
          </h1>

          <p className="mt-2 text-muted-foreground">
            Explore our curated collection of premium{" "}
            {category.name.toLowerCase()}.
          </p>

          {/* Product grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-card"
              >
                {/* Click image to open zoom viewer */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct({
                      name: product.name,
                      image: product.image,
                    });
                    setZoom(1);
                  }}
                  aria-label={`View ${product.name} image`}
                  className="relative flex aspect-square w-full cursor-zoom-in items-center justify-center overflow-hidden bg-secondary"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`h-full w-full transition-transform duration-500 ${
                      useContainedImages
                        ? "object-contain p-3"
                        : "object-cover group-hover:scale-105"
                    }`}
                  />

                  <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 text-xs text-foreground opacity-0 shadow transition-opacity group-hover:opacity-100">
                    Click to zoom
                  </span>
                </button>

                {/* Product details */}
                <div className="p-4">
                  <h3 className="font-medium text-foreground">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Starting from {product.price}
                  </p>

                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="mt-3 w-full"
                  >
                    <a
                      href={`https://wa.me/919076072584?text=${encodeURIComponent(
                        `Hi, I'm interested in ${product.name}. Please share more details.`
                      )}`}
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

      {/* Image zoom viewer */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={closeImageViewer}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProduct.name} image preview`}
            className="relative flex max-h-[95vh] w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeImageViewer}
              aria-label="Close image viewer"
              className="absolute -right-1 -top-12 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-black shadow-lg hover:bg-gray-200 sm:right-0"
            >
              ×
            </button>

            <h2 className="mb-3 text-lg font-medium text-white">
              {selectedProduct.name}
            </h2>

            {/* Zoomable image */}
            <div className="flex max-h-[75vh] w-full items-center justify-center overflow-hidden rounded-lg bg-white">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                draggable={false}
                className="max-h-[75vh] w-full select-none object-contain transition-transform duration-200"
                style={{ transform: `scale(${zoom})` }}
              />
            </div>

            {/* Zoom controls */}
            <div className="mt-5 flex items-center gap-5 rounded-full bg-white px-5 py-2 shadow-lg">
              <button
                type="button"
                onClick={() =>
                  setZoom((current) =>
                    Math.max(1, Number((current - 0.25).toFixed(2)))
                  )
                }
                disabled={zoom <= 1}
                aria-label="Zoom out"
                className="text-2xl font-medium text-black disabled:opacity-30"
              >
                −
              </button>

              <span className="min-w-16 text-center text-sm font-medium text-black">
                {Math.round(zoom * 100)}%
              </span>

              <button
                type="button"
                onClick={() =>
                  setZoom((current) =>
                    Math.min(3, Number((current + 0.25).toFixed(2)))
                  )
                }
                disabled={zoom >= 3}
                aria-label="Zoom in"
                className="text-2xl font-medium text-black disabled:opacity-30"
              >
                +
              </button>

              <button
                type="button"
                onClick={() => setZoom(1)}
                className="ml-2 border-l border-gray-300 pl-4 text-sm text-black hover:underline"
              >
                Reset
              </button>
            </div>

            <p className="mt-3 text-xs text-white/70">
              Click outside the image or press Esc to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;

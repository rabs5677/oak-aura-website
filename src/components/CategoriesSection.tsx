import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

const CategoriesSection = () => {
  return (
    <section id="categories" className="section-padding py-16 md:py-24">
      <h2 className="heading-section text-center">Shop by Categories</h2>
      <p className="mt-3 text-center text-muted-foreground">
        Find the perfect piece for every room
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
        {categories.map((cat, i) => (
          <Link
            key={cat.slug}
            to={`/category/${cat.slug}`}
            className="group overflow-hidden rounded-lg bg-secondary transition-shadow hover:shadow-card"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="px-3 py-3 text-center">
              <span className="text-sm font-medium text-foreground">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;

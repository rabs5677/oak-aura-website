import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    category: "SHOWROOM",
    title: "BMW Luxury Showroom",
    desc: "Premium car showroom with marble flooring, gold-accent columns, and state-of-the-art lighting designed for Naveet Motors.",
    image: "https://images.unsplash.com/photo-1549921296-3a6b5c4f55c3?q=80&w=1400",
  },
  {
    category: "OFFICE INTERIOR",
    title: "L&T Corporate Office",
    desc: "Contemporary corporate workspace with glass partitions, ergonomic furniture, warm wood ceilings, and biophilic design elements.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400",
  },
  {
    category: "RESIDENTIAL",
    title: "Luxury Residential Villa",
    desc: "Opulent living room with crystal chandelier, marble flooring, designer furniture, and elegant gold-tone accents throughout.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400",
  },
];

const OurWork = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 section-padding py-12 md:py-16">

        {/* Page heading */}
        <h1 className="heading-display text-center">Our Work</h1>
        <p className="mt-3 text-center text-muted-foreground">
          Explore some of our recent interior and furniture projects.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs tracking-[0.25em] text-muted-foreground">
                  {p.category}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default OurWork;
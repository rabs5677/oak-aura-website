import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import heroSide1 from "@/assets/hero-side-1.jpg";
import heroSide2 from "@/assets/hero-side-2.jpg";

const slides = [hero1, hero2, hero3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section id="hero" className="section-padding py-10 md:py-16">
      <div className="flex flex-col lg:flex-row gap-4 lg:h-[500px]">
        {/* Main slider - ~65% width */}
        <div className="relative flex-[2] overflow-hidden rounded-lg aspect-[4/3] lg:aspect-auto">
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Wooden furniture showcase ${i + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none"></div>

            {/* Brand Name Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none">
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif tracking-[0.25em] drop-shadow-lg">
                Oak & Aura
              </h1>
            </div>
          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 z-[5] -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-soft backdrop-blur-sm transition hover:bg-background"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 z-[5]-translate-y-1/2 rounded-full bg-background/80 p-2 shadow-soft backdrop-blur-sm transition hover:bg-background"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-foreground" : "w-2 bg-foreground/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Side images - ~35% width, two equal halves */}
        <div className="hidden lg:flex flex-[1] flex-col gap-4">
          <div className="flex-1 overflow-hidden rounded-lg">
            <img src={heroSide1} alt="Wooden interior" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 overflow-hidden rounded-lg">
            <img src={heroSide2} alt="Cozy wooden room" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="mt-10 max-w-2xl animate-fade-in">
        <h1 className="heading-display">
          Timeless Wooden Furniture for Elegant Homes
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Crafted with strength. Designed with soul.
        </p>
        <Button size="lg" className="mt-6 gap-2" asChild>
          <a href="#categories">
            Explore Collection
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

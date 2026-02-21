import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, TreePine, Paintbrush, Shield, HeartHandshake } from "lucide-react";
import workshopImg from "@/assets/about-workshop.jpg";

const highlights = [
  {
    icon: TreePine,
    title: "Premium Wood Quality",
    description: "We source the finest hardwoods, ensuring every piece carries natural beauty and lasting strength.",
  },
  {
    icon: Paintbrush,
    title: "Custom Designs",
    description: "Every home is unique. We craft furniture tailored to your space, style, and vision.",
  },
  {
    icon: Shield,
    title: "Durable Craftsmanship",
    description: "Built to last generations — our furniture is made with precision joinery and expert finishing.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Local Service",
    description: "Serving Mumbai homes with personal attention, timely delivery, and after-sale support.",
  },
];

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Section 1 — Hero Intro */}
        <section className="section-padding py-20 md:py-28 text-center bg-secondary/50">
          <h1 className="heading-display">Our Story</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg leading-relaxed">
            Oak &amp; Aura was built on the belief that furniture should be strong, timeless, and beautifully crafted to elevate everyday living.
          </p>
        </section>

        {/* Section 2 — Business History */}
        <section className="section-padding py-16 md:py-24">
          <div className="grid gap-10 items-center lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-lg">
              <img
                src={workshopImg}
                alt="Oak & Aura wooden furniture workshop"
                className="h-full w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="heading-section">Built from Passion,<br />Rooted in Craft</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a small workshop in the heart of Mumbai has grown into a trusted name in premium wooden furniture. Our founder's deep love for woodworking and an eye for detail laid the foundation for Oak &amp; Aura.
                </p>
                <p>
                  Every piece we create reflects our unwavering commitment to quality — from hand-selecting the finest wood to applying expert finishing touches that bring out its natural warmth and grain.
                </p>
                <p>
                  We take pride in serving Mumbai's homes with furniture that isn't just beautiful, but built to endure. At Oak &amp; Aura, durability is a promise, and elegance is a standard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — What Makes Us Different */}
        <section className="section-padding py-16 md:py-24 bg-secondary/50">
          <h2 className="heading-section text-center">What Makes Us Different</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-background p-8 text-center shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — Call to Action */}
        <section className="section-padding py-16 md:py-24 text-center">
          <h2 className="heading-section">Let's Create Your Perfect Space</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Reach out to us for a free consultation. We'd love to help you design furniture that fits your home perfectly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-[hsl(var(--whatsapp-foreground))]" asChild>
              <a href="https://wa.me/919076072584" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="tel:9076072584">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

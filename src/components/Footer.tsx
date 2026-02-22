import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";


const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-padding grid gap-10 py-14 md:grid-cols-3 md:gap-16">
        {/* About */}
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground">About Oak &amp; Aura</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Oak &amp; Aura brings strong, beautifully crafted wooden furniture designed to add warmth, durability, and elegance to modern homes.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground">Contact Details</h3>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:9594594774" className="hover:text-foreground transition-colors">9594594774</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:oaknaura01@gmail.com" className="hover:text-foreground transition-colors">oaknaura01@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>Kalina, Mumbai</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
          <Link to="/" state={{ scrollTo: "hero" }} className="hover:text-foreground transition-colors">
          Home
        </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
          </li>

          <li>
            <Link to="/our-work" className="hover:text-foreground transition-colors">
              Our Work
            </Link>
          </li>

          <li>
            <Link to="/" state={{ scrollTo: "contact" }} className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Oak &amp; Aura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

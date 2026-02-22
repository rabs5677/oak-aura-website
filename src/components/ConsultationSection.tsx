import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const ConsultationSection = () => {
  return (
    <section id="contact" className="section-padding py-16 md:py-24">
      <div className="mx-auto max-w-2xl rounded-xl border border-border bg-secondary/50 px-8 py-12 text-center shadow-soft">
        <h2 className="heading-section">Need Help Choosing the Right Furniture?</h2>
        <p className="mt-3 text-muted-foreground">
          Chat with us or call for quick consultation.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
          >
            <a
              href="https://wa.me/919594594774?text=Hi, I'm interested in your furniture and would like to know more."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a href="tel:9594594774">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;

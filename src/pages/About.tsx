import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import saoLogo from "@/assets/sao-logo.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32 max-w-3xl mx-auto px-4 md:px-8 pb-20">
        <ScrollReveal>
          <div className="text-center mb-16">
            <img src={saoLogo} alt="SAO" className="h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Story</h1>
            <p className="text-muted-foreground text-lg">Born in Biratnagar. Built for the bold.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              SAO was founded with a single vision — to put Biratnagar on the fashion map. We believe
              that style has no borders, and premium streetwear should be accessible to everyone in Nepal.
            </p>
            <p>
              Every piece in our collection is designed with intention. From the fabric we source to the
              cuts we craft, SAO represents a new wave of Nepali fashion that refuses to compromise on
              quality or attitude.
            </p>
            <p>
              Our name represents more than a brand — it's a movement. A statement that says you don't
              need to look outside Nepal to find world-class fashion. The streets of Biratnagar inspire
              everything we create.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { number: "500+", label: "Happy Customers" },
              { number: "50+", label: "Unique Designs" },
              { number: "2024", label: "Est. Year" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-sm p-6 text-center">
                <p className="text-3xl font-bold gold-text">{stat.number}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <Footer />
    </div>
  );
}

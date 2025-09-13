import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide exceptional education that nurtures critical thinking, creativity, and character development for future leaders."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be a globally recognized institution of academic excellence, fostering innovation and social responsibility."
    },
    {
      icon: Heart,
      title: "Values",
      description: "Integrity, Excellence, Diversity, Innovation, and Community engagement guide everything we do."
    }
  ];

  const achievements = [
    "Established in 1850 with a rich heritage of academic excellence",
    "Over 50,000 graduates serving in leadership roles worldwide",
    "Accredited by national and international education bodies",
    "State-of-the-art facilities and modern learning infrastructure",
    "Renowned faculty with expertise across diverse disciplines"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-academic-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            About Academic College
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over a century, we have been committed to academic excellence, 
            character development, and preparing students for meaningful careers and lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Legacy</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Academic College stands as a beacon of educational excellence, where tradition meets innovation. 
              Our commitment to nurturing minds and building character has remained unwavering since our founding.
            </p>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">{value.title}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
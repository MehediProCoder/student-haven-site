import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Calculator, 
  Microscope, 
  Users, 
  Palette, 
  Globe, 
  Code,
  HeartHandshake 
} from "lucide-react";

const Departments = () => {
  const departments = [
    {
      icon: BookOpen,
      title: "English Literature",
      description: "Explore the depths of literary masterpieces and develop critical thinking through comprehensive study of literature.",
      students: "450+ Students",
      programs: "BA, MA, PhD"
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Advanced mathematical concepts and problem-solving skills for analytical minds and future researchers.",
      students: "380+ Students", 
      programs: "BSc, MSc, PhD"
    },
    {
      icon: Microscope,
      title: "Science",
      description: "Cutting-edge research facilities and hands-on learning in Physics, Chemistry, and Biology.",
      students: "520+ Students",
      programs: "BSc, MSc, PhD"
    },
    {
      icon: Users,
      title: "Business Studies",
      description: "Comprehensive business education preparing leaders for the global marketplace.",
      students: "650+ Students",
      programs: "BBA, MBA"
    },
    {
      icon: Code,
      title: "Computer Science",
      description: "Innovation in technology with programming, AI, and software development focus.",
      students: "480+ Students",
      programs: "BSc, MSc"
    },
    {
      icon: Palette,
      title: "Fine Arts",
      description: "Creative expression through visual arts, sculpture, and digital media programs.",
      students: "220+ Students",
      programs: "BFA, MFA"
    },
    {
      icon: Globe,
      title: "Social Sciences",
      description: "Understanding society, culture, and human behavior through interdisciplinary studies.",
      students: "390+ Students",
      programs: "BA, MA, PhD"
    },
    {
      icon: HeartHandshake,
      title: "Psychology",
      description: "Human behavior and mental processes with practical application opportunities.",
      students: "310+ Students",
      programs: "BA, MA, PhD"
    }
  ];

  return (
    <section id="departments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Academic Departments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our diverse range of academic departments, each offering 
            world-class education and research opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((department, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-0 shadow-[var(--shadow-card)] hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <department.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">
                  {department.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {department.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Students:</span>
                    <span className="font-medium text-foreground">{department.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Programs:</span>
                    <span className="font-medium text-foreground">{department.programs}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-4 group-hover:bg-secondary group-hover:text-secondary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
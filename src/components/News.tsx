import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Download, 
  Eye, 
  Bell,
  GraduationCap,
  Award,
  FileText
} from "lucide-react";

const News = () => {
  const announcements = [
    {
      id: 1,
      type: "Admission",
      title: "Fall 2024 Admission Applications Now Open",
      date: "Dec 15, 2024",
      description: "Applications for undergraduate and graduate programs are now being accepted for Fall 2024 semester.",
      category: "admission",
      hasDownload: true,
      priority: "high"
    },
    {
      id: 2,
      type: "Academic",
      title: "Spring Semester Final Examination Schedule",
      date: "Dec 12, 2024", 
      description: "Detailed schedule for all final examinations has been published for Spring 2024 semester.",
      category: "academic",
      hasDownload: true,
      priority: "medium"
    },
    {
      id: 3,
      type: "Event",
      title: "Annual Cultural Festival - 'Heritage 2024'",
      date: "Dec 10, 2024",
      description: "Join us for our annual cultural celebration featuring performances, art exhibitions, and cultural activities.",
      category: "event",
      hasDownload: false,
      priority: "medium"
    },
    {
      id: 4,
      type: "Achievement",
      title: "Students Win National Science Competition",
      date: "Dec 8, 2024",
      description: "Our Science department students secured first place in the National Science Innovation Competition 2024.",
      category: "achievement",
      hasDownload: false,
      priority: "low"
    },
    {
      id: 5,
      type: "Notice",
      title: "Library Extended Hours During Exam Period",
      date: "Dec 5, 2024",
      description: "The central library will remain open 24/7 during the final examination period to support student studies.",
      category: "notice",
      hasDownload: false,
      priority: "medium"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "admission": return GraduationCap;
      case "academic": return FileText;
      case "achievement": return Award;
      default: return Bell;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="notices" className="py-20 bg-gradient-to-b from-academic-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Important Updates & News
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest updates, announcements, and news from Academic College.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-6">Latest Announcements</h3>
            <div className="space-y-6">
              {announcements.slice(0, 3).map((announcement) => {
                const IconComponent = getCategoryIcon(announcement.category);
                return (
                  <Card key={announcement.id} className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-0">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <Badge className={getPriorityColor(announcement.priority)}>
                              {announcement.type}
                            </Badge>
                            <CardTitle className="text-lg text-primary mt-2">
                              {announcement.title}
                            </CardTitle>
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {announcement.date}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {announcement.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        {announcement.hasDownload && (
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Quick Updates */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Quick Updates</h3>
            <Card className="shadow-[var(--shadow-card)] border-0">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {announcements.slice(3).map((announcement) => (
                    <div key={announcement.id} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {announcement.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {announcement.date}
                        </span>
                      </div>
                      <h4 className="font-medium text-sm text-primary mb-2 leading-tight">
                        {announcement.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {announcement.description}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">
                  View All Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
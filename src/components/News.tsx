import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Play } from "lucide-react";
import studentsGroup from "@/assets/students-group.jpg";

const News = () => {
  const notices = [
    {
      sl: 1,
      topic: "Fall 2024 Admission - Undergraduate Programs - Merit List Published",
      date: "Sep 11, 2025"
    },
    {
      sl: 2,
      topic: "Spring (2024-2025) Final Examination Schedule for All Departments",
      date: "Sep 9, 2025"
    },
    {
      sl: 3,
      topic: "Spring (2024-2025) Semester Registration Form Available",
      date: "Sep 9, 2025"
    },
    {
      sl: 4,
      topic: "Annual Cultural Festival Registration Now Open",
      date: "Sep 9, 2025"
    },
    {
      sl: 5,
      topic: "Class Test and Mid-term Examination Schedule Published for All Students",
      date: "Sep 7, 2025"
    },
    {
      sl: 6,
      topic: "Library Rules and Regulations Updated",
      date: "Sep 6, 2025"
    },
    {
      sl: 7,
      topic: "Fall 2024 - Undergraduate (H.) Admission Merit List, Class & Verification Schedule Published",
      date: "Sep 6, 2025"
    },
    {
      sl: 8,
      topic: "Fall 2024 - Undergraduate (H.) Admission Department-wise Merit List Published",
      date: "Sep 4, 2025"
    },
    {
      sl: 9,
      topic: "Spring (2024-25) Final Exam Admit Card, Center, Hall & Seat Plan Published",
      date: "Sep 3, 2025"
    },
    {
      sl: 10,
      topic: "All Notice: Semester Final Examination Schedule 2024-25 for All Departments",
      date: "Sep 1, 2025"
    }
  ];

  return (
    <section id="notices" className="py-20 bg-academic-light">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Important Updates & News
          </h2>
          <p className="text-muted-foreground">
            Stay informed with the Latest updates & news
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Notice Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-foreground border-r border-border">
                        SL<br />NO.
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-foreground border-r border-border">
                        Topic
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-foreground border-r border-border">
                        Date
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-foreground border-r border-border">
                        View
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-foreground">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {notices.map((notice, index) => (
                      <tr key={notice.sl} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                        <td className="px-4 py-4 text-center text-foreground border-r border-border border-b">
                          {notice.sl}
                        </td>
                        <td className="px-4 py-4 text-foreground border-r border-border border-b">
                          <span className="text-sm leading-relaxed">{notice.topic}</span>
                        </td>
                        <td className="px-4 py-4 text-foreground border-r border-border border-b">
                          <span className="text-sm">{notice.date}</span>
                        </td>
                        <td className="px-4 py-4 text-center border-r border-border border-b">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-1"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            <span className="text-xs">View</span>
                          </Button>
                        </td>
                        <td className="px-4 py-4 text-center border-b">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-green-600 hover:text-green-800 hover:bg-green-50 p-1"
                          >
                            <Download className="h-4 w-4 mr-1" />
                            <span className="text-xs">Download</span>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 border-t border-border">
                <Button variant="secondary" className="text-sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View All Notice
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-1">
            <div className="bg-turquoise rounded-lg overflow-hidden text-white relative">
              <div className="relative">
                <img 
                  src={studentsGroup} 
                  alt="Top Achievers of Jahangirpur Government College"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Top Achievers of Jahangirpur Government College</h3>
                <p className="text-sm leading-relaxed text-white/90">
                  Join us in honoring and celebrating the incredible accomplishments of the top-performing students of Jahangirpur Government College. These remarkable individuals have consistently demonstrated academic excellence and achievement. 
                  Rigorously prepared to navigate not only their educational endeavors results but also the broader challenges of professional development and personal growth. Their performances and commitment that made these achievements possible. Our top achievers have consistently demonstrated resilience in the face of challenges. 
                  Instead of effort in their studies and have to be true members and collaborators. Working thoughtfully with hands-on exploration and the right guidance. Let these top performers be celebrated. Their journeys reflect the very core values that Jahangirpur Government College stands for: commitment to lifelong learning, perseverance in the pursuit of goals, and the courage to dream, and achieve. Each of these bright minds now carries forward the legacy of our institution with pride and distinction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
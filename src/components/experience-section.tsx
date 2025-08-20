import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Building2, Rocket, Star, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company: "Tellis",
    period: "July 2025 - August 2025",
    description:
      "Working on real-world projects using MongoDB, Express.js, React.js, and Node.js. Collaborating with development teams, implementing Git workflows, and applying best practices for both frontend and backend development.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Git", "REST APIs"],
    icon: Rocket,
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Experience</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

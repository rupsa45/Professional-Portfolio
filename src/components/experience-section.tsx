import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and performance.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design teams to create engaging user experiences. Optimized application performance and implemented modern frontend frameworks.",
    technologies: ["React", "Vue.js", "JavaScript", "Tailwind CSS", "Git"],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description:
      "Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Experience</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
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
          ))}
        </div>
      </div>
    </section>
  )
}

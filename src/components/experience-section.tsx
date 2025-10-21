"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company: "Tellis Technologies Pvt Ltd, Siliguri, India",
    period: "July 2025 - August 2025",
    description: [
      "Developed a comprehensive employee monitoring system using React.js, PostgreSQL, and Express.js.",
      "Crafted core backend services in Express.js and Node.js, including authentication, task management, leave management, employee creation, and task assignment.",
      "Directed the UI development for both admin and employee dashboards.",
      "Enhanced collaboration skills by working in a team environment, improving Git workflows, and communicating politely with team members.",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "Git", "REST APIs"],
  },{
    title: "Full-Stack Developer Intern",
    company: "KreupAI Technologies LLC",
    period: "August 2025-Present",
    description: [
      "Collaborating on the development of a comprehensive facility management system designed to streamline finance management, escalation handling, and other operational workflows.",
      "Crafted and integrated backend modules for CRM, Visitor Management, Finance, and Emergency Management using RESTful APIs (GET, POST, DELETE, PATCH) to enable seamless CRUD operations",
      "Leveraging Next.js, TypeScript, Express.js, and PostgreSQL to deliver scalable, maintainable backend solutions."
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Express.js", "Git", "GitHub", "REST APIs"],
  }
]

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-colors duration-300 animate-pulse">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Experience</h2>
          </div>
          <p className="text-lg text-muted-foreground">My professional journey and key accomplishments</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl hover:scale-[1.02] transition-all duration-1000 border-l-4 border-l-primary/20 hover:border-l-primary ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${400 + index * 150}ms` : "0ms",
              }}
            >
              <CardHeader className="hover:bg-muted/20 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <p className="text-primary font-medium hover:text-primary/80 transition-colors duration-300">
                  {exp.company}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground mb-4 space-y-2">
                  {exp.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs hover:scale-110 hover:bg-primary/20 transition-all duration-300 cursor-default"
                    >
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
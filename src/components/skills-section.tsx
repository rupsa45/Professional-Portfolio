"use client"

import { Code, Database, Globe, Wrench } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skillsData = {
  Technologies: ["React.js", "Next.js", "Node.js", "Express.js", "Redux", "MongoDB", "Tailwind CSS"],
  "Programming Languages": ["JavaScript", "TypeScript", "C/C++", "Java"],
  "Tools and Platforms": ["Git", "GitHub", "Vercel", "AWS", "Docker", "Postman", "Strapi", "Firebase"],
  "Other Subjects": ["Networking", "Operating Systems", "Linux", "Virtualization"],
}

const categoryIcons = {
  Technologies: Globe,
  "Programming Languages": Code,
  "Tools and Platforms": Wrench,
  "Other Subjects": Database,
}

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className=" px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg transition-all-smooth hover:scale-110">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Skills</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
            return (
              <div
                key={category}
                className={`space-y-4 hover-lift transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + categoryIndex * 150}ms` : "0ms",
                }}
              >
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <IconComponent className="h-5 w-5 text-primary transition-all-smooth hover:scale-110" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`skill-pill px-3 py-1.5 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted hover:border-primary/50 hover:text-primary transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                      }`}
                      style={{
                        transitionDelay: isVisible ? `${600 + categoryIndex * 150 + index * 50}ms` : "0ms",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

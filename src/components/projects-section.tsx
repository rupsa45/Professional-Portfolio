"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ShoppingCart, CheckSquare, BarChart3, Globe, Database, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, secure payment processing, and responsive design. Includes user authentication, product catalog, shopping cart, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    icon: ShoppingCart,
    features: ["User Authentication", "Payment Processing", "Admin Dashboard", "Responsive Design"]
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with MERN stack for optimal performance and scalability.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    icon: CheckSquare,
    features: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "Task Tracking"]
  },
  {
    title: "Weather Analytics Dashboard",
    description:
      "An interactive dashboard displaying weather data with beautiful visualizations and predictive analytics capabilities. Features real-time data fetching and customizable charts.",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    icon: BarChart3,
    features: ["Data Visualization", "Real-time Data", "Analytics", "Custom Charts"]
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark mode, and optimized performance for showcasing professional work.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    icon: Globe,
    features: ["Responsive Design", "Dark Mode", "Smooth Animations", "SEO Optimized"]
  },
]

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 200}ms` : "0ms",
                }}
              >
                <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="lg:w-1/2 p-8 flex flex-col">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 space-y-6">
                      <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="text-sm text-muted-foreground bg-muted/30 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm rounded-full hover:bg-accent/30 hover:scale-105 transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-2">
                        <Button variant="outline" className="bg-transparent hover:scale-105 transition-all duration-300">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button variant="outline" className="bg-transparent hover:scale-105 transition-all duration-300">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                  <div className="lg:w-1/2 bg-muted/30 flex items-center p-8 hover:bg-muted/40 transition-colors duration-300">
                    <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
                      <div className="text-center">
                        <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                        <span className="text-muted-foreground font-medium">{project.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

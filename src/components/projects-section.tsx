"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ShoppingCart, CheckSquare, BarChart3, Globe, Database, Sprout } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "Online Bookstore",
    description:
      "A platform for users to upload and download free documents. Features include document categorization, search functionality, user authentication, and an admin panel for managing content.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
    liveUrl: "https://bookhaven24.vercel.app/",
    githubUrl: "https://github.com/rupsa45/BookHaven-Backend",
    icon: ShoppingCart,
    features: ["Product Catalog", "Shopping Cart", "Payment Integration", "Admin Dashboard"]
  },
  {
    title: "Plant Diaries",
    description:
      "A MERN stack blog platform where users can share plant care experiences. Public users can view posts, while registered users can create, update, and manage their own posts through a personalized dashboard.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
    liveUrl: "https://plant-diaries-frontend.vercel.app/",
    githubUrl: "https://github.com/rupsa45/PlantDiaries-Backend",
    icon:Sprout,
    features: ["Authentication", "User Dashboard", "CRUD Posts", "Responsive UI"]
  },
  {
    title: "GreenThumb-Crop Recommendation System",
    description:
      "A system that predicts optimal crops based on soil parameters, weather conditions, and forecasts. Built with a React.js frontend integrated with a FastAPI backend powered by scikit-learn models to deliver real-time recommendations.",
    technologies: ["React.js", "FastAPI", "Python", "scikit-learn", "Tailwind CSS"],
    liveUrl: "https://green-thumb2025.vercel.app/",
    githubUrl: "https://github.com/rupsa45/GreenThumb2025",
    icon: BarChart3,
    features: ["Crop Prediction", "Weather Integration", "Responsive UI", "Frontend-Backend Integration","Team Collaboration"]
 },
  {
    title: "Employee Management System",
    description:
      "A real-time collaboration tool developed during my internship. Features task assignment, progress tracking, and Git workflow integration to streamline teamwork and project delivery.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    liveUrl: "https://monitering-system-client.vercel.app/login",
    githubUrl: "#",
    icon: CheckSquare,
    features: ["Team Collaboration", "Task Management", "Real-time Updates", "Git Workflow Integration"]
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
                        <Button variant="outline" className="bg-transparent cursor-pointer hover:scale-105 transition-all duration-300">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button variant="outline" className="bg-transparent cursor-pointer hover:scale-105 transition-all duration-300">
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

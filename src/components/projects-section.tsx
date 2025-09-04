"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ShoppingCart, CheckSquare, BarChart3, Globe, Database, Sprout } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "BookHaven – Digital Bookstore Platform",
    description:
      "A platform for users to upload and download free documents. Features include document categorization, search functionality, user authentication, and an admin panel for managing content.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
    liveUrl: "https://bookhaven24.vercel.app/",
    githubUrl: "https://github.com/rupsa45/BookHaven-Backend",
    icon: ShoppingCart,
    features: ["Product Catalog", "Shopping Cart", "Payment Integration", "Admin Dashboard"]
  },
  {
    title: "PlantDiaries - Plant-Themed Social Platform",
    description:
      "A MERN stack blog platform where users can share plant care experiences. Public users can view posts, while registered users can create, update, and manage their own posts through a personalized dashboard.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
    liveUrl: "https://plant-diaries-frontend.vercel.app/",
    githubUrl: "https://github.com/rupsa45/PlantDiaries-Backend",
    icon: Sprout,
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
    features: ["Crop Prediction", "Weather Integration", "Responsive UI", "Frontend-Backend Integration", "Team Collaboration"]
  },
  {
    title: "Employee Management System",
    description:
      "A real-time collaboration tool developed during my internship. Features task assignment, progress tracking, and Git workflow integration to streamline teamwork and project delivery.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "Socket.io","Electronjs"],
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
      className={`py-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{
                transitionDelay: isVisible ? `${400 + index * 200}ms` : "0ms",
              }}
            >
              <div className="p-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
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
                    <Button
                      asChild
                      variant="outline"
                      className="bg-transparent cursor-pointer hover:scale-105 transition-all duration-300"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="bg-transparent cursor-pointer hover:scale-105 transition-all duration-300"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>

                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
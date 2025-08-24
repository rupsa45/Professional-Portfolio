"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Download } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              Rupsa <span className="text-primary">Das</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light">
              Full Stack Developer
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional digital experiences. I specialize in modern web technologies
            and user-centered design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              onClick={scrollToProjects}>
              <Code className="h-5 w-5 mr-2" />
              View My Work
            </Button>
            <a href="/RupsaDas.pdf" download="Rupsa_Das_Resume.pdf">
              <Button variant="outline" size="lg" className="cursor-pointer">
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a href="https://github.com/rupsa45" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-12 w-12 cursor-pointer">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/rupsa-das-96b26b231/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-12 w-12 cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 cursor-pointer"
              onClick={() => window.location.href = "mailto:dasrupsa831@gmail.com"}
            >
              <Mail className="h-6 w-6" />
            </Button>

          </div>

          <div className="pt-12">
            <ArrowDown
              className="h-6 w-6 mx-auto text-muted-foreground animate-bounce cursor-pointer hover:text-primary transition-colors duration-300"
              onClick={scrollToAbout}
            />
          </div>
        </div>
      </div>
    </section >
  )
}

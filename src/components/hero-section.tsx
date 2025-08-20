import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Download } from "lucide-react"

export function HeroSection() {
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
               className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
              <Code className="h-5 w-5 mr-2" />
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="cursor-pointer">
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <Button variant="ghost" size="icon" className="h-12 w-12 cursor-pointer">

              <a href="https://github.com/rupsa45" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>

            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 cursor-pointer">
              <a href="https://www.linkedin.com/in/rupsa-das-96b26b231/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 cursor-pointer">
              <Mail className="h-6 w-6" />
            </Button>
          </div>

          <div className="pt-12">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground animate-bounce" />
          </div>
        </div>
      </div>
    </section >
  )
}

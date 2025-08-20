"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-primary">Portfolio</h1>
            <div className="hidden md:flex space-x-6">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary"
              >
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary"
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary"
              >
                Contact
              </Button>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-primary">
              <Link href="/">Rupsa.</Link>
            </h1>
            <div className="hidden md:flex space-x-6">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary cursor-pointer"
              >
                About
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("experience")}
                className="text-foreground hover:text-primary cursor-pointer"
              >
                Experience
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary cursor-pointer"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-primary cursor-pointer"
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary cursor-pointer"
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

import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className=" px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center space-x-4">
          <p className="text-muted-foreground">© 2024 Rupsa Das. All rights reserved.</p>

        </div>

        <div className="flex items-center justify-center ">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/rupsa45" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/rupsa-das-96b26b231/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

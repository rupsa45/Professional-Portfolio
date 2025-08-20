"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Download, Copy, Github, Linkedin } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const { ref, isVisible } = useScrollAnimation()
  const email = "john.doe@example.com"

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const downloadResume = () => {
    // Create a dummy PDF download - in real implementation, this would be your actual resume file
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Replace with actual resume file path
    link.download = "John_Doe_Resume.pdf"
    link.click()
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div
          className={`max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div
                className={`flex items-center justify-between hover-lift p-4 rounded-lg transition-all duration-1000 hover:bg-muted/50 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg transition-all duration-1000 hover:scale-110">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{email}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyEmail}
                  className="ml-4 bg-transparent transition-all duration-1000 hover:scale-105"
                >
                  {copied ? "Copied!" : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <div
                className={`flex items-center space-x-4 hover-lift p-4 rounded-lg transition-all duration-1000 hover:bg-muted/50 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
              >
                <div className="bg-primary/10 p-3 rounded-lg transition-all duration-1000 hover:scale-110">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div
                className={`flex items-center space-x-4 hover-lift p-4 rounded-lg transition-all duration-1000 hover:bg-muted/50 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
              >
                <div className="bg-primary/10 p-3 rounded-lg transition-all duration-1000 hover:scale-110">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div
              className={`space-y-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: isVisible ? "900ms" : "0ms" }}
            >
              <Button
                onClick={downloadResume}
                className="w-full bg-transparent transition-all duration-1000 hover:scale-105"
                variant="outline"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent transition-all duration-1000 hover:scale-105"
                  onClick={() => window.open("https://github.com/johndoe", "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent transition-all duration-1000 hover:scale-105"
                  onClick={() => window.open("https://linkedin.com/in/johndoe", "_blank")}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

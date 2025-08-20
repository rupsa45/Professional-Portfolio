"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Download, Copy, Github, Linkedin, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const { ref, isVisible } = useScrollAnimation()
  const email = "rupsadas123@gmail.com"

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
    link.download = "Rupsa_Das_Resume.pdf"
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
      <div className="px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Get In Touch</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a question or just want to say hi!
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <Button
              onClick={downloadResume}
              className="w-full bg-white text-black hover:bg-gray-100 transition-all duration-300"
              size="lg"
            >
              <ArrowRight className="h-4 w-4 mr-2" />
              Download Resume
            </Button>

            <div className="bg-muted/30 rounded-lg p-4 flex items-center justify-between">
              <span className="text-foreground">{email}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={copyEmail}
                className="bg-muted/50 hover:bg-muted/70"
              >
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>

          {/* Right Column - Professional Links */}
          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">GitHub</h3>
                    <p className="text-sm text-muted-foreground">Check out my code repositories</p>
                  </div>
                  <Button
                    variant="link"
                    className="text-primary p-0 h-auto"
                    onClick={() => window.open("https://github.com/rupsadas", "_blank")}
                  >
                    Visit GitHub <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">Connect with me professionally</p>
                  </div>
                  <Button
                    variant="link"
                    className="text-primary p-0 h-auto"
                    onClick={() => window.open("https://linkedin.com/in/rupsadas", "_blank")}
                  >
                    Visit LinkedIn <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

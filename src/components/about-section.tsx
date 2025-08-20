"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting digital solutions with passion and precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
            I am a Full Stack Developer with hands-on experience in building and deploying real-world projects. I specialize in developing scalable, efficient, and user-friendly applications with a strong focus on clean architecture and seamless user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Recently, I worked on Tellis during my internship as a MERN Stack Developer, where I gained experience in team collaboration, strengthened my Git workflow, and enhanced my MERN stack proficiency by applying best practices across both frontend and backend development.
            </p>
          </div>

          <div
            className={`space-y-4 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4 hover:bg-muted/20 transition-colors duration-300 p-2 rounded-r">
                  <h4 className="font-semibold text-lg">Asansol Engineering College,Asansol,India</h4>
                    <h4 className="font-semibold text-lg">Bachelor of Technology in Information Technology</h4>
                    <p className="text-muted-foreground">Computer Science Engineering</p>
                    <p className="text-sm text-muted-foreground">2021 - 2025</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4 hover:bg-muted/20 transition-colors duration-300 p-2 rounded-r">
                  <h4 className="font-semibold text-lg">DAV Public School,Rupnarayanpur,India</h4>
                    <h4 className="font-semibold text-lg">Higher Secondary (12th)</h4>
                    <p className="text-muted-foreground">Science Stream</p>
                    <p className="text-sm text-muted-foreground">2006 - 2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

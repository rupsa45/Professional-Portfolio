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
              With over 5 years of experience in web development, I've had the privilege of working with startups and
              established companies to bring their digital visions to life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of clean code, intuitive design, and seamless user experiences. My approach
              combines technical expertise with creative problem-solving to deliver solutions that not only work
              beautifully but also drive results.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
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
                    <h4 className="font-semibold text-lg">Bachelor's Degree</h4>
                    <p className="text-muted-foreground">Computer Science Engineering</p>
                    <p className="text-sm text-muted-foreground">2018 - 2022</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4 hover:bg-muted/20 transition-colors duration-300 p-2 rounded-r">
                    <h4 className="font-semibold text-lg">Higher Secondary (12th)</h4>
                    <p className="text-muted-foreground">Science Stream</p>
                    <p className="text-sm text-muted-foreground">2016 - 2018</p>
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

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    degree: "M.Eng. Management",
    school: "Stevens Institute of Technology",
    location: "Hoboken, NJ",
    period: "2023 - May 2025",
    gpa: "3.96",
    type: "education",
  },
  {
    degree: "B.E. Computer Engineering",
    school: "University of Mumbai",
    location: "Mumbai, India",
    period: "2012 - May 2016",
    gpa: "3.6",
    type: "education",
  },
]

const certifications = [
  {
    name: "Project Management Professional (PMP)",
    issuer: "Project Management Institute",
    status: "In Progress",
    year: "2024",
    type: "certification",
  },
  {
    name: "Google Project Management Certificate",
    issuer: "Google",
    status: "Completed",
    year: "2023",
    type: "certification",
  },
  {
    name: "Lean Six Sigma Green Belt",
    issuer: "ASQ",
    status: "Completed",
    year: "2024",
    type: "certification",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.school}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{edu.location}</span>
                        <span className="text-sm font-medium text-foreground">GPA: {edu.gpa}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-blue-600" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{cert.year}</span>
                        <span
                          className={`text-sm px-2 py-1 rounded-full ${
                            cert.status === "Completed"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

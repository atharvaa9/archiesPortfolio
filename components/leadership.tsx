"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, BookOpen } from "lucide-react"

const leadership = [
  {
    title: "President",
    organization: "Graduate Student Council",
    period: "2024-25",
    description:
    "As President of the Graduate Student Council at Stevens Institute of Technology (2024–25), led advocacy, programming, and strategic collaboration to support 3,500+ graduate students, oversee 22 clubs, and foster an inclusive, student-centered campus environment.",
    icon: Users,
  },
  {
    title: "Board Member",
    organization: "MSAC (Master's Student Advisory Council)",
    period: "2024-25",
    description: 
    "Advocated for Systems and Enterprises students on the SES Master’s Student Advisory Council by collaborating with faculty, leadership, and peers to drive strategic initiatives enhancing academic quality, inclusion, and professional development.",
    icon: Award,
  },
  {
    title: "Working Group Member",
    organization: "Middle States (MSCHE) institutional reaccreditation",
    period: "Present",
    description: "Collaborating with student leaders, the Provost, and senior university leadership of the Stevens Institute of Technology on the Leadership & Governance Working Group as part of a multi-year, university-wide effort to demonstrate Stevens’ commitment to Middle States accreditation standards through shared governance, transparency, and continuous improvement.",
    icon: BookOpen,
  },
]


export default function Leadership() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Leadership</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <item.icon className="w-12 h-12 text-blue-600 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{item.organization}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

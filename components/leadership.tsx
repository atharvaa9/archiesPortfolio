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
    "Led the Graduate Student Council, representing the needs and interests of over 3,500 graduate students across the university.",
    "Guided and monitored 22 graduate student clubs and organizations, ensuring alignment with university goals and supporting club growth and engagement initiatives.",
    "Collaborated with council members, university administrators, and department heads to create a supportive, inclusive campus environment that prioritizes student well-being.",
    "Initiated programs and events to enhance campus life, promote academic and social inclusion, and foster a "home away from home" atmosphere for the graduate student body.",
    "Worked closely with the director of graduate student life, dean, faculty, and board representatives to advocate for graduate student resources and influence policy and program development.",
    icon: Users,
  },
  {
    title: "Board Member",
    organization: "MSAC (Master's Student Advisory Council)",
    period: "2024",
    description: 
    "Represent the Department of Systems and Enterprises in the SES Master’s Student Advisory Council, advocating for SE student interests.",
    "Collaborate with council members, faculty, the dean, and other board members and representatives to address academic and student-life concerns, contributing to strategic decisions that enhance the graduate student experience.",
    "Engage in initiatives to improve program quality, promote student inclusion, and support professional development for SE students.",
    icon: Award,
  },
  {
    title: "Board Member",
    organization: "Stevens Institute of Technology",
    period: "2023-24",
    description: "Supporting faculty in course delivery and mentoring students in project management methodologies.",
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

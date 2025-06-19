"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  I am a seasoned Project Manager with over 8 years of comprehensive experience in operations, strategic
                  planning, and team leadership. My expertise spans across managing complex portfolios worth millions of
                  dollars while consistently delivering projects on time and under budget.
                </p>
                <p className="mb-6">
                  Currently pursuing my M.Eng. in Management at Stevens Institute of Technology with a 3.96 GPA, I
                  combine academic excellence with practical industry experience. My track record includes managing
                  $30M+ portfolios, achieving $0.2M in cost savings, and leading cross-functional teams of up to 40
                  members.
                </p>
                <p>
                  I specialize in Agile methodologies, risk management, and stakeholder engagement, with proven success
                  in reducing project delays by 7% and increasing execution speed by 5%. My approach focuses on
                  data-driven decision making, process optimization, and fostering collaborative environments that drive
                  innovation and results.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

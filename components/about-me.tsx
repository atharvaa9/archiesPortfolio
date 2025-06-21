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
                  
                  I am a results-driven Project Management professional with over 8 years of experience in project management, operations management, product management, and strategy within fast-paced, high-impact environments. 

                </p>
                <p className="mb-6">
                  
                  I recently completed my Master’s in Engineering Management from Stevens Institute of Technology with a 3.97 GPA, where I served as the President of the Graduate Student Council and a Board Member of the Master’s Student Advisory Council, roles that strengthened my leadership, collaboration, and stakeholder engagement capabilities.

                </p>
                <p className="mb-6">
                  
                  I specialize in leading cross-functional teams, managing end-to-end project lifecycles, and delivering high-value outcomes aligned with strategic business goals. My track record includes managing $ 10 M+ portfolios, achieving $200K in cost savings, and leading teams of up to 40 professionals across diverse projects. I apply Agile, Waterfall, Scrum, and SDLC methodologies to enhance operational efficiency, reduce risk, and accelerate time-to-value.

                </p>
                <p className="mb-6">
                  
                  Certified in Google Project Management and Lean Six Sigma Green Belt, and currently pursuing the Project Management Professional (PMP) certification, I bring a structured, data-driven, and analytical mindset to every initiative. I am proficient in various tools, including Microsoft Project, Jira, Confluence, Excel, Power BI, Tableau, MySQL, and PostgreSQL, which enable me to bridge the gap between business strategy and technical execution.

                </p>
                <p>
                  I have always valued working in teams where efforts are recognized, collaboration is encouraged, and leadership is about guidance, not authority. I’m inspired by helping and supportive work cultures where individuals strive to lead with empathy rather than control. I look forward to joining a team of brilliant minds with a positive mindset, and I am actively seeking opportunities in Project Management, Product Management, or Operations Management where I can contribute meaningfully and grow together.

                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

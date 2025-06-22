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
                  
                  I am a results-driven Project Management professional with over <span className="font-semibold text-gray-800">8 years</span> of experience in <span className="font-semibold text-gray-800">project management</span>, <span className="font-semibold text-gray-800">operations management</span>, <span className="font-semibold text-gray-800">product management</span>, and strategy within fast-paced, high-impact environments. 

                </p>
                <p className="mb-6">
                  
                  I recently completed my <span className="font-semibold text-gray-800">Master’s in Engineering Management</span> from Stevens Institute of Technology with a <span className="font-semibold text-gray-800">3.97 GPA</span>, where I served as the <span className="font-semibold text-gray-800">President of the Graduate Student Council</span> and a <span className="font-semibold text-gray-800">Board Member of the Master’s Student Advisory Council</span>, roles that strengthened my leadership, collaboration, and stakeholder engagement capabilities.

                </p>
                <p className="mb-6">
                  
                  My track record includes managing <span className="font-semibold text-gray-800">$15M+ portfolios</span>, achieving more than <span className="font-semibold text-gray-800">$0.5M in cost savings</span>, and leading teams of up to <span className="font-semibold text-gray-800">40</span> professionals across diverse projects. I apply Agile, Waterfall, Scrum, and SDLC methodologies to enhance operational efficiency, reduce risk, and accelerate time-to-value.

                </p>
                <p className="mb-6">
                  
                  Certified in <span className="font-semibold text-gray-800">Google Project Management</span> and <span className="font-semibold text-gray-800">Lean Six Sigma Green Belt</span>, and currently pursuing the <span className="font-semibold text-gray-800">Project Management Professional (PMP)</span> certification, I bring a structured, data-driven, and analytical mindset to every initiative. I am proficient in various tools, including Microsoft Project, Jira, Confluence, Excel, Power BI, Tableau, MySQL, and PostgreSQL, which enable me to bridge the gap between business strategy and technical execution.

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

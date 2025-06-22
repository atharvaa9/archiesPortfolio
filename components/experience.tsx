"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Assistant Project Manager",
    company: "Stevens Institute of Technology",
    location: "NJ, USA",
    period: "Jan 2024 – May 2025",
    highlights: [
      "Led project operations in Hybrid and Agile environments, from project initiation, planning, and execution, resulting in improved operational efficiency and on-time project delivery for a $30M portfolio.",
      "Managed project lifecycle for capital projects using JIRA valued at over $2M, ensuring scope, budget, and schedule adherence.",
      "Reconciled a $1M budget, monitoring expenditures & forecasting revenue to optimize resource allocation of the capital projects.",
      "Developed a 3-year capital maintenance plan with senior leadership, integrating risk management and sustainability.",
      "Recognized for negotiating and executing 20+ contracts with general contractors, leading to $0.2M in annual cost savings.",
      "Spearheaded the daily work order management system, expertly handling 30+ service requests by streamlining workflows and preventative maintenance, reducing complaints by 15%.",
      "Act as an on-call supervisor for campus emergencies, effectively coordinating with facilities, administration, and police departments.",
      "Perform weekly building inspections to identify and recommend necessary preventative maintenance measures.",
      "Oversee access control audits and enforce campus safety protocols, achieving 95% accuracy in inventory management records using Sortly.",
      "Coordinated cross-functional teams across multiple departments",
    ],
    featured: true,
  },
  {
    title: "Teaching Assistant",
    company: "Stevens Institute of Technology",
    location: "NJ, USA",
    period: "Sept 2023 – Dec 2023",
    highlights: [
      "Collaborated with the Business School Director to design course materials and develop syllabi, enhancing educational content and structure.",
      "Instructed and mentored 300 undergraduate students in Excel, Advanced Excel, and Tableau, applying adaptive teaching methods to optimize learning outcomes.",
      "Engaged in weekly meetings to provide personalized mentorship and feedback, achieving a 35% increase in student engagement.",
    ],
    featured: true,
  },
  {
    title: "Project Planning & Strategy Consultant",
    company: "Oreo One Digital",
    location: "Mumbai, India",
    period: "Jan 2023 – Jul 2023",
    highlights: [
      "Leveraged data analysis to design customized strategic roadmaps for government projects, accelerating project execution by 5%.",
      "Led cross-functional teams of 40 professionals to execute multiphase complex projects, improving project timelines, project operations, resource allocation, and stakeholder engagement using effective Agile & PM methodologies.",
      "Directed client engagement and progress reporting, implementing structured communication plans and feedback mechanisms, which boosted client satisfaction and increased recurring project revenue by $0.35M within 6 months.",
      "Designed and implemented a data analysis system to optimize project planning & scheduling using SQL and Tableau to enhance decision-making processes.",
      "Engineered cost-effective strategies, leveraging data analytics and risk assessment models, leading to a 5% increase in project completion rates and enhanced stakeholder alignment.",
    ],
    featured: true,
  },
  {
    title: "Lead Project Coordinator",
    company: "WeBorn Technologies",
    location: "Mumbai, India",
    period: "Jun 2021 – Dec 2022",
    highlights: [
      "Managed full project lifecycle using JIRA and Microsoft Project, optimizing resource allocation and reducing delays by 7%.",
      "Led cross-functional teams in Agile environments, improving team efficiency through sprint planning & backlog prioritization.",
      "Developed risk mitigation plans, preventing scope creep, and ensuring 100% adherence to project deadlines.",
      "Designed and deployed a data analytics system, leveraging SQL and Tableau, leading to a 25% increase in stakeholder engagement and faster issue resolution.",
      "Implemented automated reporting dashboards in Power BI, reducing status update time by 10 hours monthly.",
    ],
    featured: true,
  },
  {
    title: "Logistics Operations Executive",
    company: "Logictrics Services Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Aug 2019 – May 2021",
    highlights: [
      "Developed and Implemented route optimization techniques and delivery planning tools to streamline logistics operations during the pandemic, supporting the state government in supplying emergency goods to COVID-19 treatment centers, resulting in a 10% increase in on-time deliveries, saving operational resources.",
      "Developed SOPs and process control documentation as part of the Quality Management System (QMS), improving operational efficiency and audit readiness.",
      "Conducted quality audits and implemented corrective action plans that led to decrease in non-compliance issues within supply chain processes.",
      "UUtilized Microsoft Excel, SAP IBP, and forecasting models to analyze historical and real-time demand data, enhancing forecast accuracy and supporting inventory and shipment planning initiatives.",
      "Applied inventory optimization techniques using ERP systems (SAP S/4HANA) and safety stock calculators to improve material availability, reduce overstock, and minimize carrying costs and stockout risks.",
      "Enhanced KPI tracking and reporting using Power BI and Tableau dashboards, enabling real-time visibility into logistics metrics and contributing to a 7% increase in organizational profitability.",
      "Monitored logistics performance and conducted root cause analysis using Excel, SQL queries, and Tableau, supporting data-driven decision-making for continuous improvement and operational excellence.",
    ],
    featured: false,
  },
  {
    title: "Assistant Manager - Operations",
    company: "Blue Dart Express Ltd",
    location: "Mumbai, India",
    period: "Jul 2016 – Jul 2019",
    highlights: [
      "Supervised daily operations for express delivery services",
      "Maintained 99%+ service quality standards",
      "Led team of 15+ operations staff",
    ],
    featured: false,
  },
]

export default function Experience() {
  const [showAll, setShowAll] = useState(false)
  const featuredExperiences = experiences.filter((exp) => exp.featured)
  const otherExperiences = experiences.filter((exp) => !exp.featured)

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Featured Experiences */}
            {featuredExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8 pl-12" : "md:pl-8 pl-12"}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">{experience.title}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{experience.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {experience.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}

            {/* Other Experiences (Collapsible) */}
            {showAll &&
              otherExperiences.map((experience, index) => (
                <motion.div
                  key={index + featuredExperiences.length}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    (index + featuredExperiences.length) % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-muted-foreground rounded-full border-4 border-background z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${(index + featuredExperiences.length) % 2 === 0 ? "md:pr-8 pl-12" : "md:pl-8 pl-12"}`}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{experience.title}</h3>
                            <p className="text-muted-foreground font-medium mb-2">{experience.company}</p>
                          </div>
                        </div>

                        <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {experience.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {experience.location}
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {experience.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Show More/Less Button */}
          <div className="text-center mt-8">
            <Button variant="outline" onClick={() => setShowAll(!showAll)} className="flex items-center space-x-2">
              <span>{showAll ? "Show Less" : "Show More"}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

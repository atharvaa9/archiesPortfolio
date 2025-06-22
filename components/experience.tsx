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
    location: "Hoboken, NJ, USA",
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
    location: "Hoboken, NJ",
    period: "Sept 2023 – Dec 2023",
    highlights: [
      "Collaborated with the Business School Director to design course materials and develop syllabi, enhancing educational content and structure.",
      "Instructed and mentored 300 undergraduate students in Excel, Advanced Excel, and Tableau, applying adaptive teaching methods to optimize learning outcomes.",
      "Engaged in weekly meetings to provide personalized mentorship and feedback, achieving a 35% increase in student engagement.",
    ],
    featured: true,
  },
  {
    title: "Consultant (Project Planning & Strategy)",
    company: "Oreo One Digital",
    location: "Mumbai, India",
    period: "Jan 2023 – Jul 2023",
    highlights: [
      "Led strategic planning for 40-person development teams",
      "Improved project execution speed by 5% through process optimization",
      "Generated additional $0.35M in revenue through strategic initiatives",
      "Developed comprehensive project roadmaps and risk mitigation strategies",
    ],
    featured: true,
  },
  {
    title: "Lead Project Coordinator",
    company: "WeBorn Technologies",
    location: "Mumbai, India",
    period: "Jun 2021 – Dec 2022",
    highlights: [
      "Reduced project delays by 7% through improved coordination",
      "Created Tableau dashboards for real-time project monitoring",
      "Managed end-to-end project lifecycle for multiple client engagements",
      "Implemented quality assurance processes and stakeholder communication protocols",
    ],
    featured: true,
  },
  {
    title: "Operations Executive",
    company: "Delhivery Ltd",
    location: "Mumbai, India",
    period: "Aug 2019 – May 2021",
    highlights: [
      "Optimized logistics operations for high-volume package processing",
      "Implemented data-driven solutions for route optimization",
      "Managed vendor relationships and service level agreements",
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

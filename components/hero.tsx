"use client"

import { Button } from "@/components/ui/button"
import { Download, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import WaveBackground from "@/components/wave-background"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WaveBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src="/archies.JPG"
              alt="Archies Patil - Project Manager"
              width={150}
              height={150}
              className="mx-auto rounded-full mb-6 border-4 border-white shadow-lg"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          >
            Archies Patil
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mb-6 font-medium"
          >
            Driving projects from idea to impact.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
           className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto"
          >
          Seasoned project manager with 8+ years driving results in project, product, and operations management across diverse industries. From startups to large enterprises, I’ve managed portfolios over $10M with a focus on innovation, accountability, and measurable results. Specialized in leading cross-functional teams and executing complex projects with precision and impact.
          </motion.p>

          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-8 max-w-2xl mx-auto"
          >
          Project Management | Product Management | Operations Management | People Management | Customer Relationship Management
          </motion.p>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" />
              Download Résumé
            </Button> */}
            <Button size="lg" variant="outline" onClick={scrollToContact}>
              <MessageCircle className="mr-2 h-4 w-4" />
              {"Let's Talk"}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

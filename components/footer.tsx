"use client"

import { Mail, Phone, Linkedin } from "lucide-react"

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Archies Patil</h3>
            <p className="text-muted-foreground mb-4">
              Project Manager driving innovation and excellence in every project.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:archies.patil@example.com"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+15551234567" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/archies13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Me", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Education", href: "#education" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Hoboken, NJ</p>
              <p>archies.patil13@gmail.com</p>
              <p>+1 (551) 347-9750</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Archies Patil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

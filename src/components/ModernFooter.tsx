'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ModernFooter() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Gradient lighting effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main footer content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src="/images/Logo-icon.png" 
                    alt="Sri Rama Aditya Logo" 
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sri Rama Aditya</h3>
                  <p className="text-sm text-gray-400">College & Nursing Home</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We are on a mission to make the process of building world-class nursing education easier.
              </p>
              <div className="flex space-x-4">
                {/* Instagram */}
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a href="https://x.com" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="#facilities" className="text-gray-400 hover:text-white transition-colors text-sm">Facilities</a></li>
                <li><a href="#opportunities" className="text-gray-400 hover:text-white transition-colors text-sm">Career Opportunities</a></li>
                <li><a href="#admissions" className="text-gray-400 hover:text-white transition-colors text-sm">Admissions</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Programs</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">B.Sc Nursing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">GNM Nursing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Continuing Education</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Certification Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Clinical Training</a></li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <p className="text-sm text-gray-400">Main Road, Near Ramachandrapuram</p>
                    <p className="text-sm text-gray-400">BC Hostel building, Gubbalavaripeta</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  <p className="text-sm text-gray-400">+91 9951445443, 9640902778</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <p className="text-sm text-gray-400">sreeramaaditya6@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">
                  © 2025 Sri Rama Aditya College & Nursing Home. All rights reserved.
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-500">
                  Built with love, by <a href="https://studio.sted.space" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">studio.sted.space</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

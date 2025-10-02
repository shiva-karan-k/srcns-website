'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Clock, Mail, Phone, MapPin } from 'lucide-react'

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Logo and Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
              <Image 
                src="/images/Logo-icon.png" 
                alt="Sri Rama Aditya Logo" 
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sri Rama Aditya College & Nursing Home
          </h1>
          <p className="text-xl text-gray-600">
            Most Reliable & Trusted Nursing School
          </p>
        </motion.div>

        {/* Maintenance Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-8"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Site Under Maintenance
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            We're currently performing scheduled maintenance to improve your experience. 
            Our website will be back online shortly with enhanced features and better performance.
          </p>
          
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Thank you for your patience
            </h3>
            <p className="text-gray-600">
              We apologize for any inconvenience and appreciate your understanding. 
              Please check back soon or contact us directly for urgent inquiries.
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Need Immediate Assistance?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Call Us</h4>
              <p className="text-gray-600 text-sm">
                +91 9951445443<br />
                +91 9640902778
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Email Us</h4>
              <p className="text-gray-600 text-sm">
                sreeramaaditya6@gmail.com
              </p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Visit Us</h4>
              <p className="text-gray-600 text-sm">
                Main Road, Near Ramachandrapuram<br />
                BC Hostel building, Gubbalavaripeta
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center text-gray-500"
        >
          <p className="text-sm">
            © 2025 Sri Rama Aditya College & Nursing Home. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

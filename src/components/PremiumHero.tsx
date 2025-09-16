'use client'

import { motion } from 'framer-motion'
import { UserIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

interface PremiumHeroProps {
  onJoinClick: () => void
}

export default function PremiumHero({ onJoinClick }: PremiumHeroProps) {
  return (
    <div className="hero min-h-screen bg-black relative overflow-hidden">
      {/* Nurse Image without background - 4x bigger, left bottom */}
      <div className="absolute left-0 bottom-0 w-1/2 h-full flex items-end justify-start">
        <Image
          src="/images/Hero-image-bgl.png"
          alt="Professional Nurse"
          width={800}
          height={1200}
          className="object-contain scale-150 origin-bottom-left"
          priority
        />
      </div>
      
      <div className="hero-content relative z-20 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* Left Side - Empty space for girl in background image */}
            <div className="hidden lg:block">
              {/* This space is for the girl in the background image */}
            </div>
            
            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-6"
            >
              <div className="badge badge-accent badge-lg">
                <UserIcon className="w-4 h-4 mr-2" />
                Premier Medical Education
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white">
                Most <span className="text-primary">Reliable &{' '}
                Trusted</span>{' '}
                Nursing School
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg lg:max-w-none">
                Transform your future with world-class nursing education. 
                Affordable fees, endless opportunities, and expert faculty 
                dedicated to your success.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-start">
                <div className="badge badge-outline badge-lg text-white border-white">
                  <AcademicCapIcon className="w-4 h-4 mr-2" />
                  Affordable Fee Structure
                </div>
                <div className="badge badge-outline badge-lg text-white border-white">
                  <GlobeAltIcon className="w-4 h-4 mr-2" />
                  Endless Opportunities
                </div>
              </div>

              {/* Location info - left aligned with text blocks */}
              <div className="text-sm text-white/80">
                <p>Now in Ramachandrapuram, BC Hostel building, Gubbalavaripeta</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onJoinClick}
                  className="btn btn-accent btn-lg text-black font-bold"
                >
                  Join Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('about')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-black px-8 py-3"
                >
                  Learn More About Our School
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-left border border-white/10">
                  <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">500+</div>
                  <div className="text-white text-sm font-medium">Students</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-left border border-white/10">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1">95%</div>
                  <div className="text-white text-sm font-medium">Success Rate</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-left border border-white/10">
                  <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-1">50+</div>
                  <div className="text-white text-sm font-medium">Partner Hospitals</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 text-left border border-white/10">
                  <div className="text-2xl lg:text-3xl font-bold text-orange-400 mb-1">15+</div>
                  <div className="text-white text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
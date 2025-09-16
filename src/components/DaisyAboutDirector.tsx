'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const credentials = [
  'Ex President, United Andhra Pradesh Hostel Welfare Officers Association',
  'Ex General Secretary, East Godavari District B.C., S.C - H.W.Os',
  'Joint Committee Ex Chairman, East Godavari District B.C.,S.C - H.W.Os',
  'Ex President, United Godavari District B.C.,S.C - H.W.Os',
  'Ex Trust Director, Kruthiventi Perraju Panthulu Junior College',
  'B.C., S.C Students Union Ex Chairperson, Ramachandrapuram Constitution',
  'Ex Chairperson, Y.S.R.C.P Ramachandrapuram town',
  'Constitution MemberEx Scrutiniser, West Godavari District YSRCP Penugonda',
  'YSRCP Councellor, Ramachandrapuram 27th Ward'
]

export default function DaisyAboutDirector() {

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Cool Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge badge-secondary badge-lg mb-4">
            Leadership Excellence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-secondary">Director</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
            Meet our visionary leader who has dedicated his life to excellence in education and healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Director Image with Strike */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="card bg-white shadow-xl border border-gray-100">
              <div className="card-body items-center text-center p-6 flex flex-col justify-center">
                <div className="relative mb-4">
                  <Image 
                    src="/images/Director-Image.png" 
                    alt="Director Sir Katta Sri Ramulu" 
                    width={200}
                    height={240}
                    className="w-48 h-auto object-contain rounded-xl shadow-lg"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Sir Katta Sri Ramulu
                  </h3>
                  <p className="text-gray-600 font-medium">Founder & Chairman</p>
                  <div className="badge badge-lg bg-primary text-white border-primary font-bold">
                    Visionary Leader
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="card bg-base-100 shadow-xl h-full">
              <div className="card-body p-8">
                <h3 className="card-title text-xl mb-8 text-secondary flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Past Positions & Achievements
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {credentials.map((credential, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-4 rounded-lg hover:bg-base-200 transition-colors duration-300 border border-transparent hover:border-primary/20"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-sm text-base-content/80 leading-relaxed">
                        {credential}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="divider"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="stat bg-base-200 rounded-lg p-6 hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-lg group cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="stat-value text-primary text-2xl font-bold">25+</div>
                    </div>
                    <div className="stat-desc font-medium">Years Experience</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg p-6 hover:bg-secondary/5 transition-all duration-300 border border-transparent hover:border-secondary/20 hover:shadow-lg group cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <div className="stat-value text-secondary text-2xl font-bold">500+</div>
                    </div>
                    <div className="stat-desc font-medium">Students Mentored</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg p-6 hover:bg-accent/5 transition-all duration-300 border border-transparent hover:border-accent/20 hover:shadow-lg group cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <div className="stat-value text-accent text-2xl font-bold">50+</div>
                    </div>
                    <div className="stat-desc font-medium">Awards & Recognition</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider Bar */}
        <div className="divider divider-primary my-16">
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative overflow-hidden">
            {/* Aurora Flow Vision Card */}
            <div className="relative p-12 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl">
              
              {/* Aurora Background Animation */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden -z-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-amber-400/30 to-orange-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
                </div>
              </div>
              
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-3xl -z-10"></div>
              
              <div className="relative text-center">
                {/* Colorized Icon */}
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg animate-pulse">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  Our <span className="text-primary">Vision</span>
                </h3>
                
                <div className="max-w-4xl mx-auto">
                  <div className="text-6xl text-primary/20 mb-4">"</div>
                  <p className="text-lg lg:text-xl leading-relaxed text-gray-700 font-medium">
                    To create world-class healthcare professionals who serve humanity with dedication, 
                    compassion, and excellence. Our mission is to provide quality education that transforms 
                    lives and builds a healthier society for future generations.
                  </p>
                  <div className="text-6xl text-primary/20 mt-4 flex justify-end">"</div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-default">
                    Learn More About Our Mission
                  </div>
                  <div className="btn btn-outline btn-primary btn-lg hover:shadow-lg transition-all duration-300 cursor-default">
                    Contact Leadership
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

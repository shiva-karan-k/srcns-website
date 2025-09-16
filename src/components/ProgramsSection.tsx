'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const programs = [
  {
    title: 'B.Sc Nursing',
    brief: '4-year comprehensive nursing program with clinical training and international placement opportunities.',
    detailed: 'Bachelor of Science in Nursing is a 4-year undergraduate program designed to produce competent nursing professionals. The curriculum includes anatomy, physiology, pharmacology, medical-surgical nursing, community health, psychiatric nursing, pediatric nursing, and obstetric nursing. Students receive extensive hands-on clinical training in our partner hospitals. Graduates are eligible for international placements and can pursue higher studies like M.Sc Nursing.',
    stats: { duration: '4 Years', eligibility: '10+2 with Science', placements: '95% Placement Rate' },
    color: 'primary',
    titleColor: 'text-blue-600',
    gradientBorder: 'from-blue-400 via-indigo-500 to-purple-500',
    icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
  },
  {
    title: 'GNM Nursing',
    brief: '3.5-year General Nursing and Midwifery program with practical training and immediate job opportunities.',
    detailed: 'General Nursing and Midwifery is a 3.5-year diploma program that prepares students for immediate entry into the nursing profession. The curriculum covers basic nursing skills, anatomy, physiology, medical-surgical nursing, community health nursing, mental health nursing, child health nursing, and midwifery. Students undergo extensive practical training in hospitals and community health centers. GNM graduates can work in hospitals, clinics, and can also pursue B.Sc Nursing through lateral entry.',
    stats: { duration: '3.5 Years', eligibility: '10+2 Any Stream', placements: '100% Job Guarantee' },
    color: 'secondary',
    titleColor: 'text-green-600',
    gradientBorder: 'from-green-400 via-emerald-500 to-teal-500',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    title: 'Continuing Education',
    brief: 'Professional development courses for working nurses to upgrade skills and advance careers.',
    detailed: 'Continuing Education programs are designed for practicing nurses who want to enhance their skills and advance their careers. We offer specialized courses in critical care nursing, operation theatre nursing, dialysis technology, infection control, nursing administration, and research methodology. These programs are available in weekend and evening batches to accommodate working professionals. Participants receive certificates that help in career advancement and salary increments.',
    stats: { duration: '3-12 Months', mode: 'Weekend/Evening', certification: 'Professional Certificate' },
    color: 'accent',
    titleColor: 'text-yellow-600',
    gradientBorder: 'from-yellow-400 via-orange-500 to-red-500',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  },
  {
    title: 'Certification Courses',
    brief: 'Short-term specialized certification courses in high-demand nursing specialties.',
    detailed: 'Certification Courses are intensive short-term programs designed to provide specialized skills in high-demand areas of nursing. We offer certifications in Emergency Nursing, ICU Care, Neonatal Care, Geriatric Care, Wound Care Management, and Medication Administration. These courses are perfect for fresh graduates looking to specialize or experienced nurses wanting to add new skills. The programs include theoretical knowledge and hands-on practice with modern equipment and simulation labs.',
    stats: { duration: '1-6 Months', specializations: '10+ Areas', recognition: 'Industry Recognized' },
    color: 'info',
    titleColor: 'text-purple-600',
    gradientBorder: 'from-purple-400 via-violet-500 to-indigo-500',
    icon: 'M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Clinical Training',
    brief: 'Hands-on clinical experience in real hospital settings with expert supervision.',
    detailed: 'Clinical Training is an integral part of all our nursing programs, providing students with real-world experience in healthcare settings. Students rotate through various departments including general medicine, surgery, pediatrics, obstetrics & gynecology, psychiatry, and community health. Training is conducted in our network of 50+ partner hospitals and healthcare facilities. Each student is assigned to experienced nurse preceptors who provide guidance and mentorship. Clinical training ensures graduates are job-ready and confident in their nursing skills.',
    stats: { hospitals: '50+ Partners', supervision: 'Expert Preceptors', experience: 'Real Patient Care' },
    color: 'success',
    titleColor: 'text-emerald-600',
    gradientBorder: 'from-emerald-400 via-green-500 to-lime-500',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  }
]

interface ProgramsSectionProps {
  onApplyClick?: () => void
}

export default function ProgramsSection({ onApplyClick }: ProgramsSectionProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section id="programs" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Academic Programs
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Comprehensive <span className="text-primary">Nursing Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our range of nursing programs designed to meet different career goals and 
            educational backgrounds. All programs include practical training and placement support.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div className="relative group">
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${program.gradientBorder} opacity-70 blur-sm`}></div>
                <div className={`
                  relative p-6 rounded-2xl backdrop-blur-xl border border-white/20 
                  bg-gradient-to-br from-${program.color}/10 via-white/50 to-transparent shadow-2xl
                  hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 cursor-pointer
                  before:absolute before:inset-0 before:rounded-2xl before:p-[1px]
                  before:bg-gradient-to-br before:from-white/20 before:to-transparent
                  before:-z-10 hover:before:from-white/30
                  ${expandedCard === index ? 'scale-[1.02] shadow-3xl' : ''}
                  bg-white
                `}>
                
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${program.color}/10 flex items-center justify-center`}>
                      <svg 
                        className={`w-6 h-6 text-${program.color}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={program.icon} />
                      </svg>
                    </div>
                    <div className={`btn btn-circle btn-sm btn-${program.color} btn-outline`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d={expandedCard === index ? "M20 12H4" : "M12 4v16m8-8H4"} />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className={`card-title text-lg mb-2 ${program.titleColor} group-hover:text-${program.color} transition-colors duration-300`}>
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{program.brief}</p>
                  
                  {/* Stats Preview */}
                  <div className="flex justify-between text-xs mb-4">
                    <div className={`badge badge-${program.color} badge-outline`}>
                      {program.stats[Object.keys(program.stats)[0] as keyof typeof program.stats]}
                    </div>
                    <div className="badge badge-ghost">
                      Premium Quality
                    </div>
                  </div>
                  
                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-base-300 pt-4 mt-4"
                      >
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-base-content">Program Details:</h4>
                            <p className="text-base-content/80 text-sm leading-relaxed">
                              {program.detailed}
                            </p>
                          </div>
                          
                          {/* Detailed Stats */}
                          <div className="grid grid-cols-1 gap-2">
                            <div className="stat bg-base-200 rounded-lg p-3">
                              <div className="stat-title text-xs">
                                {Object.keys(program.stats)[0]}
                              </div>
                              <div className={`stat-value text-lg text-${program.color}`}>
                                {Object.values(program.stats)[0]}
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="stat bg-base-200 rounded-lg p-2">
                                <div className="stat-title text-xs">
                                  {Object.keys(program.stats)[1]}
                                </div>
                                <div className="stat-value text-sm">
                                  {Object.values(program.stats)[1]}
                                </div>
                              </div>
                              <div className="stat bg-base-200 rounded-lg p-2">
                                <div className="stat-title text-xs">
                                  {Object.keys(program.stats)[2]}
                                </div>
                                <div className="stat-value text-sm">
                                  {Object.values(program.stats)[2]}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="card-actions">
                            <button className={`btn btn-${program.color} btn-sm btn-block rounded-lg`}>
                              Apply for This Program
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="relative overflow-hidden max-w-4xl mx-auto">
            {/* Glassmorphic CTA Card */}
            <div className="relative p-12 rounded-3xl backdrop-blur-xl border border-white/20 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 shadow-2xl">
              
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl -z-10"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-full -translate-x-16 -translate-y-16 -z-10"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-secondary/30 to-transparent rounded-full translate-x-20 translate-y-20 -z-10"></div>
              
              <div className="relative text-center">
                {/* Choose Path Icon */}
                <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-orange-500 to-blue-500 flex items-center justify-center shadow-2xl animate-pulse">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Choose Your <span className="text-primary">Path</span>
                </h3>
                
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Not sure which program is right for you? Our admissions counselors will help you choose the perfect program based on your background and career goals.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn btn-outline btn-primary btn-lg px-8 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Get Program Guidance</span>
                  </button>
                  <button 
                    onClick={onApplyClick}
                    className="btn bg-orange-500 hover:bg-orange-600 text-white border-orange-500 btn-lg px-8 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg font-bold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Apply Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

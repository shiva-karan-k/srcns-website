'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const opportunities = [
  {
    title: 'International Careers',
    brief: 'Work as Air Hostess or in hospitals across Dubai, Qatar, Abu Dhabi, Kuwait with excellent salary packages.',
    detailed: 'Our B.Sc Nursing graduates are highly sought after for international positions. Work as cabin crew with major airlines earning $3000-5000/month, or in premium hospitals across Gulf countries with packages ranging from $2500-4500/month. We have placement partnerships with Emirates, Qatar Airways, and leading hospitals in UAE, Saudi Arabia, and Kuwait. Full visa sponsorship and accommodation provided.',
    stats: { salary: '$3000-5000/month', countries: '15+ countries', placements: '200+ students' },
    color: 'primary',
    titleColor: 'text-blue-600',
    gradientBorder: 'from-blue-400 via-purple-500 to-pink-500',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Government Hospitals',
    brief: 'Secure positions in Government Hospitals, ONGC, Corporate hospitals, and top companies like Reliance.',
    detailed: 'Government nursing positions offer unmatched job security with excellent benefits. Starting salary ₹35,000-50,000/month with regular increments, pension benefits, medical coverage for family, and housing allowances. Opportunities in AIIMS, PGI, government medical colleges, ONGC medical centers, and corporate hospitals of Reliance, Tata, and other MNCs. Direct recruitment drives conducted on campus.',
    stats: { salary: '₹35,000-50,000/month', security: '100% Job Security', benefits: 'Pension + Medical' },
    color: 'secondary',
    titleColor: 'text-green-600',
    gradientBorder: 'from-green-400 via-emerald-500 to-teal-500',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Teaching Positions',
    brief: 'Become a teacher in Nursing Schools and contribute to the next generation of healthcare professionals.',
    detailed: 'Shape the future of healthcare by becoming a nursing educator. With additional qualifications like M.Sc Nursing, you can teach in nursing colleges with salaries ranging from ₹40,000-80,000/month. Opportunities available in government and private nursing colleges, medical universities, and our own institution. Research opportunities, conference presentations, and academic growth potential.',
    stats: { salary: '₹40,000-80,000/month', growth: 'Academic Career', impact: 'Shape Future Nurses' },
    color: 'accent',
    titleColor: 'text-yellow-600',
    gradientBorder: 'from-yellow-400 via-orange-500 to-red-500',
    icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
  },
  {
    title: 'Defense Services',
    brief: 'Join the Army Medical Corps and serve the nation while enjoying excellent benefits and job security.',
    detailed: 'Serve your country with pride in the Indian Army, Navy, or Air Force Medical Corps. Officer-level positions with starting salary ₹56,000/month plus allowances. Benefits include free medical treatment for family, subsidized canteen, children education allowance, travel concessions, and prestigious social status. Opportunities for specialized training, foreign postings, and rapid promotions.',
    stats: { salary: '₹56,000/month + allowances', benefits: 'Medical + Education', prestige: 'Officer Rank' },
    color: 'info',
    titleColor: 'text-indigo-600',
    gradientBorder: 'from-indigo-400 via-purple-500 to-blue-600',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Community Health Officer',
    brief: 'Work as a gazetted CHO and make a significant impact on community health and wellness.',
    detailed: 'CHO (Community Health Officer) is a gazetted government position focusing on primary healthcare and disease prevention. Salary range ₹44,000-67,000/month with government benefits. You will manage health and wellness centers, conduct health programs, supervise ANMs and ASHAs, and directly impact community health outcomes. Excellent work-life balance with regular working hours.',
    stats: { salary: '₹44,000-67,000/month', impact: 'Community Leader', schedule: 'Regular Hours' },
    color: 'success',
    titleColor: 'text-emerald-600',
    gradientBorder: 'from-emerald-400 via-green-500 to-lime-500',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Private Healthcare',
    brief: 'Excel in private hospitals, clinics, and healthcare startups with competitive compensation packages.',
    detailed: 'Private healthcare sector offers dynamic career growth and excellent compensation. Work in premium hospitals like Apollo, Fortis, Max Healthcare with starting salaries ₹25,000-40,000/month. Rapid growth opportunities to supervisory and management roles. Healthcare startups and telemedicine companies offer stock options and performance bonuses.',
    stats: { salary: '₹25,000-80,000/month', growth: 'Rapid Promotion', sectors: 'Hospitals + Startups' },
    color: 'warning',
    titleColor: 'text-rose-600',
    gradientBorder: 'from-rose-400 via-pink-500 to-purple-500',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]

interface DaisyOpportunitiesProps {
  onApplyClick?: () => void
}

export default function DaisyOpportunities({ onApplyClick }: DaisyOpportunitiesProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section id="opportunities" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge badge-accent badge-lg mb-4">
            Career Opportunities
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Unlimited <span className="text-accent">Career Possibilities</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
            Our nursing graduates enjoy diverse career opportunities across the globe with 
            excellent salary packages and growth prospects.
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
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
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${opportunity.gradientBorder} opacity-70 blur-sm`}></div>
                <div className={`
                  relative p-6 rounded-2xl backdrop-blur-xl border border-white/20 
                  bg-gradient-to-br from-${opportunity.color}/10 via-white/50 to-transparent shadow-2xl
                  hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 cursor-pointer
                  before:absolute before:inset-0 before:rounded-2xl before:p-[1px]
                  before:bg-gradient-to-br before:from-white/20 before:to-transparent
                  before:-z-10 hover:before:from-white/30
                  ${expandedCard === index ? 'scale-[1.02] shadow-3xl' : ''}
                  bg-white
                `}>
                
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${opportunity.color}/10 flex items-center justify-center`}>
                      <svg 
                        className={`w-6 h-6 text-${opportunity.color}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={opportunity.icon} />
                      </svg>
                    </div>
                    <div className={`btn btn-circle btn-sm btn-${opportunity.color} btn-outline`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d={expandedCard === index ? "M20 12H4" : "M12 4v16m8-8H4"} />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className={`card-title text-lg mb-2 ${opportunity.titleColor} group-hover:text-${opportunity.color} transition-colors duration-300`}>
                    {opportunity.title}
                  </h3>
                  <p className="text-base-content/70 text-sm mb-4">{opportunity.brief}</p>
                  
                  {/* Stats Preview */}
                  <div className="flex justify-between text-xs mb-4">
                    <div className={`badge badge-${opportunity.color} badge-outline`}>
                      {opportunity.stats.salary}
                    </div>
                    <div className="badge badge-ghost">
                      High Growth
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
                            <h4 className="font-semibold mb-2 text-base-content">Detailed Information:</h4>
                            <p className="text-base-content/80 text-sm leading-relaxed">
                              {opportunity.detailed}
                            </p>
                          </div>
                          
                          {/* Detailed Stats */}
                          <div className="grid grid-cols-1 gap-2">
                            <div className="stat bg-base-200 rounded-lg p-3">
                              <div className="stat-title text-xs">Salary Range</div>
                              <div className={`stat-value text-lg text-${opportunity.color}`}>{opportunity.stats.salary}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="stat bg-base-200 rounded-lg p-2">
                                <div className="stat-title text-xs">
                                  {Object.keys(opportunity.stats)[1]}
                                </div>
                                <div className="stat-value text-sm">
                                  {Object.values(opportunity.stats)[1]}
                                </div>
                              </div>
                              <div className="stat bg-base-200 rounded-lg p-2">
                                <div className="stat-title text-xs">
                                  {Object.keys(opportunity.stats)[2]}
                                </div>
                                <div className="stat-value text-sm">
                                  {Object.values(opportunity.stats)[2]}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="card-actions">
                            <button className={`btn btn-${opportunity.color} btn-sm btn-block`}>
                              Learn More & Apply
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
                {/* Journey Icon */}
                <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl animate-pulse">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Ready to Start Your <span className="text-primary">Journey?</span>
                </h3>
                
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Join thousands of successful nurses who started their career with us. Take the first step towards a rewarding healthcare profession.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn btn-outline btn-primary btn-lg px-8 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download Career Guide</span>
                  </button>
                  <button 
                    onClick={onApplyClick}
                    className="btn bg-orange-500 hover:bg-orange-600 text-white border-orange-500 btn-lg px-8 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg font-bold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const facilities = [
  {
    title: 'Modern Campus',
    description: 'State-of-the-art infrastructure with modern architecture designed for optimal learning environment.',
    fullDescription: 'Our modern campus features cutting-edge architecture designed specifically for medical education. With spacious corridors, natural lighting, climate-controlled environments, and accessibility features throughout. The campus includes study lounges, meditation areas, cafeteria, recreational facilities, and 24/7 security for a safe and conducive learning atmosphere.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: 'from-blue-500/20 via-purple-500/20 to-pink-500/20',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400'
  },
  {
    title: 'Smart Classrooms',
    description: 'Interactive smart classrooms equipped with latest technology for enhanced learning experience.',
    fullDescription: 'Experience next-generation learning in our smart classrooms featuring interactive whiteboards, high-resolution projectors, audio-visual systems, and wireless connectivity. Each classroom accommodates 50-60 students with ergonomic seating, optimal acoustics, and climate control. Advanced presentation tools and recording capabilities support both in-person and hybrid learning modalities.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400'
  },
  {
    title: 'Advanced Labs',
    description: 'High-tech computer labs and simulation centers with cutting-edge medical equipment.',
    fullDescription: 'Our state-of-the-art laboratories include computer labs with latest software, anatomy lab with cadavers and models, nursing simulation lab with high-fidelity mannequins, microbiology lab with advanced equipment, and skills lab for clinical practice. All labs feature modern ventilation systems, safety equipment, and are maintained to international standards for optimal learning experiences.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    gradient: 'from-purple-500/20 via-violet-500/20 to-indigo-500/20',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400'
  },
  {
    title: 'Digital Library',
    description: 'Comprehensive digital library with access to thousands of medical journals and research papers.',
    fullDescription: 'Our extensive digital library provides 24/7 access to over 10,000 medical books, journals, and research papers from leading publishers. Features include online databases, e-learning modules, video lectures, virtual reality medical simulations, quiet study areas, group discussion rooms, and high-speed internet. Librarian support available for research assistance and resource navigation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    gradient: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20',
    iconBg: 'bg-orange-500/20',
    iconColor: 'text-orange-400'
  },
  {
    title: 'Comfortable Hostel',
    description: 'Safe, comfortable, and well-maintained hostel facilities with modern amenities.',
    fullDescription: 'Our secure hostel accommodations offer single and shared rooms with attached bathrooms, study desks, storage space, and Wi-Fi connectivity. Common facilities include dining hall with nutritious meals, recreation room, laundry service, medical room, and 24/7 security with CCTV surveillance. Warden supervision ensures a safe, disciplined, and supportive living environment for students.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    gradient: 'from-rose-500/20 via-pink-500/20 to-fuchsia-500/20',
    iconBg: 'bg-rose-500/20',
    iconColor: 'text-rose-400'
  },
  {
    title: 'Clinical Training',
    description: 'Hands-on clinical training with real patients in our affiliated hospitals and healthcare centers.',
    fullDescription: 'Comprehensive clinical training program conducted in partnership with 50+ affiliated hospitals and healthcare centers. Students gain hands-on experience in medical-surgical nursing, pediatric care, obstetric nursing, psychiatric nursing, and community health. Clinical rotations are supervised by experienced nurse educators and include exposure to ICU, emergency department, operation theatre, and outpatient departments for well-rounded practical experience.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gradient: 'from-green-500/20 via-lime-500/20 to-emerald-500/20',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400'
  }
]

export default function FluidFacilities() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-white">
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
            <span className="font-black">World-Class</span> Facilities
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-orange-500">State-of-the-Art</span> Infrastructure
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience learning in our modern, well-equipped facilities designed to provide 
            the best educational environment for future healthcare professionals.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glassmorphic Card */}
              <div 
                onClick={() => toggleCard(index)}
                className={`
                  relative p-8 rounded-2xl backdrop-blur-xl border border-white/20 
                  bg-gradient-to-br ${facility.gradient} shadow-2xl cursor-pointer
                  hover:shadow-3xl hover:scale-105 transition-all duration-500
                  before:absolute before:inset-0 before:rounded-2xl before:p-[1px]
                  before:bg-gradient-to-br before:from-white/20 before:to-transparent
                  before:-z-10 hover:before:from-white/30
                  ${expandedCard === index ? 'scale-105 shadow-3xl' : ''}
                `}>
                
                {/* Background blur effect */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl -z-10"></div>
                
                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-xl ${facility.iconBg} backdrop-blur-sm
                  flex items-center justify-center mb-6
                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                  ${facility.iconColor}
                `}>
                  {facility.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {facility.title}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {expandedCard === index ? facility.fullDescription : facility.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  {expandedCard === index ? 'Show Less' : 'Learn More'}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={expandedCard === index ? "M5 15l7-7 7 7" : "M13 7l5 5m0 0l-5 5m5-5H6"} />
                  </svg>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-6 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-xl border border-white/20">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
              Ready to Experience Excellence?
            </h3>
            <button className="btn btn-primary btn-lg flex items-center gap-2 hover:shadow-lg transition-all duration-300 underline decoration-2 underline-offset-2">
              Schedule Campus Tour
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

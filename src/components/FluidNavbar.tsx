'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Home, Building2, User, Briefcase, GraduationCap, Phone, Menu, X } from 'lucide-react'

interface FluidNavbarProps {
  onContactClick?: () => void
  onApplyClick?: () => void
}

export default function FluidNavbar({ onContactClick, onApplyClick }: FluidNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    let targetId = sectionId
    
    // Map navigation items to their target sections
    if (sectionId === 'home') {
      targetId = 'hero'
    } else if (sectionId === 'admissions') {
      targetId = 'programs'
    }
    
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'facilities', label: 'Facilities', icon: Building2 },
    { id: 'about', label: 'About', icon: User },
    { id: 'opportunities', label: 'Opportunities', icon: Briefcase },
    { id: 'admissions', label: 'Admissions', icon: GraduationCap }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/20' 
          : 'bg-black/80 backdrop-blur-xl'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <Image 
              src="/images/Logo-with-name.png" 
              alt="Sri Rama Aditya College & Nursing Home" 
              width={240}
              height={48}
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary hover:bg-primary/10' 
                      : 'text-white hover:text-primary hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={18} />
                  <span>{item.label}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Button Group - Apply Now & Contact Us */}
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1">
            {/* Apply Now Button */}
            <motion.button 
              onClick={onApplyClick}
              className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium bg-orange-500 hover:bg-orange-600 text-white transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Apply Now</span>
            </motion.button>
            
            {/* Contact Button */}
            <motion.button 
              onClick={onContactClick || (() => scrollToSection('contact'))}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={16} />
              <span>Contact Us</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-6 flex flex-col justify-center items-center ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-current mt-1 transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`lg:hidden py-4 border-t ${
              isScrolled ? 'border-gray-200/20' : 'border-white/20'
            }`}
          >
              <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      isScrolled 
                        ? 'text-gray-700 hover:bg-primary/10' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent size={18} className="mr-3" />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

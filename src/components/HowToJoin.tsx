'use client'

import { motion } from 'framer-motion'
import { CheckCircle, GraduationCap, Clock, Users } from 'lucide-react'

interface HowToJoinProps {
  onJoinClick: () => void
}

const bscRequirements = [
  'If you opt B.Sc Nursing, you should have passed all subjects in Bi.Pc',
  'Min. pass percentage of 40% is required in English',
  'B.Sc Nursing Training 4 Year Nursing Test should be written',
  'Males are also allowed to join the B.Sc Nursing Course'
]

const gnmRequirements = [
  'If you are opting G.N.M Nursing, students from any Intermediate group (Arts, Science etc) are allowed to join the Nursing Course',
  'Min. pass percentage of 40% is required in English',
  'G.N.M nursing training is only a 3 year course',
  'Students undertaking occasional course can also join in G.N.M nursing'
]

export default function HowToJoin({ onJoinClick }: HowToJoinProps) {
  return (
    <section id="how-to-join" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How to Join our Nursing School?
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* B.Sc Nursing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl border-2 border-primary-200 dark:border-primary-600 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                B.Sc Nursing
              </h3>
            </div>
            
            <ul className="space-y-4">
              {bscRequirements.map((requirement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {requirement}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* GNM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl border-2 border-secondary-200 dark:border-secondary-600 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-700 dark:text-secondary-300">
                GNM
              </h3>
            </div>
            
            <ul className="space-y-4">
              {gnmRequirements.map((requirement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-secondary-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {requirement}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Fee Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-8 rounded-2xl text-center shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Fee Reimbursement Information
          </h3>
          <p className="text-lg mb-4">
            <strong>Fee reimbursement will be done by the institution itself</strong>
          </p>
          <p className="text-primary-100">
            <strong>Note:</strong> You should complete the course after joining the college.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onJoinClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-xl transition-all duration-300"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}


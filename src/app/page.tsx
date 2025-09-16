'use client'

import { useState } from 'react'
import FluidNavbar from '@/components/FluidNavbar'
import PremiumHero from '@/components/PremiumHero'
import FluidFacilities from '@/components/FluidFacilities'
import DaisyAboutDirector from '@/components/DaisyAboutDirector'
import ProgramsSection from '@/components/ProgramsSection'
import DaisyOpportunities from '@/components/DaisyOpportunities'
import HowToJoin from '@/components/HowToJoin'
import ModernFooter from '@/components/ModernFooter'
import JoinModal from '@/components/JoinModal'

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)

  const openJoinModal = () => setIsJoinModalOpen(true)
  const closeJoinModal = () => setIsJoinModalOpen(false)

  return (
    <main className="min-h-screen">
      <FluidNavbar />
      <PremiumHero onJoinClick={openJoinModal} />
      <FluidFacilities />
      <DaisyAboutDirector />
      <ProgramsSection onApplyClick={openJoinModal} />
      <DaisyOpportunities onApplyClick={openJoinModal} />
      <HowToJoin onJoinClick={openJoinModal} />
      <ModernFooter />
      <JoinModal isOpen={isJoinModalOpen} onClose={closeJoinModal} />
    </main>
  )
}


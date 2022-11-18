import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './WhyThisProgramElements'
import Icon1 from '../images/invitationprogram.png'
import Icon2 from '../images/capitalAccess.png'
import Icon3 from '../images/wclassmentor.png'
const WhyThisProgram = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Why Quatar Finans Fintech Hub?</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src = {Icon1} />
                <ServicesH2>Innovation Program</ServicesH2>
                <ServicesP>Our FinTech Incubator & Accelerator Programs (currently virtual due to COVID-19) are the ideal launch pads for early-stage startups, and matured FinTechs to scale up!</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src = {Icon2} />
                <ServicesH2>Sustainable Capital Access</ServicesH2>
                <ServicesP>Whether you are physically at the heart of QFTH experiencing the energy or whether you are accessing the hub remotely, your business ideas will get the stimulus they need to achieve their potential through our capital investment fund.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src = {Icon3} />
                <ServicesH2>World Class Mentors</ServicesH2>
                <ServicesP>Our mentors are curated and handpicked from across the globe to ensure a bespoke coaching and collaboration experience.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default WhyThisProgram

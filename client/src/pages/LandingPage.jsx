import React, { lazy, Suspense } from 'react'
import HeroSection from '../components/HeroSection'
import LazyLoading from '../components/LazyLoading';
import BackgroundVideo from '../components/BackgroundVideo';
import LoanCard from '../components/LoanCard';
const LandingPage = () => {

    return (
        <div>
            <BackgroundVideo component={<HeroSection />} />
        </div>
    )
}

export default LandingPage
import React from 'react'
import Header from '../components/Header'
import TopOfficers from '../components/TopOfficers'
import FAQ from '../components/FAQ'
import HomeNews from '../components/HomeNews'
import TaxObligations from '../components/TaxObligations'
import QuickAccess from '../components/QuickAccess'


const Home = () => {
  return (
    <div className='bg-gray-50'> {/* Beri background abu tipis agar kartu putih terlihat jelas */}
        <Header />
        <QuickAccess />
        <TaxObligations />
        <HomeNews />
        <TopOfficers />
        <FAQ />
    </div>
  )
}

export default Home
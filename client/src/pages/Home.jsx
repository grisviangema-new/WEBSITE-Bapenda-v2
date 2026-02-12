import React from 'react'
import Header from '../components/Header'
import TopOfficers from '../components/TopOfficers'
import FAQ from '../components/FAQ'
import HomeNews from '../components/HomeNews'
import TaxObligations from '../components/TaxObligations'


const Home = () => {
  return (
    <div>
        <Header />
        <TaxObligations />
        <HomeNews />
        <TopOfficers />
        <FAQ />
    </div>
  )
}

export default Home
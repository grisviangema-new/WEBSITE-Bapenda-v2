import React from 'react'
import Header from '../components/Header'
import TopOfficers from '../components/TopOfficers'
import FAQ from '../components/FAQ'
import HomeNews from '../components/HomeNews'
import HomeServices from '../components/HomeServices'

const Home = () => {
  return (
    <div>
        <Header />
        <HomeServices />
        <HomeNews />
        <TopOfficers />
        <FAQ />
    </div>
  )
}

export default Home
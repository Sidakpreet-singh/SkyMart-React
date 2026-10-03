import React from 'react'
import Hero from '../Components/Hero'
import Categories from '../Components/Categories'
import FeaturedProducts from '../Components/FeaturedProducts'
import PromoSection from '../Components/PromoSection'
import NewArrivals from '../Components/NewArrivals'
import Footer from '../Components/Footer'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
               <Navbar/>
              <Hero/>
      <section id="categories">
  <Categories />
</section>
      <FeaturedProducts/>
      <PromoSection/>
      <NewArrivals/>
      <Footer/> 
      
    </div>
  )
}

export default Home

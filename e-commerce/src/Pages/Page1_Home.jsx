import React from 'react'
import TopLook from '../Components/HomePageContent/01_TopLook/TopLook'
import Category from '../Components/HomePageContent/02_Category/Category'
import Descrip from '../Components/HomePageContent/03_Description/Descrip'
import Services from '../Components/HomePageContent/04_Services/Services'
import OurPolicy from '../Components/HomePageContent/05_Policy/OurPolicy'
import Subscribe from '../Components/HomePageContent/06_Subscribe/Subscribe'
const Page1_Home = () => {
  return (
    <div className='bg-amber-50'>
      <TopLook/>
      <Category/>
      <Descrip/>
      <Services/>
      <OurPolicy/>
      <Subscribe/>
    </div>
  )
}
export default Page1_Home

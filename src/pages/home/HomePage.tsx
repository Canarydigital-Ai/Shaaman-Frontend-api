import React from 'react'
import Section1 from '../../components/home/Section1'
import NewArrivals from '../../components/home/NewArrivals'
import NewCollectionBanner from '../../components/home/NewCollectionBanner'

const HomePage:React.FC = () => {
  return (
    <div className='bg-[linear-gradient(to_bottom,_#F6F1E8,_#FFF9EF)]'>
      <Section1 />
      <NewArrivals />
      <NewCollectionBanner />
    </div>
  )
}

export default HomePage

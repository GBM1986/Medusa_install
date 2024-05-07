import React from 'react'
import coffeecup from "../assets/coffeecup.png"
import coffeebags from "../assets/coffeebags.png"
import coffeehands from "../assets/coffeehands.png"
import { NavLink } from 'react-router-dom'
import { Testimonies } from '../components/Testimonies'


export const Frontpage = () => {
  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-16 mb-6 bg-[#D9D9D9]'>
      <section className='p-6 flex flex-col justify-center items-center'>
        <div className=' py-4'>
          <h3 className='text-6xl text-center font-Inspiration mb-8'>The right beans</h3>
          <p className='font-Inika text-center'>Our journey begins with a deep-rooted connection to the land, as we seek out farmers who uphold environmentally-friendly practices and prioritize the well-being of their communities. Through personal relationships and mutual respect, we collaborate closely with these farmers, understanding their methods and values.</p>
        </div>
        <div className='max-w-sm rounded overflow-hidden'>
          <img className='w-[505px] h-[321px] object-cover' src={ coffeehands } alt="" />
        </div>
      </section>
      <section className='p-6 flex flex-col justify-center items-center'>
        <div className='py-4'>
          <h3 className='text-6xl font-normal text-center font-Inspiration mb-8'>Carefully handled</h3>
          <p className='font-Inika text-center'>Each bean is carefully handpicked at the peak of ripeness, ensuring optimal flavor and aroma. We embrace diversity in our selection, cherishing the unique characteristics of each region and varietal. From the lush mountainsides to the sun-kissed valleys, we traverse the landscapes in search of perfection.</p>
        </div>
        <div className='max-w-sm rounded overflow-hidden'>
          <img className='w-[505px] h-[321px] object-cover' src={ coffeebags } alt="" />
        </div>
      </section>
      <section className='p-6 flex flex-col justify-center items-center'>
        <div className='py-4'>
          <h3 className='text-6xl text-center font-Inspiration mb-8'>From us to you</h3>
          <p className='font-Inika text-center'>Our commitment to organic farming means that our beans are free from harmful chemicals, allowing the natural flavors to shine through. We believe in transparency and traceability, providing our customers with a genuine connection to the origins of their coffee.</p>
        </div>
        <div className='max-w-sm rounded overflow-hidden'>
          <img className='w-[505px] h-[321px] object-cover' src={ coffeecup } alt="" />
        </div>
      </section>
      </div>
      
      <section className='bg-[#D9D9D9] p-6 flex flex-col justify-center items-center mb-6'>
        <h2 className='font-Licorice text-9xl text-center py-8'>Shop now</h2>
        <p className='font-Inika font-bold text-center pb-4'>Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in <br /> no time at all. And the best part of it? It is totally organic, fair trade and <br /> sustainably sourced. So get brewing</p>
        <NavLink to="/Productspage"><button className='border-[#1E1E1E] rounded-lg bg-[#1E1E1E] px-20 py-5 text-white'>Go to products</button></NavLink>
      </section>

      <Testimonies />
      </div>
  )
}

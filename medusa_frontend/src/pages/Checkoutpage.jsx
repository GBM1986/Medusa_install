import React from 'react'
import { Testimonies } from '../components/Testimonies'
import { useForm } from 'react-hook-form';

export const Checkoutpage = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <div>
      <h1 className='text-8xl py-24 text-center font-Licorice bg-[#EFEFEF]'>Checkout</h1>
      <form className='grid grid-cols-2 gap-10 mx-auto px-20 md:px-26 lg:px-48 xl:px-48 bg-[#EFEFEF] mb-12 pb-20'>
      
      <section>
      <div>
            <label className='text-xs' htmlFor="firstname">Firstname</label>
            <br />
            <input
              className=' p-2 border-2 border-[#1E1E1E] rounded-lg w-full'
              type="text"
              id="firstname"
              {...register("firstname", { required: true })} // Corrected register field name
            />
          </div>
          <div>
            <label className='text-xs' htmlFor="lastname">Lastname</label>
            <br />
            <input
              className=' p-2 border-2 border-[#1E1E1E] rounded-lg w-full'
              type="text"
              id="lastname"
              {...register("lastname", { required: true })} // Corrected register field name
            />
          </div>
          <div>
            <label className='text-xs' htmlFor="address">Address</label>
            <br />
            <input
              className=' p-2 border-2 border-[#1E1E1E] rounded-lg w-full'
              type="text"
              id="address"
              {...register("address", { required: true })} // Corrected register field name
            />
          </div>
          <div>
            <label className='text-xs' htmlFor="city">City</label>
            <br />
            <input
              className=' p-2 border-2 border-[#1E1E1E] rounded-lg w-full'
              type="text"
              id="city"
              {...register("city", { required: true })} // Corrected register field name
            />
          </div>
          <div>
            <label className='text-xs' htmlFor="phone">Phone</label>
            <br />
            <input
              className=' p-2 border-2 border-[#1E1E1E] rounded-lg w-full'
              type="integer"
              id="phone"
              {...register("phone", { required: true })} // Corrected register field name
            />
          </div>
          <div>
            <label className='text-xs' htmlFor="province">Province</label>
            <br />
            <input
              className=' p-2 border-2 border-[#1E1E1E] rounded-lg w-full'
              type="text"
              id="province"
              {...register("province", { required: true })} // Corrected register field name
            />
          </div>
          <div>
            <label className='text-xs' htmlFor="country">Country</label>
            <br />
            <input
              className=' p-2 border-2 border-[#1E1E1E] rounded-lg w-full'
              type="text"
              id="country"
              {...register("country", { required: true })} // Corrected register field name
            />
          </div>
          </section>
          <section>
            
            <button className='bg-[#1E1E1E] text-white p-2 rounded-lg w-[50%] mt-8' type="submit">Pay now</button>
          </section>
      </form>
      <Testimonies />
    </div>
  )
}

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMeCustomer, useMedusa } from 'medusa-react';
import { Testimonies } from '../components/Testimonies';

export const Loginpage = () => {
  const { client } = useMedusa();
  const { refetch: refetchCustomer } = useMeCustomer();
  const { register, handleSubmit, formState: { errors } } = useForm(); // Add useForm hook
  const [loginError, setLoginError] = useState(null); // State to manage login errors

  const handleLogin = (data) => {
    const { firstname, lastname } = data;
    client.auth.authenticate({
      firstname,
      lastname,
    })
    .then(() => {
      // customer is logged-in successfully
      // send authenticated requests now
      refetchCustomer();
    })
    .catch((error) => {
      // an error occurred.
      console.error("Login failed:", error);
      // Update state to show error message to the user
      setLoginError("An error occurred. Please try again later.");
    },[]);
  };

  return (
    <div className=''>
      <div>
        <form className='h-screen mx-auto px-20 md:px-26 lg:px-48 xl:px-48 bg-[#EFEFEF] space-y-8 mb-6' onSubmit={handleSubmit(handleLogin)}>
          <h1 className='text-6xl py-24 text-center font-Inspiration'>Log ind</h1>
          <div>
            <label className='text-xs' htmlFor="firstname">Firstname:</label>
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
              className='w-full p-2 border-2 border-[#1E1E1E] rounded-lg'
              type="text"
              id="lastname"
              {...register("lastname", { required: true })}
            />
          </div>
          {errors.firstname && <div className="error">Firstname is required</div>}
          {errors.lastname && <div className="error">Lastname is required</div>}
          {loginError && <div className="error">{loginError}</div>} {/* Display login error */}
          <button className='border-2 rounded-lg border-[#1E1E1E] px-16 py-4  ml-20' type="submit">Sign up</button>
          <button className='border-2 rounded-lg border-[#1E1E1E] bg-[#1E1E1E] text-white px-16 py-4 ml-20 ' type="submit">Submit</button>
        </form>
      </div>
      <Testimonies />
    </div>
  );
};

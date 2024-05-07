import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] w-full">
      <div className="max-w-screen-xl px-24 py-10 mx-auto sm:px-6 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-8 lg:col-span-3 sm:grid-cols-2 lg:grid-cols-3">
          <div>
              <h4 className="text-2xl font-extralight text-white">
                Contact
              </h4>
              <section className="flex flex-col mt-4 space-y-2 text-sm text-white">
                <a className="hover:opacity-75 cursor-pointer" href="#">Supercoffeeroad 223b</a>
                <a className="hover:opacity-75 cursor-pointer" href="#">92230 New Coffeland</a>
                <a className="hover:opacity-75 cursor-pointer" href="#">Phone: 22331122</a>
                <a className="hover:opacity-75 cursor-pointer" href="#">Mail: coffeeland@info.com</a>
              </section>
            </div>
            <div>
              <h4 className="text-2xl font-extralight text-white">
                Legal
              </h4>
              <section className="flex flex-col mt-4 space-y-2 text-sm text-white ">
                <a className="hover:opacity-75 cursor-pointer" href='#'>Cookiepolicy</a>
                <a className="hover:opacity-75 cursor-pointer" href='#'>Return policy</a>
                <a className="hover:opacity-75 cursor-pointer" href="#">Shipping</a>
                <a className="hover:opacity-75 cursor-pointer" href="#">Terms and Conditions</a>
              </section>
            </div>
            <div>
              <h4 className="text-2xl font-extralight text-white">
                About
              </h4>
              <section className="flex flex-col mt-4 space-y-2 text-sm text-white">
                <a className="hover:opacity-75 cursor-pointer" href="#">History</a>
                <a className="hover:opacity-75 cursor-pointer" href="#">The people behind</a>
                <a className="hover:opacity-75 cursor-pointer" href="#">Partnerships</a>
                <a className="hover:opacity-75 cursor-pointer" href="#">International</a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

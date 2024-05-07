import React from 'react'; 
import { formatVariantPrice, useCreateLineItem, useProducts, useRegions, useCart } from "medusa-react"; 
import { Cart } from '../components/Cart';

export const Productspage = () => {
  const { products, isLoading: isProductsLoading } = useProducts();
  const { regions, isLoading: isRegionsLoading } = useRegions();
  const { cart } = useCart(); // Import and destructure useCart

  const createLineItem = useCreateLineItem(cart.id);

  if (isProductsLoading || isRegionsLoading) return <p>Loading...</p>;

  console.log(products, regions);

  const addToCart = (variant, quantity) => {
    const variantId = variant.id;
    createLineItem.mutate(
      { variant_id: variantId, quantity: quantity },
      {
        onSuccess: (cart) => console.log(cart, "newCart"), // Remove extra curly braces and adjust parameter name
        onError: (err) =>
          console.log("Something went wrong adding variant to cart", err),
      }
    );
  };

  return (
    <>
      <Cart />
      <div className='bg-[#D9D9D9] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-24 mt- '>
        {products.map((product) => (
          <div key={product.id} className='flex flex-col justify-center items-center p-6 '>
            <h1 className='text-6xl text-center font-Inspiration mb-8'>{product.title}</h1>
            <img 
              className='w-[349px] h-[349px] object-cover mb-8'
              src={product.thumbnail} 
              alt={product.title} 
            />
            <p className='font-Inika text-center mb-8 whitespace-pre-wrap'>{product.description}</p>
            {/* <p>{product.variants[0].title}</p> */}
            
            <br />
            <p>Price: {formatVariantPrice({ variant: product.variants[0], region: regions[0] })}</p><br />
            <button className='border-[#1E1E1E] rounded-lg bg-[#1E1E1E] px-20 py-5 text-white' onClick={() => addToCart(product.variants[0], 1)}>
              Add to Cart 
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

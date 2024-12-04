import React from 'react'
import FoodData from '../data/FoodData'
import { AiFillStar } from "react-icons/ai";



function FoodCard({ id, name, img, desc, price, rating }) {
  return (
    <div className='w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
      <img className='h-[130px] hover:scale-110 cursor-grab trasiton-all duration-500 ease-in-out' src={img} />

      <div className='text-sm flex justify-between'>
        <h2 className='font-medium'>{name}</h2>
        <span className='text-green-500'>₹{price}</span>
      </div>
      <p className='text-sm font-normal'>{desc.slice(0, 50)}...</p>
      <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
          <AiFillStar className='mr-1 text-yellow-400' /> {rating}
        </span>
        <button className='text-white p-1 bg-green-500 rounded hover:bg-green-600 text-sm'>Add to cart</button>
      </div>
    </div>

  )
}

export default FoodCard
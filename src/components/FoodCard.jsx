import React from 'react'
import FoodData from '../data/FoodData'


function FoodCard() {
  return (
    <div className='w-[250px] bg-white p-5 flex flex-col rounded-lg'>
        <img className='height-[130px] hover:scale-110 cursor-grab trasiton-all duration-500 ease-in-out' src={FoodData[0].img} />

        <div><h2>Onion Pizza</h2></div>
        <span>180</span>
    </div>
    
  )
}

export default FoodCard
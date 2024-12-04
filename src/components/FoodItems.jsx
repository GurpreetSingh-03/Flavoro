import React from 'react'
import FoodData from '../data/FoodData'
import FoodCard from './FoodCard'

function FoodItems() {
  return (
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
      {
        FoodData.map((item) => {
          return <FoodCard key={item.id} id={item.id} name={item.name} desc={item.desc} rating={item.rating} price={item.price} img={item.img} />
        })
      }

    </div>
  )
}

export default FoodItems
import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";


function CardItem() {
    return (
        <div>
            <img src='https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png'
                alt=""
                className='w-[50px] h-[50px]'
            />
            <div>
                <h2>Onion Pizza</h2>
                <div>
                    <span>₹120</span>
                    <div>
                        <FaPlus className=' bg-green-500 hover:bg-green-600 border-1 hover:border-2 border-gray-600 text-white rounded text-xl p-1 transition-all ease-linear cursor-pointer' />
                        <span>1</span>
                        <FaMinus className=' bg-red-500 hover:bg-red-600 border-1 hover:border-2 border-gray-600 text-white rounded text-xl p-1 transition-all ease-linear cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem
import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import CardItem from './CardItem';


function Cart() {
  return (
    <div className='fixed right-0 top-0 w-full lg:w-[40vh] h-full bg-white p-5'>
        <div className='flex justify-between my-3'>
            <span>My Order</span>
            <IoIosCloseCircle className=' text-gray-600  font-normal text-xl hover:text-red-500 cursor-pointer'/>
        </div>

        <CardItem />

        <div className='absolute bottom-2'>
            <h3 className='font-semibold text-gray-600'>Items: </h3>
            <h3 className='font-semibold text-gray-600'>Total Amount: </h3>
            <hr className='w-[90vw] lg:w-[15vw] my-2'/>
            <button className='bg-green-500 font-bold px-3 py-2 text-white rounded-lg w-[90vw] lg:w-[15vw]'>Checkout</button>
        </div>
    </div>
  )
}

export default Cart
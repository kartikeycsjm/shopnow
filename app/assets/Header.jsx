import React from 'react'
import Image from 'next/image'
const Header = () => {
    return (
        <div className='h-[70px] bg-[#000625] flex justify-between items-center'>
            <h1 className='text-[40px] pl-4 font-bold text-blue-300'>Shop Now</h1>
            <div id="buttons" className='w-[40%] flex justify-around items-center'>
                <Image
                className=' cursor-pointer'
                src={'/icons/house.png'} width={30} height={30}></Image>
                <Image
                className=' cursor-pointer'
                src={'/icons/trolley.png'} width={30} height={30}></Image>
                <button className='text-[15px]'>Log out</button>
            </div>
        </div>
    )
}
export default Header
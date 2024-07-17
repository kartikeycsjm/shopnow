import React from 'react'
import Image from 'next/image'
import { product } from '../../types/type'
const Item = ({ name, description, picture, price }:any) => {
    return (
        <div className='mx-3 w-[250px] h-[310px]'>
            <div className='bg-blue-100 h-[200px] w-[250px] rounded flex justify-center items-center'>
                <Image alt='airpods' src={picture} width={300} height={300}></Image>
            </div>
            <div className='w-[250px] h-100px flex justify-center items-center '>
                <div id="text" className='w-[200px] flex justify-center items-start flex-col'>
                    <h3 className='text-lg font-bold'>{name}</h3>

                    <p className='text-[12px]'>{description}</p>
                    <span>{price}</span>
                </div>
                <button className='bg-emerald-400 w-[50px]'>+</button>
            </div>
        </div>
    )
}

export default Item
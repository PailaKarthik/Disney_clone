import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwar from './../assets/Images/starwar.png'
 
import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'


const ProductionHouse = () => {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },
    ]
    return (
        <div className='flex flex-wrap justify-center md:gap-5 px-4 md:px-10 py-2 md:mt-5 '>
            {productionHouseList.map((item)=>(
                <div className='m-2 border-[2px] border-gray-600 bg-[#1f1f1f] rounded-md hover:cursor-pointer hover:scale-105 transition ease-in-out duration-500 relative shadow-xl shadow-gray-800 '>
                    <video className='absolute top-0 w-[100px] md:w-[200px] rounded-md z-0 opacity-0 hover:opacity-50 transition ease-in-out duration-500' src={item.video} autoPlay loop muted playsInline></video>
                    <img className='w-[100px] md:w-[200px] z-1' src={item.image} alt="names" />
                </div>
            ))}
        </div>
    )
}

export default ProductionHouse

import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

export default function Card({cardData}) {

    return (
        <div className='card-container bg-[#212121] p-[30px]  rounded-[4px]'>
            <div className='image-container py-[50px] px-[40px]'>
                <StaticImage
                    src={cardData.image}
                    alt='alto logo'
                    width={300}
                    height={200} />
            </div>
            <div className='card-details text-left'>
                <p className='text-[22px] leading-7 text-[#ffffff] mb-[12px]'>{cardData.title}</p>
                <p className='text-[14px] leading-4 text-[#ffffff]'>{cardData.description}</p>
            </div>
        </div>
    )
}

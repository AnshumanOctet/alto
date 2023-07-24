import React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function SwiperItem({swiperInfo,swiperImagesByPath}) {

    console.log(swiperInfo)
    return (
        <div className="grid grid-cols-2 items-center">
            <div>
                <h1>{swiperInfo.title}</h1>
                <p className="font-normal text-[18px] leading-[28px] tracking-[3%] text-[#5a5a5a]">{swiperInfo.description}</p>
            </div>
            <div>
            <GatsbyImage className='' image={swiperImagesByPath[swiperInfo.image]} alt="" /> 
            </div>
        </div>
    )
}

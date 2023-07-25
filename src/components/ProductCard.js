import React from 'react'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
// import { GatsbyImage } from 'gatsby-plugin-image'


export default function ProductCard({ productInfo, productImagesByPath }) {
    return (
        <div className=''>
            <div className='w-[340px] p-[20px]  group hover:border hover:border-[#808080] cursor-pointer'>
                <div className='image-container pb-[16px]'>
                    <GatsbyImage className='' image={productImagesByPath[productInfo.image]} alt="" />
                </div>
                <div className='details-container w-[192px]'>
                    <div>
                        <p className='text-[20px] leading-[24px] tracking-[3%] mb-[22px]'>{productInfo.title}</p>
                        <p className='text-[16px] leading-[20px] tracking-[3%] mb-[18px]'>{productInfo.heading}</p>
                        <div className='grid grid-cols-2 gap-[16px]'>
                            <div>
                                <span className='text-[14px] leading-[16.71px] tracking-[3%] text-[#888888]'>Voltage&nbsp;&nbsp;</span><span className='text-[#444444]'>{productInfo.voltage}</span>
                            </div>
                            <div>
                                <span className='text-[14px] leading-[16.71px] tracking-[3%] text-[#888888]'>Power&nbsp;&nbsp;</span><span className='text-[#444444]'>{productInfo.power}</span>
                            </div>
                            <div>
                                <span className='text-[14px] leading-[16.71px] tracking-[3%] text-[#888888]'>Speed&nbsp;&nbsp;</span><span className='text-[#444444]'>{productInfo.speed}</span>
                            </div>
                            <div>
                                <span className='text-[14px] leading-[16.71px] tracking-[3%] text-[#888888]'>Weight&nbsp;&nbsp;</span><span className='text-[#444444]'>{productInfo.weight}</span>
                            </div>
                        </div>
                        <button className='opacity-0 group-hover:opacity-100 mt-[30px] py-[12px] px-[20px] rounded-[2px] bg-[#1c1c1c] text-[#fff]'>View Details</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

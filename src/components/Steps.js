import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Steps() {
  return (
    <div className='w-[85%] mx-auto'>
      <div className='grid grid-cols-2'>
        <div className='pr-[92px] py-[150px]'>
          <p className='text-[40px] leading-[48px]'>Design</p>
          <p className='text-[17px] leading-[26px]'>Employing advanced design methodologies and precision
            engineering to create highly efficient and reliable
            BLDC controllers, tailored to meet your specific motor control requirements and optimise system performance.</p>
        </div>
        <div>
          <StaticImage
            src="../images/design.png"
            alt='cog image'
            width={683}
            height={518}
            className='' />
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div>
          <StaticImage
            src="../images/develop.png"
            alt='cog image'
            width={683}
            height={518}
            className='' />
        </div>
        <div className='pl-[92px] py-[150px]'>
          <p className='text-[40px] leading-[48px]'>Develop</p>
          <p className='text-[17px] leading-[26px]'>Precisely manufactured controllers
            tailored to match your design specifications for seamless integration and optimal performance</p>
        </div>

      </div>
      <div className='grid grid-cols-2'>
        <div className='pr-[92px] py-[150px]'>
          <p className='text-[40px] leading-[48px]'>Deliver</p>
          <p className='text-[17px] leading-[26px]'>Streamlined delivery process ensures prompt access
            to controllers for optimised motor systems.</p>
        </div>
        <div>
          <StaticImage
            src="../images/deliver.png"
            alt='cog image'
            width={683}
            height={518}
            className='' />
        </div>
      </div>

    </div>
  )
}

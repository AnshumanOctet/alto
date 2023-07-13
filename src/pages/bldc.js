
import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import data from '../content/data.json'
import Card from '../components/Card'




export default function Bldc() {
  return (
    <Layout backgroundColor='#1C1C1C'>
      <section className='flex justify-center items-center py-16'>
        <div className=''>
          <StaticImage
            src="../images/bldc-lab-wheel.png"
            alt='rotator logo'
            width={685}
            height={625}
            className='bldc-cog-image shadow-[-2px_0_18px_0_rgba(67, 67, 67, 0.25)]' />
        </div>
      </section>
      <section className='relative'>
        <div className='flex justify-end relative right-0 overflow-hidden'>
          <StaticImage
            src="../images/dc-motor-flow.png"
            alt='dc moter flow logo'
            width={823}
            height={273}
            className=' right-[-89px]' />
        </div>
        <div className='text-center items-center relative text-white'>
          <h2 className='mb-8'>Why BLDC?</h2>
          <p className='text-xl '>If you have an old machine, chances are high that you'd need to update it's motor</p>
        </div>
        <div className='grid grid-cols-3 mx-auto gap-8 mt-10 '>
          {
            data.map(info => {
              return (
                <Card cardData={info} />
              )
            })
          }
        </div>
      </section>



    </Layout >
  )
}

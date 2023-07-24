import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

export default function About() {
  return (
    <Layout backgroundColor='' color='#3E3E3E'>
      <section className='relative'>
        <div className="relative top-[200px] z-20">
          <div className='flex items-center justify-center gap-[24px]'>
            <div className='h-[1px] w-[368px] bg-[#E3E3E3]'></div>
            <div className=''>
              <StaticImage
                src="../images/alto-large-icon.png"
                alt='image of alto manufacturing plant'
                width={144}
                height={89}
                className='' />
            </div>
            <div className='h-[1px] w-[368px] bg-[#E3E3E3]'></div>
          </div>
          <div className='w-[536px] mx-auto '>
            <p className='text-[20px] leading-[37px] text-center text-[#3E3E3E]'>
              <span className='text-[#d70000]'>27+</span> years of experience in designing and manufacturing high-quality motors.
            </p>
          </div>
        </div>
        <div className=''>
          <StaticImage
            src="../images/about-us.png"
            alt='image of alto manufacturing plant'
            width={1366}
            height={750}
            className='z-10' />

        </div>
      </section>
      <section className='py-[150px]'>
        <div className='flex flex-col justify-center items-center'>
          <p className='mb-[50px] font-medium text-[40px] leading-[72px] text-[#111111] text-center'>About <span className='text-[#d70000]' >Alto</span></p>
          <StaticImage
            src="../images/alto-a.png"
            alt='image of alto manufacturing plant'
            width={247}
            height={325}
            className='' />
          <p className='text-[#3E3E3E] text-[18px] leading-[26px] text-center lg:w-[964px] mt-[33px]'>
            <span className='text-[#d70000]'>Alto</span> specialises in the production and customisation of Innovative Motor Systems. We're at the forefront of advancing
            Industrial Automation, Automotive, HVAC, Life Science, Textile Sectors and beyond. We're more than just a manufacturer;
            we're a partner dedicated to integrating state-of-the-art BLDC technology in various applications, maximising performance and value.
            Trust <span className='text-[#d70000]'>Alto</span> to power your journey towards efficiency and sustainability.
          </p>
        </div>
      </section>

      <section className='py-[150px]'>
        <div className='grid grid-cols-2 items-center gap-[75px] w-[85%] mx-auto'>
          <div className=' justify-self-start'>
            <p className='font-semibold text-[#e89999] text-[150px] leading-[0px]'>&ldquo;</p>
            <p className='text-[30px] leading-[50px] tracking-[10%] italic hyphen mb-[20px]'>
              At <span className='text-[#d70000]'>Alto</span>, our mission is to elevate industrial standards by integrating and optimising innovative motor technologies.
            </p>
            <p className='font-light text-[16px] leading-[30px] text-[#000000] tracking-[10%]'>With our deep industry experience, we are committed to maximizing value and enhancing performance, thereby driving innovation for a sustainable and efficient future.</p>
          </div>
          <div className='justify-self-end'>
            <StaticImage
              src="../images/at-alto.png"
              alt='image of spare parts'
              width={402}
              height={402}
              className='' />
          </div>
        </div>
      </section>

      <section className='py-[150px] w-[85%] mx-auto'>
        <div className='flex gap-[200px]'>
          <div className='w-[260px]'>
            <h2>Achievements</h2>
            <p className='text-description'>20+ continuous years of continuous growth, highlighting our dedication to innovation and excellence in the motor industry.</p>
          </div>
          <div className='grid grid-cols-2 gap-[50px]'>
            <div className='text-box'>
              <h3 className='mb-[4px]'>
                94%
              </h3>
              <p className='text-description'>On-Time Delivery Rate</p>
            </div>
            <div className='text-box'>
              <h3 className='mb-[4px]'>
                500,00+
              </h3>
              <p className='text-description'>Manufactured and Delivered</p>
            </div>
            <div className='text-box'>
              <h3 className='mb-[4px]'>
                93.98%
              </h3>
              <p className='text-description'>Customer Satisfaction rate</p>
            </div>
            <div className='text-box'>
              <h3 className='mb-[4px]'>
                223+
              </h3>
              <p className='text-description'>Designed and Developed </p>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-[150px]'>
        <div>
          <div className='text-center w-[818px] mx-auto items-center relativ pb-[80px]'>
            <h2 className='mb-[10px]'>Environment</h2>
            <p className='text-xl  '>As a responsible manufacturer, we uphold <span className='text-[22px] leading-[26px] tracking-[3%] text-[#0aad3f]'>Environment</span> safety standards and promote 
            sustainability through the installation of <span className='text-[22px] leading-[26px] tracking-[3%] text-[#0aad3f]'>our rooftop solar panels.</span> </p>
          </div>
          <StaticImage
              src="../images/solar-panal.png"
              alt='solar panal image'
              width={1366}
              height={437}
              className='' />
        </div>

      </section>

      <section className='pt-[150px]'>
        <div>
          <div className='text-center w-[818px] mx-auto items-center relativ pb-[]'>
            <h2 className='mb-[10px]'>Social Responsibility</h2>
            <p className='text-xl '>We prioritize fair labour policies, promoting employee welfare and timely vendor payments to enhance productivity and ensure timely deliveries.</p>
          </div>

          <div className=''>
          <StaticImage
              src="../images/workers.png"
              alt='image of workers climbing'
              width={1366}
              height={500}
              className='' />
          </div>
        </div>

      </section>

      <section className='py-[140px]'>
        <div className='grid grid-cols-2 w-[85%] mx-auto'>
          <div className=' py-[75px] '>
            <p className='text-[30px] leading-[36px]'>
              Get in touch with us to experience the best in motor industry innovation and service.
            </p>
            <button className='cto-btn py-[14px] px-[20px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium mt-[50px] leading-[19.2px]'>
            Enquiry Now &rarr;
            </button>
          </div>
          <div className='pl-[100px]'>
            <StaticImage
              src="../images/about-enquiry.png"
              alt='cog image'
              width={475}
              height={325}
              className='' />
          </div>

        </div>
      </section>
    </Layout>
  )
}

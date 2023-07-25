import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import ReCAPTCHA from "react-google-recaptcha";
import {Map, GoogleApiWrapper} from 'google-map-react';

export default function ContactUs() {
  const onChange = () => {

  }
  return (
    <Layout background='' color='#3E3E3E'>
      <section className='pt-[100px] w-[85%] mx-auto'>
        <div>
          <p className='text-[50px] leading-[55px] mb-[12px]' >
            No Challenge Is Too Big Or Small
          </p>
          <p classname="text-[17px] leading-[36px] tracking-[3%] text-[#3E3E3E]" >Tell us what you need below, or send us an <a className='text-[#3188EE] underline'>email</a> </p>

        </div>

        <div className='pt-[40px] grid grid-cols-2 gap-[64px]'>
          <form action='' className='flex flex-col gap-[20px] form-container'>
            <div>
              <input className='py-[8px] px-[20px] border border-[#D5D5D5] form-input ' type='text' name='username' id='username' placeholder='Name'></input>
            </div>
            <div>
              <input className='py-[8px] px-[20px] border border-[#D5D5D5] form-input ' type='text' name='compnay' id='compnay' placeholder='Company'></input>
            </div>
            <div>
              <input className='py-[8px] px-[20px] border border-[#D5D5D5] form-input ' type='email' name='email' id='email' placeholder='Email ID'></input>
            </div>
            <div>
              <input className='py-[8px] px-[20px] border border-[#D5D5D5] form-input ' type='text' name='phone' id='phone' placeholder='Phone'></input>
            </div>
            <div>
              <select name="interest" id="interest" className='py-[8px] px-[20px] border border-[#D5D5D5] bg-white'>
                <option value="">Interest</option>
                <option value="BLDC Labs">BLDC Labs</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Products">Products</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <textarea className='py-[8px] px-[20px] border border-[#D5D5D5] form-input' placeholder='Requirement description...'>

              </textarea>
            </div>

            <ReCAPTCHA
              sitekey="Your client site key"
              onChange={onChange}
              className='mt-[20px]'
            />

            <div>
              <button className=' py-[14px] px-[20px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium leading-[19.2px]'>
                Send Enquiry &nbsp; &rarr;
              </button>
            </div>

          </form>

          <div className=''>
            <StaticImage
              src="../images/challenge.png"
              alt='image of spare parts'
              width={545}
              height={666}
              className='' />
          </div>

        </div>

        <div className='py-[150px]'>
          <div>
            <p className=' pb-[30px] text-[20px] leading-[22px] text-[#222222]'>Reach Out To Us</p>
            <div className='flex justify-between items-center gap-[60px]'>
              <div className='w-[355px]'>
                <p className='text-[16px] leading-[36px] text-[#555555]'>Address</p>
                <p className='text-[20px] leading-[26px] tracking-[5%] text-[#222222] '>Plot No-1706, Road-N <br />Phase-IV, GIDC Wadhwan-363035<br /> Gujarat, India</p>
              </div>
              <div className='w-[355px]'>
                <p className='text-[16px] leading-[36px] text-[#555555]'>Phone</p>
                <p className='text-[20px] leading-[26px] tracking-[5%] text-[#222222]'>+91 2752 - 243351 <br /> +91 2752 - 243351</p>
              </div>
              <div className='w-[355px]'>
                <p className='text-[16px] leading-[36px] text-[#555555]'>Email</p>
                <p className='text-[20px] leading-[26px] tracking-[5%] text-[#222222]'>info@mototechnika.in</p>
              </div>
            </div>
          </div>
          <div className='mt-[40px]'>
            <p className='text-[16px] leading-[36px] text-[#555555]'>Logistic Connectivity</p>
            <div className='text-[#222222] flex justify-between items-center gap-[60px]'>
              <div className='w-[355px]'>
                <p className='font-medium text-[18px] leading-[23.4px] tracking-[5%] mb-[10px] '>Ahmedabad International Airport</p>
                <p className='text-[20px] leading-[26px] tracking-[5%]'>140KM</p>
              </div>
              <div className='w-[355px]'>
                <p className='font-medium text-[18px] leading-[23.4px] tracking-[5%] mb-[10px] '>Kandla/Mundla Port</p>
                <p className='text-[20px] leading-[26px] tracking-[5%]'>270KM</p>
              </div>
              <div className='w-[355px]'>
                <p className='font-medium text-[18px] leading-[23.4px] tracking-[5%] mb-[10px] '>JNPT Port</p>
                <p className='text-[20px] leading-[26px] tracking-[5%]'>670 KM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='my-[130px]'>
         
      </section>
    </Layout>
  )
}


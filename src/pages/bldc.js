
import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { getImage } from "gatsby-plugin-image";
import { Link, graphql, useStaticQuery } from "gatsby";
import data from "../content/data.json"
import Card from '../components/Card'
import Steps from '../components/Steps'
// import controller from "../content/controller.json"




export default function Bldc() {

  const imageData = useStaticQuery(graphql`
        query {
            data: allFile(
            filter: {
              relativePath: { regex: "/^()/" }
            }
          ) {
            edges {
              node {
                relativePath
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
    `);

  const imagesByPath = {};
  imageData.data.edges.forEach(({ node }) => {
    const imagePath = node.relativePath;
    const imageData = getImage(node.childImageSharp);
    imagesByPath[imagePath] = imageData;
  });
  return (
    <Layout background='#1C1C1C' color='#ffffff'>

      <section className='flex justify-center items-center py-[70px]'>
        <div className=''>
          <StaticImage
            src="../images/bldc-lab-wheel.png"
            alt='rotator logo'
            width={685}
            height={625}
            className='bldc-cog-image shadow-[-2px_0_18px_0_rgba(67, 67, 67, 0.25)]' />
        </div>
      </section>
      <section className='relative py-16'>
        <div className='flex justify-end relative right-0 overflow-hidden'>
          <StaticImage
            src="../images/dc-motor-flow.png"
            alt='dc moter flow logo'
            width={823}
            height={273}
            className=' right-[-89px]' />
        </div>
        <div className='text-center items-center relativ'>
          <h2 className='mb-[30px]'>Why BLDC?</h2>
          <p className='text-xl '>If you have an old machine, chances are high that you'd need to update it's motor</p>
        </div>
        <div className='grid grid-cols-3 mx-auto gap-8 mt-10 justify-center w-[85%] '>
          {

            data.map((info, index) => (
              <Card cardData={info} key={index} imagesByPath={imagesByPath} />
            ))
          }
        </div>
      </section>

      <section className='py-[70px] '>
        <div className='flex justify-between items-center'>
          <div className=''>
            <StaticImage
              src="../images/cog-left.png"
              alt='cog image'
              width={243}
              height={611}
              className='' />
          </div>
          <div className=''>
            <div className='mb-[30px] flex justify-center items-center text-[#ffffff] gap-[20px]'>
              <h2>BLDC</h2>
              <span className='text-[30px] leading'>X</span>
              <StaticImage
                src="../images/altoLogoActive.png"
                alt='cog image'
                width={74}
                height={42}
                className='' />
            </div>
            <p className='text-xl text-[#ffffff] leading-8 '>We are exactly who you need your BLDC motors from, and her's why</p>
          </div>
          <div className=''>
            <StaticImage
              src="../images/cog-right.png"
              alt='cog image'
              width={196}
              height={611}
              className='' />
          </div>

        </div>

      </section>

      <section className='py-[70px] w-[85%] mx-auto'>
        <div className='flex gap-[200px]'>
          <div className='w-[260px]'>
            <h2>Alto For BLDC</h2>
            <p className='text-description'>Alto offers a wide range of customisable options help you select right motor and controller to bring a significant change for your product </p>
          </div>
          <div className='grid grid-cols-2 gap-[100px]'>
            <div className='text-box'>
              <h3 className='mb-[20px]'>
                1. Choice
              </h3>
              <p className='text-description'>BLDC is relatively new technology in market but a powerful one. We help you to select right motor. </p>
            </div>
            <div className='text-box'>
              <h3 className='mb-[20px]'>
                2. Custom
              </h3>
              <p className='text-description'>If none of our product meet your requirement, we can help you build custom motor</p>
            </div>
            <div className='text-box'>
              <h3 className='mb-[20px]'>
                3. Controllers
              </h3>
              <p className='text-description'>Controllers are an important part of BLDC motor, controller decides what can be harnessed from BLDC motor. </p>
            </div>
            <div className='text-box'>
              <h3 className='mb-[20px]'>
                4. Efficiency
              </h3>
              <p className='text-description'>Alto will optimise to harness its full potential for your application and does deliver value for your customer. </p>
            </div>
          </div>

        </div>
      </section>

      <section className='bg-[#141414] py-[150px]'>
        <div className='text-center items-center relativ pb-[150px]'>
          <h2 className='mb-[30px]'>Our Controller Labs</h2>
          <p className='text-xl '>Empowering Motor Control Solutions: Journey into Our Pioneering Controller Labs. </p>

        </div>
        <div>
          <Steps />
        </div>
      </section>

      <section className='pt-[150px]'>
        <div className='text-center items-center relativ pb-[65px]'>
          <h2 className='mb-[30px]'>Research</h2>
          <p className='text-xl '>Advancing the industry with cutting-edge research and development.</p>
          <button className='cto-btn py-[14px] px-[20px] rounded-[2px] bg-white text-[#1C1C1C] hover:bg-[#D9D9D9] transition ease-in-out duration-400 text-[16px] font-medium mt-[30px] leading-[19.2px]'>
            Join Our Team
          </button>
        </div>
        <div className='w-[100%] mx-auto'> 
          <StaticImage
            src="../images/research.png"
            alt='cog image'
            width={1366}
            height={366}
            className='' />
        </div>

      </section>

      <section className='py-[140px]'>
        <div className='grid grid-cols-2 w-[85%] mx-auto'>
          <div className=' py-[75px] '>
            <p className='text-[30px] leading-[36px]'>
              Get in touch with us to experience the best in motor industry innovation and service.
            </p>
            <Link to='/contactUs' className='cursor-pointer inline-block cto-btn py-[14px] px-[20px] rounded-[2px] bg-white text-[#1C1C1C] hover:bg-[#D9D9D9] transition ease-in-out duration-400 text-[16px] font-medium mt-[50px] leading-[19.2px]'>
              Enquiry Now &rarr;
            </Link>
          </div>
          <div className='pl-[100px]'>
            <StaticImage
              src="../images/best-exp.png"
              alt='cog image'
              width={475}
              height={325}
              className='' />
          </div>

        </div>
      </section>




    </Layout >
  )
}

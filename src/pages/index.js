import * as React from "react"
import Layout from "../components/Layout"
import bgImage from '../images/home-bg.png'
import swiperItems from "../content/swiper.json"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'
import homeData from "../content/homeData.json"
import application from "../content/application.json"
import Marquee from "react-fast-marquee";
import video_1 from "../videos/video_1.mp4"
import { StaticImage } from "gatsby-plugin-image"





const IndexPage = () => {

  const swiperImage = useStaticQuery(graphql`
        query {
          swiperItems: allFile(
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


  const swiperImagesByPath = {};
  swiperImage.swiperItems.edges.forEach(({ node }) => {
    const imagePath = node.relativePath;
    const swiperImage = getImage(node.childImageSharp);
    swiperImagesByPath[imagePath] = swiperImage;
  });

  return (
    <Layout background={bgImage} >
      <section className="w-[85%] mx-auto py-[150px]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            swiperItems.map((info, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <div className="grid grid-cols-2 items-center justify-between">
                    <div>
                      <h1 className="font-normal text-[90px] leading-[99px] text-[#333333] mb-[45px]">{info.title}</h1>
                      <p className="font-normal text-[18px] leading-[28px] tracking-[3%] text-[#5a5a5a]">{info.description}</p>
                    </div>
                    <div>
                      <GatsbyImage className='' image={swiperImagesByPath[info.image]} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }

        </Swiper>
      </section>

      <section className="">
        {
          homeData.map((info, index) => (
            <div className={`grid grid-cols-2 grid-flow-dense item-container  ${info.id % 2 === 0 ? 'even' : 'odd'} `}>
              <div className="text-info bg-[#fafafa] items flex flex-col justify-center items-center ">
                <h2 className="text-[40px] leading-[48px] tracking-[1.5%] mb-[50px] ">{info.title}</h2>

                {
                  info.description.map((item, index) => (
                    <p className="mb-[25px] text-[17px] leading-[26px] tracking-[.51px] text-[#3e3e3e]">{item}</p>
                  ))
                }
              </div>
              <div className="image-info ">
                <video autoPlay loop className="w-[686px] h-[768px]">
                  <source src={video_1} type="video/mp4" />
                </video>
              </div>

            </div>
          ))
        }

      </section>

      <section className="why-alto flex justify-start items-center">
        <div className=" pl-[100px] py-[100px] text-[#ffffff]">
          <h2 className=" font-semibold text-[40px] leading-[72px] tracking-[1.5%] mb-[30px]">Why Alto?</h2>
          <p className="max-w-[574px] text-[20px] leading-[26px] tracking-[3%] mb-[20px]"><span className="text-[#D70000]">Alto</span> has been designing and producing motors for more than <span className="text-[#d70000]">27+ years</span>, and we have established ourselves as the reliable and trustworthy supplier in our country.</p>
          <ul className="why-alto-text list-disc ml-[36px]">
            <li>Superior performance with unmatched quality and reliability.</li>
            <li>Tailored solutions for your unique requirements and challenges.</li>
            <li>Industry-leading expertise for reliable and innovative solutions. </li>
            <li>On-time delivery to meet your project timelines.</li>
            <li>Dedicated support for a seamless customer experience.</li>
          </ul>
        </div>
      </section>

      <section className="py-[130px]">
        <div className='text-center  w-[85%] mx-auto'>
          <h2 className='mb-[10px]'>Applications</h2>
          <p className='text-xl '>Discover Our Diverse Range of Applications for Our Reliable BLDC Motors</p>
        </div>
        <div className="mt-[80px]">

          {
            application.map((info, index) => (
              <Marquee className="" direction={`${info.id % 2 === 0 ? 'left' : 'right'}`}>

                <ul className={`flex ${info.id % 2 === 0 ? 'even' : 'odd'} mb-[30px] gap-[60px] application-ul `}>
                  {
                    info.description.map((item, index) => (
                      <div className="flex items-center gap-[50px]">
                        <li className={"text-[50px] leading-[60px] tracking-[1.5%] font-extralight text-center text-[#6c6c6c]"}>{`${item}`}</li>
                        <li className="text-[50px] leading-[60px] tracking-[1.5%] font-extralight text-center text-[#6c6c6c]">-</li>
                      </div>

                    ))
                  }
                </ul>
              </Marquee>
            ))
          }
        </div>
      </section>

      <section className='py-[150px] bg-[#FAFAFA]'>
        <div className='grid grid-cols-2 justify-items-end w-[85%] mx-auto'>
          <div className=' py-[75px] '>
             
            <p className='text-[30px] leading-[36px] text-[#1c1c1c]'>
            Get in touch with us to experience the best in motor industry innovation and service.
            </p>
            <button className='cto-btn py-[14px] px-[20px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium mt-[30px] leading-[19.2px]'>
              Enquiry Now &nbsp; &rarr;
            </button>
          </div>
          <div className=''>
            <StaticImage
              src="../images/get-in-touch.png"
              alt='machine customization image'
              width={458}
              height={305}
              className='' />
          </div>

        </div>

      </section>




    </Layout>


  )
}



export default IndexPage




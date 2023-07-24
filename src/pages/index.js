import * as React from "react"
import Layout from "../components/Layout"
import bgImage from '../images/home-bg.png'
import swiperItems from "../content/swiper.json"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';

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
    </Layout>


  )
}



export default IndexPage




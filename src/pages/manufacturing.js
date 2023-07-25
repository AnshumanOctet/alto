import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import items from "../content/items.json"
import { getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import Items from '../components/Items';


export default function Manufacturing() {

  const itemsImage = useStaticQuery(graphql`
        query {
            items: allFile(
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

  const itmesImagesByPath = {};
  itemsImage.items.edges.forEach(({ node }) => {
    const imagePath = node.relativePath;
    const itemsImage = getImage(node.childImageSharp);
    itmesImagesByPath[imagePath] = itemsImage;
  });
  const manufacture_Item = items.filter((item) => item.id === 1 || item.id === 2);
  const scale_Item = items.filter((item) => item.id !== 1 && item.id !== 2);

  return (
    <Layout background='#F5F5F5' color='#3E3E3E'>
      <section className='mb-[375px]'>
        <div className='text-center items-center w-[85%] mx-auto mt-[250px] mb-[170px]'>
          <h2 className='mb-[10px]'>Manufacturing</h2>
          <p className='text-xl '>Manufacturing Motors with a Focus on Quality and Innovation</p>
        </div>
        <div className='w-[100%]'>
          <StaticImage
            src="../images/manufactoring.png"
            alt='image of spare parts'
            width={1600}
            height={159}
            className='' />
        </div>
      </section>

      <section className=''>
        <div className=''>

          {
            manufacture_Item.map((info, index) => (
              <Items itemsInfo={info} key={index} itmesImagesByPath={itmesImagesByPath} />
            ))
          }
        </div>
      </section>

      <section>
        <div className='text-center lg:w-[900px] mx-auto items-center pt-[250px] pb-[170px]'>
          <h2 className='mb-[10px]'>Support at all scales</h2>
          <p className='text-xl  '>Whether you are a small business or a large corporation, we are here to help. We offer support at all scales, from providing
            custom solutions for individual clients to mass production for large-scale operations.</p>
          <button className='cto-btn py-[14px] px-[20px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium mt-[15px] leading-[19.2px]'>
            Explore Our Products &nbsp; &rarr;
          </button>
        </div>

      </section>

      <section className="bg-[#F5F5F5]">
        <div className=''>
          {
            scale_Item.map((info, index) => (
              <Items itemsInfo={info} key={index} itmesImagesByPath={itmesImagesByPath} />
            ))
          }
        </div>

      </section>


      <section className='pt-[240px] pb-[150px] bg-[#F5F5F5]'>
        <div className='grid grid-cols-2 gap-[52px] w-[85%] mx-auto'>
          <div className=' py-[75px] '>
            <h2>Customization</h2>
            <p className='text-[17px] leading-[26px] tracking-[3%] text-[#3e3e3e]'>
            We understand that each client has unique requirements, which is why we offer customization services. Our team works closely with clients to design and produce motors that meet their specific needs and requirements.

            </p>
            <button className='cto-btn py-[14px] px-[20px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium mt-[30px] leading-[19.2px]'>
              Place an enquiry &nbsp; &rarr;
            </button>
          </div>
          <div className='border-2 border-[#0072DB]'>
            <StaticImage
              src="../images/customization.png"
              alt='machine customization image'
              width={640}
              height={452}
              className='' />
          </div>

        </div>

      </section>

      <section className='py-[150px] bg-white'>
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

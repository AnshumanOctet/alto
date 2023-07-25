import React, { useState } from 'react'
import Layout from '../components/Layout'
import productItem from "../content/product.json"
import { Link, graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar'


export default function Product() {


  const [items, setItem] = useState(productItem);

  const filterProduct = (cateItem) => {
    if (cateItem === "All Products") {
      setItem(productItem);
    }
    else {

      const updatedItem = productItem.filter((currItem) => {
        return currItem.category === cateItem;
      });
      setItem(updatedItem);
    }

  }

  console.log(items)
  const productImage = useStaticQuery(graphql`
        query {
          productItem: allFile(
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

  const productImagesByPath = {};
  productImage.productItem.edges.forEach(({ node }) => {
    const imagePath = node.relativePath;
    const productImage = getImage(node.childImageSharp);
    productImagesByPath[imagePath] = productImage;
  });




  const productCategory = ['All Products', 'BLDC Motors', 'Induction Motors', 'BLDC Driver', 'Accessories']



  return (
    <div className=''>
      <div className='product-bg pt-8'>
        <Navbar/>
        <section>
          <div className='text-center items-center w-[85%] mx-auto mt-[100px] pb-[100px]'>
            <h2 className='mb-[10px]'>Products</h2>
            <p className='text-xl '>Get in touch with us to experience the best in motor industry innovation and service.</p>
          </div>
        </section>
      </div>

      <section className=''>
        <div className='w-[85%] mx-auto flex gap-[24px] mb-[40px] pt-[80px]'>
          {
            productCategory.map((info, index) => (
              <button onClick={() => filterProduct(`${info}`)}
                className='px-[20px] py-[12px] rounded-[2px] border border-[#dfdfdf] focus:border-[#666666]
            text-[#444444] text-[20px] leading-[24px] tracking-[3%]'>
                {info}
              </button>
            ))
          }

        </div>

        <div className='w-[85%] mx-auto grid grid-cols-3 gap-x-[50px] gap-y-[60px] mb-[150px] '>
          {
            items.map((info, index) => (
              <ProductCard productInfo={info} key={index} productImagesByPath={productImagesByPath} />
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
            <Link to="/contactUs" className='inline-block cto-btn py-[14px] px-[20px] rounded-[2px] text-[#ffffff] bg-[#1C1C1C] hover:bg-[#404040] transition ease-in-out duration-400 text-[16px] font-medium mt-[30px] leading-[19.2px]'>
              Enquiry Now &nbsp; &rarr;
            </Link>
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

    </div>


  )
}

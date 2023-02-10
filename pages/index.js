import React from 'react'

import { client } from '@/lib/client'
import { Product, FooterBanner, HeroBanner, Footer } from '@/components'

export default function Home({products, bannerData}) {

  

  return (
    <>
      <HeroBanner heroBanner={bannerData.length  && bannerData[0] }/>
     

      <div className='products-heading'>
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>


      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}



export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // const products = await product.json();
  // const bannerData = await banner.json();

  return {
    props:{products, bannerData}
  }
}
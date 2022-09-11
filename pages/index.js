import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import styles from '../styles/Home.module.css'
import data from '../utils/data'
import React, {useState, useEffect} from 'react'

export default function Home() {

  return (
    <div>
       <Layout title={"Home pagos"}>
        <h2 className='texte-center mt-5 mb 5'>Pagos</h2>
         <div className='container'>
           <div className='row row-cols-1 row-cols-md-2 g-4'>
             {
              data.products.map((product)=> (
                <ProductItem key={product.slug} product={product} />
              ))
             }
           </div>

         </div>
       </Layout>
      
        
    </div>
  )
}

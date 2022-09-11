import React from 'react'
import Link from 'next/link'


// ACA ESTA LO QUE SE VA A RENDERIZAR , IMAGEN , BOTONES CON LINKS ETC.  
const ProductItem = ({product}) => {

//L O C A L  S T O R A G E 
// const [ pays, setPays]= React.useState()
    
// React.useEffect(()=> {
//  const data= localStorage.getItem("keypays",JSON.parse(data))
//  if(data){
//   setPays(data)
//  }
// },[])

// React.useEffect(()=> {
//   localStorage.setItem("keypays", JSON.stringify(this.pays))
// })

  return (
    <div>
        <div className='col'>
            <div className='card'>
               <img src={product.image} alt='' className='imagen-card'/>
               <div>
                <h5>{product.name}</h5>
                {/* <p>{product.category}</p>
                <p>{product.price}</p> */}
                <Link href={`/product/${product.slug}`}>
                <a><button className='btn btn-primary'>Ver detalle</button></a>
                </Link>
               </div>
            </div>
        </div>
    </div>
  )
}

export default ProductItem

//slug  sintaxis de next para enrrutamiento dinamiedoc
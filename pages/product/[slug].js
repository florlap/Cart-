import React , {useContext} from 'react'
import { useRouter } from 'next/router'  // me permite destructurar la info que viene del enrutarmiento
import data from '../../utils/data'
import Layout from '../../components/Layout'
import { Store } from '../../utils/store'

 /// FUNCION DE PAGOS
 // ACA VA LA LOGICA DE LO QUE SE VA A RENDERIZAR LA INFO DE LA URL
export default function ProductScreem() {


   //inicia el estado 
    const {state, dispatch} = useContext(Store)         //se usa el estado para saber que tiene el carrito, q la despache al store

    const router = useRouter()
    const { query }= useRouter() // la query sria el slug o id (el prod  especifico)
    const { slug }= query

    // para buscar en nuestra api local 
    const product = data.products.find(x => x.slug === slug)
    if(!product){
        return <div>No existe </div>
    }

    

    //Funcion para agregar al carrito 
    const addToCartHandler = ()=> {
      const existItem = state.cart.cartItems.find(x => x.slug === product.slug)
      const quantity = existItem ? existItem.quantity  : 1 /// la cantidad que se agrega en el carrito 
      if(existItem){
        alert("No se puede agregar el mismo pago")
        return
      }
       dispatch({type: 'CART_ADD_ITEM', payload:{...product, quantity}})
       router.push('/cart')
    }    


  return (
    <div>
      <Layout title= "product single page">
       <h2 className='text-center mt-5 mb-5'> Seccion de pagos</h2>
       <div className='container'>
        <button className='btn btn-primary mb-4' onClick={()=>router.push('/')}>ir al inicio</button>  
        <div className='card mb-3 maximo-card'>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img src={product.image} className='img-fluid rounded-start' alt=''/>
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{product.name}</h5>
                        <p>
                            <br/>
                            {product.description }
                        </p>
                        {/* <p>{product.countInStock > 0 ? "En stock" :"stock no disponible"}</p> */}
                        <button className='btn btn-primary' onClick={addToCartHandler}>Pagar</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
      </Layout>
    </div>
  )
}


//Img ={product }  para que se renderice
// Boton  ir a pagos y luego me voy a crear el store centralizado dentro de la carp utils,  para hacer la logica de agregar al carrito a traves


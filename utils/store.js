import {useReducer, createContext} from 'react'

                    ///STORE CENTRALIZADO DE LA APP ///

export const Store = createContext()
// el estado inicial de nuestra aplicacion o variable de estado 

const initialState = {
    cart: {
        cartItems: []
    }
}



// funcion reductora donde crea la logica funcional 
function reducer(state, action){
 
     switch (action.type) {
        case 'CART_ADD_ITEM':{
            const newItem = action.payload
            const existItem = state.cart.cartItems.find(item => item.slug === newItem.slug)

            // una condicion para actualizar  si existe el item  o guardar si no existe .... (si ya seleccione el item)
            const cartItems = existItem ? state.cart.cartItems.map(item => item.name === existItem)  
            //de los contrario si no existe, guardO el primero
            : [...state.cart.cartItems, newItem]
            return {...state, cart:{...state.cart, cartItems}}
        }

        case 'CART_REMOVE_ITEM': {
            const cartItems = state.cart.cartItems.filter(item => item.slug !== action.payload.slug)
            return {...state, cart:{...state.cart, cartItems}}
        }
        default: return state;
        
    }
}  

//funcion para crear el store y envolver a los comp hijos 
export function StoreProvider ({children}){
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>{children}</Store.Provider>
}





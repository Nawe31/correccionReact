import React from 'react'
import Button from '../Button/Button';
import { useCartContext } from "../../storage/cartContext";
import { clear } from '@testing-library/user-event/dist/clear';

function CartContainer() {
  const{ cart,removeItem,getTotalPriceInCart,clear} = useCartContext();
  
  console.log(cart.lenght);
    return (
        <div>
  {cart.map(ItemInCart =>(
    <div>
<h2>{ItemInCart.title}</h2>
<h4>{ItemInCart.price}</h4>
<h4>{ItemInCart.count}</h4>
    <Button onClick={()=>removeItem(ItemInCart)} color="red">X</Button>
    
    
    <Button> Finalizar Compra</Button>
  <Button onClick={()=>clear(ItemInCart)} > Vaciar Carrito</Button>
    </div> 

    
  ))}
  <p>El total de tu compra es ${getTotalPriceInCart()}</p>
   <Button> Finalizar Compra</Button>
  </div>



  )
}

export default CartContainer;
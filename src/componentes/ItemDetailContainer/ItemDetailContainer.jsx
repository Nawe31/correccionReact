import React, {useState, useEffect,useContext} from 'react'
import { obtenerProduct } from '../../service/firebaje';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../storage/cartContext';

function ItemDetailContainer() {
    const [Product, setProduct] = useState({tittle:"cargando.."});
   const [isInCart,setIsInCart]= useState(false)


     let params = useParams(); 
     const { addToCart } = useContext(cartContext);

     function handleAddToCart(count){
      setIsInCart(true);
     const ProductAndCount = {...Product, count:count}
      addToCart(ProductAndCount);
     }
     

    useEffect(()=>{
      obtenerProduct(params.itemid).then((respuesta)=>{
        setProduct(respuesta)
      })
      .catch((error)=> alert(error));
    },)
    
    
    
    return(
        <ItemDetail
        isInCart={isInCart}
        onAddToCart={handleAddToCart}
         tittle={Product.tittle}
         img={Product.img}
         price={Product.price} 
         detail={Product.detail}/>

     );
}

export default ItemDetailContainer
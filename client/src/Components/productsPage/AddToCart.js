import { useEffect} from 'react';
import { useCartContext } from '../../Context/Cart_Context';
import { useProductContext } from '../../Context/ProductContext';

const AddToCart = ({pid}) => {

  const url = `https://gleaming-pink-stole.cyclic.app/api/products?pid=${pid}`;

    const {addToCart, cart} = useCartContext();
    let { singleProduct, getSingleProduct } = useProductContext();

    const handleClick = async () => {
        await getSingleProduct(url);
        console.log( await cart , "cart");
    }

    let { name, price, image } = singleProduct[0];

    
    useEffect(() => {
      addToCart( name , price , image );
    },[ singleProduct[0] ])

  return (
    <>
        <button onClick={ () => { handleClick();}} className="btn btn-primary btn-block">Add to Enquiry</button>
    </>
  )
}

export default AddToCart;
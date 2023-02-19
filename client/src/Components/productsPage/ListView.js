// import { useProductContext } from '../../Context/ProductContext';
import FormatPrice from '../../Helpers/FormatPrice';
import AddToCart from './AddToCart';
import { Link } from 'react-router-dom';
// const API = "https://gleaming-pink-stole.cyclic.app/api/products";

const ListView = ({products}) => {

    // const { singleProduct , getSingleProduct } = useProductContext();

    // useEffect(() => {
    //     getSingleProduct(`${API}?pid=${pid}`);
    //   }, []);

  return (
    <>
    
        <div className='container my-5'>
        {products.map((curElem) => {
            const {pid, name ,image , price, city} = curElem;

            return (
                <div className='container grid grid-two-column' key={pid}>
                <Link to={`/singleproduct/${pid}`}>
                    <figure>
                        <img src={image} alt={name}/>
                    </figure>
                </Link>
                    <div className='card-data'>
                        <h3>{name}</h3>
                        <p><FormatPrice price={price}/></p>
                        <p>{city}</p>
                        <AddToCart pid={pid} />
                    </div>
                </div>

            );
        })}

        </div>
    </>
  )
}

export default ListView
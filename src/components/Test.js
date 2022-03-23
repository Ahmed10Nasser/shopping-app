import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getProducts } from '../redux/actions/getProducts';

const Test = () => {
  const products=useSelector(store=>store.products.values);
  const isLoading=useSelector(store=>store.products.isLoading);
  const error=useSelector(store=>store.products.error);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);

  return (
    <div className="container row">
      {isLoading && 
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
      {error &&
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      
      }
      {!isLoading && !error &&
        products.map((product) =>(
        <ul className="list-group col-sm" key={product.id}>
            <li className="list-group-item">{product.title}</li>
            <li className="list-group-item">{product.price}</li>
            <li className="list-group-item">{product.category}</li>
            <li className="list-group-item">{product.description}</li>
            <li className="list-group-item container"><img src={product.image} alt="" className="img-fluid" /></li>
        </ul>
        ))
      }
    </div>
);
}
 
export default Test;
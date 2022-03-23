import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getProducts } from '../redux/actions/getProducts';
import  {Button, Alert} from "react-bootstrap"
import { logout } from '../redux/actions/auth';
import { useNavigate } from 'react-router';


const Test = () => {
  const products=useSelector(store=>store.products.values);
  const isLoading=useSelector(store=>store.products.isLoading);
  const error=useSelector(store=>store.products.error);
  const uid=useSelector(store=>store.user.userId);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    if(!uid){
      navigate("/login");
    }
  },[uid]);

  const errorLout=useSelector(store=>store.user.error);
  const isLoadingLout=useSelector(store=>store.user.isLoading);



  function handleClick(e){
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <div className="container row">
      {errorLout && <Alert variant="danger">{errorLout}</Alert>}
      <Button disabled={isLoadingLout} className="w-100  mt-3"
        onClick={handleClick}
      >
        Log out
      </Button>

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
import { useEffect, useRef, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import  {Button, Alert, Card} from "react-bootstrap"
import { logout } from '../redux/actions/auth';
import { useNavigate,Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/cart';
import Filter from './Filter';


const Home = () => {
  const products=useSelector(store=>store.products.values);
  const isLoading=useSelector(store=>store.products.isLoading);
  const error=useSelector(store=>store.products.error);
  const uid=useSelector(store=>store.user.userId);
  const dispatch=useDispatch();
  const navigate=useNavigate();


  const [filteredProducts, setFilteredProducts]=useState(products);
  const categoryRef=useRef("");
  const mxPriceRef=useRef("");
  const mnRatingRef=useRef("");



  
  function filter(){
    const category=categoryRef.current.value;
    const mxPrice=mxPriceRef.current.value;
    const mnRating=mnRatingRef.current.value;

    const temp=[];
    for(const product of products){
      if((category=="" || category==product.category)  && (mxPrice=="" || product.price<=mxPrice)  && (mnRating=="" || product.rating.rate>=mnRating)){
        temp.push(product);
      }
    }
    setFilteredProducts(temp);
  }


  useEffect(()=>{
    if(!uid){
      navigate("/login");
    }
  },[uid]);

  const errorLout=useSelector(store=>store.user.error);
  const isLoadingLout=useSelector(store=>store.user.isLoading);

  return (
    <div className="container row">
      {errorLout && <Alert variant="danger">{errorLout}</Alert>}
      <Button disabled={isLoadingLout} className="w-100  mt-3"
        onClick={()=>dispatch(logout())}
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

      <Link to="/cart">Cart</Link>

      <Filter 
        categoryRef={categoryRef} 
        mxPriceRef={mxPriceRef}
        mnRatingRef={mnRatingRef}
        filter={filter}
      ></Filter>

      {!isLoading && !error &&
        filteredProducts.map((product) =>(
          <Card style={{ width: '20rem'}} key={product.id} className="m-3 mh-">
            <Card.Img variant="top" src={product.image} alt={product.title} className="img-fluid p-3" style={{ maxHeight: '18rem'}}/>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
              {parseInt(product.price)+'\n\n'}{product.category}
              </Card.Text>
              <Button variant="primary"
                onClick={()=>dispatch(addToCart(product))}
              >Add to Cart</Button>
            </Card.Body>
          </Card>

        ))
      }
    </div>
  );
}
 
export default Home;
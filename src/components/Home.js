import { useEffect, useRef, useState } from 'react';
import {useSelector} from 'react-redux';
import  {Alert, Spinner, Container} from "react-bootstrap"
import Filter from './Filter';
import ProductCard from './ProductCard';


const Home = () => {
  const products=useSelector(store=>store.products.values);
  const isLoading=useSelector(store=>store.products.isLoading);
  const error=useSelector(store=>store.products.error);

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
      if((category==="" || category===product.category)  && (mxPrice==="" || parseInt(product.price)<=mxPrice)  && (mnRating==="" || product.rating.rate>=mnRating)){
        temp.push(product);
      }
    }
    setFilteredProducts(temp);
  }


  useEffect(()=>{
    setFilteredProducts(products);
  },[products]);


  return (
    <Container className="row">

      <Filter 
        categoryRef={categoryRef} 
        mxPriceRef={mxPriceRef}
        mnRatingRef={mnRatingRef}
        filter={filter}
      ></Filter>

      {isLoading && 
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }
      {error && <Alert variant="danger my-2">{error}</Alert>}


      {!isLoading && !error &&
        filteredProducts.map((product) =>(
          <ProductCard product={product} key={product.id}></ProductCard>
        ))
      }
    </Container>
  );
}
 
export default Home;
import { Container} from "react-bootstrap";
import { useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductPreview = () => {
  const {id}=useParams();
  const product=useSelector(store=>store.products.values[id-1]);
  
  return (
    <Container className="row align-items-center">
          <ProductCard product={product}></ProductCard>
        <div className="col-md mb-5">
          {product.description}
        </div>
    </Container>
  );
}
 
export default ProductPreview;
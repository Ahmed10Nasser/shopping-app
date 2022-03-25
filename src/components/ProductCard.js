import { Card,Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {Link,useNavigate} from "react-router-dom";
import { addToCart } from "../redux/actions/cart";

const ProductCard = ({product}) => {
  const uid=useSelector(store=>store.user.userId);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  return (
    <Card style={{ width: '20rem'}}  className="m-3 " key={product.id}>
      <Link  to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.image} alt={product.title} className="img-fluid p-3" style={{ maxHeight: '18rem'}}/>
      </Link>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
          <div className="row">
            <div className="h7 col">{product.category} </div>
            <div className="h7 col" dir="rtl">{"Rating: "}{product.rating.rate}{"/5"}</div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <Button variant="" className="btn btn-outline-secondary"
                onClick={()=>{
                  if(uid){
                    dispatch(addToCart(product))
                  }
                  else{
                    navigate("/login")
                  }
                }}
              >Add to Cart</Button>
            </div>
            <div className="h5 col" dir="rtl">{"$"}{parseInt(product.price)}</div>
          </div>
      </Card.Body>
    </Card>
  );
}
 
export default ProductCard;
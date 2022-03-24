import { Container,Card,Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from 'react';
import { useNavigate, useParams } from "react-router";
import { addToCart } from "../redux/actions/cart";

const ProductPreview = () => {
  const {id}=useParams();
  const product=useSelector(store=>store.products.values[id-1]);
  const uid=useSelector(store=>store.user.userId);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    if(!uid){
      navigate("/login");
    }
  },[uid]);

  return (
    <Container>
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
    </Container>
  );
}
 
export default ProductPreview;
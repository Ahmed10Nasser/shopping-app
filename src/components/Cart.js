import { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adjustQuantity, clearCart, removeFromCart } from "../redux/actions/cart";
import {Link, useNavigate} from "react-router-dom"

const Cart = () => {

  const totalPrice=useSelector(store=>store.cart.totalPrice);
  const count=useSelector(store=>store.cart.count);
  const productsInCart=useSelector(store=>store.cart.products);
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
        <div className="alert alert-primary" role="alert">
         {totalPrice}
        </div>
        <div className="alert alert-primary" role="alert">
         {count}
        </div>
        <Link to="/">Home</Link>
        <Button variant="danger"
                onClick={()=>dispatch(clearCart())}
        >Clear Cart</Button>
      {
        productsInCart.map((product)=>(
          <Card style={{ width: '20rem'}} key={product.id} className="m-3 mh-">
            <Card.Img variant="top" src={product.image} alt={product.title} className="img-fluid p-3" style={{ maxHeight: '18rem'}}/>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {parseInt(product.price)}
              </Card.Text>
              <Card.Text>
                {product.category}
              </Card.Text>
              <input className="form-control" type="number" min="1" defaultValue={product.quantity}
                onChange={(e)=>dispatch(adjustQuantity(product.id, parseInt(e.target.value)))}
              
              />
              <Button variant="danger"
                onClick={()=>dispatch(removeFromCart(product.id))}
              >Remove from Cart</Button>
            </Card.Body>
          </Card>
        ))
      }
    </Container>
  );
}
 
export default Cart;
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
    <Container className="row justify-content-between">
      <div className="col-md-9 row mt-2">
        {
        productsInCart.map((product)=>(
          <Card style={{ width: '20rem'}}  className="m-3" key={product.id}>
            <Link  to={`/product/${product.id}`}>
              <Card.Img variant="top" src={product.image} alt={product.title} className="img-fluid p-3" style={{ maxHeight: '18rem'}}/>
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
                <div className="row my-3 align-items-center">
                  <div className="col-9">
                    <div className="input-group ">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Quantity</span>
                      </div>
                      <input type="number" className="form-control" placeholder="Adjust"
                        defaultValue={product.quantity} min="1"
                        onChange={(e)=>dispatch(adjustQuantity(product.id, parseInt(e.target.value)))}
                      />
                    </div>
                  </div>
                  <div className="h5 col" dir="rtl">{"$"}{parseInt(product.price)}</div>
                </div>

                <div className="row">
                <Button variant="" className="btn btn-outline-danger"
                      onClick={()=>dispatch(removeFromCart(product.id))}
                >Remove from Cart</Button>
                </div>
            </Card.Body>
          </Card>
          ))
        }
      </div>

      <div className="col-lg mt-4">
        <Card>
          <Card.Header>Cart Summary</Card.Header>
          <Card.Body>
            <Card.Title>{`$ ${totalPrice}`}</Card.Title>
            <Card.Text>{`TOTAL: ${count} items`}</Card.Text>
              <div className="row">
                <Button variant="" className="btn btn-outline-primary col">Check Out</Button>
                <Button variant="" className="btn btn-outline-danger col"
                  onClick={()=>dispatch(clearCart())}
                >Clear Cart</Button>
              </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
 
export default Cart;
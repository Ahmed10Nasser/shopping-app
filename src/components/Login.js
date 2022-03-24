import { useEffect, useRef } from "react";
import { Form, Button, Card, Alert,Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom"
import { login } from "../redux/actions/auth";
import { clearCart } from "../redux/actions/cart";


const Signup = () => {

  const emailRef=useRef();
  const passwordRef=useRef();
  const error=useSelector(store=>store.user.error);
  const isLoading=useSelector(store=>store.user.isLoading);
  const uid=useSelector(store=>store.user.userId);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    dispatch(clearCart());
    if(uid){
      navigate("/");
    }
  },[uid]);

  function handleSubmit(e){
    e.preventDefault();
    dispatch(login(emailRef.current.value, passwordRef.current.value));
  }

  return ( 
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log in</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button disabled={isLoading} className="w-100  mt-3" type="submit">
                Log in
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          I don't have an account? <Link to="/signUp">Sign Up</Link>
        </div>
    </div>
    </Container>
   );
}
 
export default Signup;
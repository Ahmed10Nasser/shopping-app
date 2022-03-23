import { useEffect, useRef,useState } from "react";
import { Form, Button, Card, Alert,Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import {setSignedUp, setSignupError,signup} from "../redux/actions/signup";


const Signup = () => {

  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirmRef=useRef();

  const error=useSelector(store=>store.signup.error);
  const isLoading=useSelector(store=>store.signup.isLoading);
  const isSignedUp=useSelector(store=>store.signup.isSignedUp);
  const dispatch=useDispatch();


  function handleSubmit(e){
    e.preventDefault();
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      dispatch(setSignedUp(false));
      dispatch(setSignupError("Password doesn't match"));
    }
    else{
      dispatch(signup(emailRef.current.value, passwordRef.current.value));
    }
  }

  return ( 
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {isSignedUp && <Alert variant="success">
              Successful Sign Up. Yon <Link to="/login">Log In</Link> Now

            </Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <Button disabled={isLoading} className="w-100  mt-3" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </Container>
   );
}
 
export default Signup;
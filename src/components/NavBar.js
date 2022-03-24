import { Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { logout } from "../redux/actions/auth";

const NavBar = () => {

  const count=useSelector(store=>store.cart.count);
  const uid=useSelector(store=>store.user.userId);
  const email=useSelector(store=>store.user.email);
  const dispatch=useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg"  className="navbar-light bg-light" sticky="top">
      <Container  className="align-middle ">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
        <ul className="navbar-nav mx-3">
          <li className="nav-item active">
            <Link className="nav-link h5" to="/">Home</Link>
         </li>
        </ul>
        {uid &&
          <ul className="navbar-nav mx-3">
          <li className="nav-item">
            <Link className="nav-link h5" to="/cart">Cart <span className="cart_counter">{count}</span></Link>
            </li>
          </ul>
        }
        <ul className="navbar-nav mx-3">
          <li className="nav-item active">
            {uid && <span className="nav-link h5"> {email} </span>}
            {!uid && <Link className="nav-link h5 " to="/login">Login</Link>}
          </li>
         </ul>
         <ul className="navbar-nav mx-3">
         <li className="nav-item">
          {!uid && <Link className="nav-link h5" to="/signup">Signup</Link>}
          {uid &&
            <button className="btn btn-outline-danger border-2"
              onClick={()=>dispatch(logout())}
            >Logout</button>
          }
          </li>
        </ul>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavBar;
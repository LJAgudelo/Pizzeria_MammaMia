import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { FcUnlock, FcLock, FcKey } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa6";
import {formatCurrency} from '../utils/format'
import { Link } from 'react-router-dom';




const MyNabvar = () => {
    const total = 25000;
    const token = false;
    return (
            <Navbar className="bg-secondary" id='menu'>
                <Container fluid >
                    <Navbar.Brand href="#" className="text-white fs-3 ms-4 p-3">Pizzería Mamma Mia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex m-3 mx-4 p-1">
                            <Link to="home" className="text-white ms-3 text-decoration-none"> Home </Link>
                            <Link to="cart" className="text-white ms-3 text-decoration-none"> Cart </Link>
                           { token ? (
                           
                            <>
                            <Link to="Profile"variant="outline-light" className="mx-2"><FcUnlock />Profile</Link>
                            <Button variant="outline-light" className="mx-2"><FcLock /> Logout</Button>
                            </>
                        ):(
                            
                            <>
                            <Link to="login" className="text-white ms-3 text-decoration-none"> Login</Link>
                            <Link to="registro" className="text-white ms-3 text-decoration-none">Register</Link>
                            <Link to="profile" className="text-white ms-3 text-decoration-none">Profile</Link>
                            </>
                            )}
                           
                       </Form>
                       <Form className=" p-3">
                            <Button variant="outline-light" className="mx-2"><FaCartArrowDown /> Total: {formatCurrency(total)}</Button>
                       </Form>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default MyNabvar
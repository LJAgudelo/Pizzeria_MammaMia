import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { FcLike, FcUnlock, FcLock, FcKey } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa6";
import {formatCurrency} from '../utils/format'




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
                            <Button variant="outline-light" className="mx-2"><FcLike /> Home</Button>
                           { token ? (
                           
                            <>
                            <Button variant="outline-light" className="mx-2"><FcUnlock /> Profile</Button>
                            <Button variant="outline-light" className="mx-2"><FcLock /> Logout</Button>
                            </>
                        ):(
                            
                            <>
                            <Button variant="outline-light" className="mx-2"><FcKey /><FcLock /> Login</Button>
                            <Button variant="outline-light" className="mx-2"><FcKey /><FcLock /> Register</Button>
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
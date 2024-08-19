import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { PiEyesFill } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa6";

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <Card border="dark" style={{ width: '24rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Title>Pizza{name}</Card.Title>
               <ListGroup className="list-group-flush">
                <ListGroup.Item>Ingredientes: {ingredients}</ListGroup.Item>
            </ListGroup>
            <Card.Body >
                <Card.Title>Precio: {price}</Card.Title>
                <Card.Body className="d-flex gap-5 justify-content-center">
                <Button variant="outline-secondary ">Ver Más <PiEyesFill /></Button>
                <Button variant="secondary">Añadir <FaCartArrowDown /></Button>
                
                </Card.Body>
            </Card.Body>
        </Card>

    );
}

export default CardPizza
import React, { useState } from 'react';
import pizzas from '../pizzas';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaCartArrowDown } from "react-icons/fa6";



const Cart = () => {
    const [cart, setCart] = useState(pizzas);
    //Funcion para aumentar
    const aumentarCantidad = (id) => {
        setCart(cart.map(pizza => 
            pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
        ));
    };
    //funcion para disminuir
    const disminuirCantidad = (id) => {
        setCart(cart.map(pizza => 
            pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza).filter(pizza=>pizza.quantity>0)
        );
    };

    // Función para calcular el total
       const calcularTotal = () => {
        return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
    };

    return (
        <>
        <h3>Carrito de Compras</h3>
        {cart.map((pizza)=>(
            <div className="cards d-flex justify-content-center">
            <Card border="dark" style={{ width: '20rem'}}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Title>Pizza{pizza.name}</Card.Title>
               <ListGroup className="list-group-flush">
                <ListGroup.Item>Ingredientes: {pizza.ingredients.join(', ')}</ListGroup.Item>
            </ListGroup>
            <Card.Body >
                <Card.Title>Precio: {pizza.price}</Card.Title>
                <Card.Body className="d-flex gap-5 justify-content-center">
                   
                    <Button variant="outline-secondary " onClick={()=>aumentarCantidad(pizza.id)}>Agregar<FaCartArrowDown /></Button>
                    <Button variant="secondary" onClick={()=>disminuirCantidad(pizza.id)}>Quitar <FaCartArrowDown /></Button>
                    
                </Card.Body>
                <h5>Cantidad de pizzas: ${pizza.quantity} </h5>
            </Card.Body>
        </Card>
            </div>
        )
        
        )}
        <Button variant="secondary" onClick={() => alert('Funcionalidad de pago por implementar')}>Total a pagar</Button>
        <h3>${calcularTotal()}</h3>
        </>

            




    );
}

export default Cart;
import React from 'react';
import CardPizza from '../components/CardPizza';
import Header from '../components/Header';
import pizzas from '../components/pizzas';


const Home = () => {
    return (
        <div>
            <Header />
            <div className="cards d-flex flex-wrap justify-content-center gap-2">
                {pizzas.map((pizza) => (
                    <CardPizza
                        key={pizza.id}
                        name={pizza.name}
                        ingredients={pizza.ingredients.join(', ')}
                        price={pizza.price}
                        img={pizza.img}
                        
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
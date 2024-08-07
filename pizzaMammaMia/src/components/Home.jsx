import CardPizza from "./CardPizza";
import Header from "./Header";


const Home = () => {
    return (
        <div>
            <Header />
            <div className="cards"> 
                <CardPizza name=" Napolitana" ingredients=" 🍕 mozzarella, tomates, jamón, orégano" price="$5.950" />
                <CardPizza name=" Española" ingredients=" 🍕 mozzarella, gorgonzola, parmesano, provolone" price="$6.950" />
                <CardPizza name=" Pepperoni" ingredients=" 🍕 mozzarella, pepperoni, orégano, aceituna verde" price="$7.950" />
            </div>

        </div>
    )
}

export default Home;



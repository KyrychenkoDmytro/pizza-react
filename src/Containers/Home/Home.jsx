import './Home.scss';
import Header from '../Header/Header';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import pizza from '../../pizza.json';

const Home = () => {
    console.log(pizza);
    return (
        <div className="Home">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">All pizzas</h2>
                    <div className="content__items">
                        {pizza.map((item) => <PizzaBlock key={item.id} {...item}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home; 
import './Home.scss';
import Header from '../Header/Header';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import PizzaBlock from './PizzaBlock/PizzaBlock';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <PizzaBlock />
                        <PizzaBlock />
                        <PizzaBlock />
                        <PizzaBlock />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home; 
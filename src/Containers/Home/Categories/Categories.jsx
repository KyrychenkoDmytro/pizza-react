import './Categories.scss';
import { useState } from 'react';

const Categories = () => {
    const allCategories = ['All', 'Meat', 'Vegetable', 'Seafood', 'Сheese', 'Vegetarian'];
    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <div className="Categories">
            <ul>
                {allCategories.map((item, i) => (
                    <li
                        className={activeCategory === i ? 'active' : ''}
                        onClick={() => setActiveCategory(i)}
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
import { useContext } from 'react';
import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';

export default function MealItem({mealData}) {
    const cartContext = useContext(CartContext);

    function handleAddMealToCart() {
        cartContext.addItem(mealData);
    }

    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${mealData.image}`} alt={mealData.name} />
                <div>
                    <h3>{mealData.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(mealData.price)}</p>
                    <p className="meal-item-description">{mealData.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMealToCart}>
                        Add to Cart
                    </Button>
                </p>
            </article>
        </li>
    )
}
import Button from './UI/Button';
import logoImg from '../assets/logo.jpg';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext)

    const totalCartItems = cartContext.items.reduce((totalNumberItems, item) => {
        return totalNumberItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressContext.showCart();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt='A restaurant logo'/>
                <h1>Food Shop</h1>
            </div>
            <nav>
                <Button
                    textOnly={true}
                    onClick={handleShowCart}
                >
                    Cart ({totalCartItems})
                </Button>
            </nav>
        </header>
    )
}
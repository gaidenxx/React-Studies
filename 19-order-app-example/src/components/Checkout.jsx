import { useContext } from "react";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export default function Checkout() {
    const cartContext = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const {data, error, isLoading, sendRequest, clearData} = useHttp(
        'http://localhost:3000/orders', 
        requestConfig
    );

    const cartTotal = cartContext.items.reduce((totalPrice, item) => 
        totalPrice + item.quantity * item.price, 0
    );

    function handleCloseCheckout() {
        userProgressCtx.hideCheckout();
    }

    function handleFinishShopping() {
        userProgressCtx.hideCheckout();
        cartContext.clearCart();
        clearData();
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const customerData = Object.fromEntries(formData.entries());

        sendRequest(JSON.stringify({
            order: {
                items: cartContext.items,
                customer: customerData
            }
        }));

        // fetch('http://localhost:3000/orders', {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         order: {
        //             items: cartContext.items,
        //             customer: customerData
        //         }
        //     })
        // });
    }

    if (data && !error) {
        return (
            <Modal
                open={userProgressCtx.progress === 'checkout'}
                onClose={handleFinishShopping}
            >
                <h2>Success!</h2>
                <p>Your order was submitted successfully.</p>
                <p>We will get back to you with more details via email within the next few minutes.</p>
                <p className="modal-actions">
                    <Button onClick={handleFinishShopping}>Okay</Button>
                </p>
            </Modal>
        )
    }

    return (
        <Modal 
            open={userProgressCtx.progress === 'checkout'}
            onClose={userProgressCtx.progress === 'checkout' ? handleCloseCheckout : null}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

                <Input 
                    id="name"
                    label="Full Name"
                    type="text"
                />
                <Input 
                    id="email"
                    label="Email Address"
                    type="email"
                />
                <Input 
                    id="street"
                    label="Street"
                    type="text"
                />
                <div className="control-row">
                    <Input 
                        id="postal-code"
                        label="Postal Code"
                        type="text"
                    />
                    <Input 
                        id="city"
                        label="City"
                        type="text"
                    />
                </div>
                {error && <Error title="Failed to submit order" message={error} />}
                <p className="modal-actions">
                    { isLoading ? (
                        <span>Sending order data...</span>
                    ) : (
                        <>
                            <Button 
                                type="button"
                                onClick={handleCloseCheckout}
                                textOnly
                            >Close</Button>
                            <Button>Submit Order</Button>
                        </>
                    )}
                </p>
            </form>
        </Modal>
    )
}
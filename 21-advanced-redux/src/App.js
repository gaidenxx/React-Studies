import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector } from 'react-redux';

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  // Redux With backend example
  // useEffect(() => {
    // Do the dispatch necessary logics
  //   const sendCartData = async () => {
  //     const response = await fetch('[URL ROUTE]', {
  //       method: 'PUT',
  //       body: JSON.stringify(cart)
  //     });

  //     if (!response.ok) {
  //       throw new Error('Send cart data failed to request.');
  //     }

  //     const responseData = response.json();
  //     // Success part ...
  //   }
  // }, [cart, dispatch]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

import React, { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const orderHandler = () => {
    console.log('Ordering...');
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} onOrder={orderHandler} />}
      <Header onShowCart={showCartHandler}>
        <main>
          <Meals></Meals>
        </main>
      </Header>
    </CartProvider>
  );
}

export default App;

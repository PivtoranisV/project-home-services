import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import CartProvider from './store/CartProvider';
import Feedbacks from './components/Feedbacks/Feedbacks';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        <Services />
        {cartIsShown && <Cart onHideCart={hideCartHandler} />}
        <Feedbacks />
      </main>
    </CartProvider>
  );
}

export default App;

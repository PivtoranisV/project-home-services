import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      <Header onShowCart={showCartHandler} />
      <main>
        <Services />
        {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;

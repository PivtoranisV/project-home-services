import React from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Services />
        <Cart />
      </main>
    </React.Fragment>
  );
}

export default App;

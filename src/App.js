import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import CartProvider from './store/CartProvider';
import Feedbacks from './components/Feedbacks/Feedbacks';
import Footer from './components/Footer/Footer';

import { useSelector } from 'react-redux';

function App() {
  const showCart = useSelector((state) => state.cartUi.cartIsShowing);

  return (
    <CartProvider>
      <Header />
      <main>
        <Services />
        {showCart && <Cart />}
        <Feedbacks />
      </main>
      <footer>
        <Footer />
      </footer>
    </CartProvider>
  );
}

export default App;

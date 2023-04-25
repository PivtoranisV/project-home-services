import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Feedbacks from './components/Feedbacks/Feedbacks';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'services/:serviceId', element: <ServiceDetailPage /> },
    ],
  },
]);

function App() {
  const showCart = useSelector((state) => state.cartUi.cartIsShowing);

  return (
    <Fragment>
      <RouterProvider router={router} />
      {/* <Header />
      <main>
        <Services /> */}
      {showCart && <Cart />}
      {/* <Feedbacks />
      </main>
      <footer>
        <Footer />
      </footer> */}
    </Fragment>
  );
}

export default App;

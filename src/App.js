import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Feedbacks from './components/Feedbacks/Feedbacks';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage, {
  loader as serviceLoader,
} from './pages/ServiceDetailPage';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      {
        path: 'services/:serviceId',
        element: <ServiceDetailPage />,
        loader: serviceLoader,
      },
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
}
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

import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage, {
  loader as serviceLoader,
} from './pages/ServiceDetailPage';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import SpecialistsPage, {
  loader as specialistsLoader,
} from './pages/SpecialistsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      {
        path: 'specialists',
        element: <SpecialistsPage />,
        loader: specialistsLoader,
      },
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
      {showCart && <Cart />}
    </Fragment>
  );
}

export default App;

import React from 'react';
import { useRouteError } from 'react-router-dom';
import ErrorContent from '../components/Content/ErrorContent';
import Header from '../components/Header/Header';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find page';
  }
  return (
    <>
      <Header />
      <ErrorContent title={title}>
        <p>{message}</p>
      </ErrorContent>
    </>
  );
};

export default ErrorPage;

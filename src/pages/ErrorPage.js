import React from 'react';
import ErrorContent from '../components/Content/ErrorContent';

const ErrorPage = () => {
  const title = 'An Error ocurred!';
  const message = 'Something happen';

  return (
    <ErrorContent title={title}>
      <p>{message}</p>
    </ErrorContent>
  );
};

export default ErrorPage;

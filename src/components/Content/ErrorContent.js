import React from 'react';
import styles from './ErrorContent.module.css';

const ErrorContent = ({ title, children }) => {
  return (
    <div className={styles.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default ErrorContent;

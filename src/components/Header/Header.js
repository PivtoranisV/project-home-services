import React from 'react';
import roomImg from '../../assets/living-room.jpg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Kumka Services</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={roomImg} alt="Living Room" />
      </div>
    </React.Fragment>
  );
};

export default Header;

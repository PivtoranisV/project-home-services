import React from 'react';
import roomImg from '../../assets/living-room.jpg';
import CartButton from './CartButton';
import styles from './Header.module.css';

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h2>Kumka Services</h2>
        <CartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={roomImg} alt="Living Room" />
      </div>
    </React.Fragment>
  );
};

export default Header;

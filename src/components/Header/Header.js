import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import roomImg from '../../assets/living-room.jpg';
import CartButton from './CartButton';
import styles from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h2>
          Kumka <br />
          Services
        </h2>
        <nav>
          <ul className={styles.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Services
              </NavLink>
            </li>
          </ul>
        </nav>
        <CartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={roomImg} alt="Living Room" />
      </div>
    </Fragment>
  );
};

export default Header;

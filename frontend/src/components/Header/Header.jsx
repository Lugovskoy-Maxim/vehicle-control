import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from '../styles/Header.module.css';
import { NavLinks } from '../../utils/constants';
import logoutIcon from '../../images/logout-svgrepo-com.svg';
import loginIcon from '../../images/login-svgrepo-com.svg';

function Header(loggedIn) {

  return (
    <section className={styles.header}>
      <Link className={styles.link} to="/">
        <p className={styles.name}>Vehicle</p>
        <p className={styles.slogan}>control</p>
      </Link>

      <div className={styles.topBar}>
        <nav>
          <ul className={styles.navigation}>
            {NavLinks.map((link) => (
              <li className={styles.linkItem} key={link.name}>
                <NavLink className={styles.link} to={link.path}>
                  <p>{link.name}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.profile}>
        <div className={styles.container}>
          <div className={styles.userBox}>
            <p className={styles.title}>Профиль</p>
            <p className={styles.userName}>Иван Петрович</p>
          </div>
          <button className={styles.logged}>
            <img className={styles.icon} src={loggedIn? logoutIcon : loginIcon} alt="logout" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;

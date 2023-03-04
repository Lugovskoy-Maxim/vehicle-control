import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';
import avatar from '../../images/avatar.JPG';

function Header(){

  return(
    <header className={styles.header}>
      <Link className={styles.link} to='/'>
        <p className={styles.name}>Vehicle</p>
        <p className={styles.slogan}>control</p>
      </Link>
      <div className={styles.profile}>
        <ul className={styles.iconBar}>
          <li className={styles.notification}>
            иконка 1
          </li>
          <li className={styles.notification}>
            иконка 2
          </li>
        </ul>
        <div className={styles.avatar}>
          <img className={styles.avatarImage} src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  )

}

export default Header;
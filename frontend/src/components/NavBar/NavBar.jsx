import React, { useState } from "react";
import { mainMenu, userMenu, companyMenu } from "../../utils/navigationMenu";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  const [sliderPopup, setSliderPopup] = useState(false);

  function renderMenu(arr) {
    return arr.map((elem) =>
      <li key={elem.name} className={styles.element}>
        {elem.more
          ? slider(elem)
          : <Link className={styles.link} to={elem.path}>{elem.name}</Link>
        }
      </li>
    )
  }

  function slider(arr) {
    return sliderPopup
      ? <>
        <div className={styles.link} onClick={() => setSliderPopup(!sliderPopup)}>{arr.name}</div>
        {arr.more.map((link) =>
          <div className={styles.linkMore} key={link.name}>
            <Link className={styles.link} to={link.path}>{link.name}</Link>
          </div>)}
      </>
      : <div className={styles.link} onClick={() => setSliderPopup(!sliderPopup)}>{arr.name}</div>
  }
  return (
    <div className={styles.navBar}>
      <h2 className={styles.groupName}>Главная</h2>
      <ul className={styles.elements}>
        {renderMenu(mainMenu)}
      </ul>
      <h2 className={styles.groupName}>Техника</h2>
      <ul className={styles.elements}>
        {renderMenu(userMenu)}
      </ul>
      <h2 className={styles.groupName}>О нас</h2>
      <ul className={styles.elements}>
        {renderMenu(companyMenu)}
      </ul>
    </div>
  );
}

export default NavBar;

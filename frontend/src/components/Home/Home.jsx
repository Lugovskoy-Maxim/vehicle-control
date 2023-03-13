import React from 'react';
import styles from '../styles/Home.module.css';

function Promo() {
  return (
    <div className={styles.promo}>
      <hr className={styles.line}></hr>
      <div>
        <ul className={styles.panels}>
          <li className={styles.panel}>
            На текущий момент NaN техники готово к работе.
            <hr />
            NaN ожидают согласования пропуска
            <hr />
            NaN на стадии формирования
            <hr />
            проверить свои машины
          </li>
        </ul>
      </div>
      <hr className={styles.line}></hr>
      <div>
        <h2>Наши партнёры</h2>
        <ul className={styles.partners}>
          <li className={styles.partner}>{`ООО "Компания"`}</li>
        </ul>
      </div>
    </div>
  );
}

export default Promo;

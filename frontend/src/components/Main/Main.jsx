import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';
// проверка типа данных пришедших в props, eslint ругается без проверки (какой то тс без тс получается)
Main.propTypes = {
  children: PropTypes.object.isRequired
}

function Main(props){
  const { children } = props
  return(
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default Main;
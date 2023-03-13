import React from 'react';
// import PropTypes from 'prop-types';
import styles from '../styles/Main.module.css';

// Main.propTypes = {
//   children: PropTypes.object.isRequired
// }

function Main(props){
  const { children } = props
  return(
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default Main;
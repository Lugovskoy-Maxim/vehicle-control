import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTE } from '../../utils/constants';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

import styles from '../styles/App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route
          path={ROUTE.MAIN}
          element={
            <Main>
              <Home />
            </Main>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

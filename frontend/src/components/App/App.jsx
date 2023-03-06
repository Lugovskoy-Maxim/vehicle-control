import './App.css';
import { ROUTE } from '../../utils/constants';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Promo from '../Promo/Promo'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={ROUTE.MAIN} element={
              <Main>
                <NavBar />
                <Promo />
              </Main>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

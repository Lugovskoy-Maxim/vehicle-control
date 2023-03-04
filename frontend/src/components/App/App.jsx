import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />

      </Routes>
    </div>
  );
}

export default App;

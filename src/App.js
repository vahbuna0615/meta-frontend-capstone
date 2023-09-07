import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/booking' element={<BookingPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

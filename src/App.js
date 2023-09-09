import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import Construction from './pages/Construction';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/booking' element={<BookingPage/>}></Route>
          <Route path='/underConstruction' element={<Construction/>}></Route>
          <Route path='/confirmedBooking' element={<ConfirmedBooking/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

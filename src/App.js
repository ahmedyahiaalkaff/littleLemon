import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import ConfirmedBooking from './Pages/ConfirmedBooking';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;

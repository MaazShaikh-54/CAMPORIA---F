import './index.css';
import Home from './pages/home.jsx';
import Blog from './pages/blog.jsx';
import Help from './pages/help.jsx';
import Detail from './pages/detail.jsx';
import AboutUs from './pages/aboutus.jsx';
import Bookings from './pages/bookings.jsx';
import Payment from './components/Payment/payment.jsx';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help" element={<Help />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/payment/:id" element={<Payment />} />
        </Routes>
        <ToastContainer />
    </>
  );
};

export default App;

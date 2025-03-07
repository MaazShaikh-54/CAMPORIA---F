import './index.css';
import Home from './pages/home';
import Blog from './pages/blog';
import Help from './pages/help';
import Detail from './pages/detail';
import AboutUs from './pages/aboutus';
import Bookings from './pages/bookings';
import { Routes, Route } from "react-router-dom";

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
        </Routes>
    </>
  );
};

export default App;

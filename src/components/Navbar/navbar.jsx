import './navbar.css'
import { useState } from 'react';
import Button from '../Button/button'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(true);                
    }

    return (
        <>
            <header>
                <nav className="navbar-container">
                    <div className="logo" onClick={() => { <Link to="/" /> }}>
                        <img className='nav-logo' src="/assets/camporia-nav-logo-b.png" alt="Logo" />
                        <h1 className="logo-txt">Camporia</h1>
                    </div>
                    <ul>
                        <li className="li-items"><Link to="/" id='link'>Home</Link></li>
                        <li className="li-items"><Link to="/blog" id='link'>Blog</Link></li>
                        <li className="li-items"><Link to="/aboutus" id='link'>About Us</Link></li>
                        <li className="li-items"><Link to="/help" id='link'>Help</Link></li>
                        <li className="li-items"><Link to="/bookings" id='link'>Bookings</Link></li>
                        <Button className="auth" text="Login / Sign up" />
                        <button className='menu-icon-btn' onClick={toggleMenu} >
                            <img className="menu-icon" src="/menu-b.png" alt="Hamburger-menu" />
                        </button>
                    </ul>
                </nav>
                    {menu && (
                        <div className="menu">
                            <img className='close-btn' src="/close-white.png" alt="close-icon" onClick={()=>{setMenu(false)}} />
                            <li className="menu-items"><Link to="/" id='link'>Home</Link></li>
                            <li className="menu-items"><Link to="/blog" id='link'>Blog</Link></li>
                            <li className="menu-items"><Link to="/aboutus" id='link'>About Us</Link></li>
                            <li className="menu-items"><Link to="/help" id='link'>Help</Link></li>
                            <li className="menu-items"><Link to="/bookings" id='link'>Bookings</Link></li>
                        </div>
                    )}
            </header>
        </>
    )
}

export default Navbar
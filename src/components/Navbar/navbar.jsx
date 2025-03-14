import './navbar.css'
import Button from '../Button/button'
import { Link } from "react-router-dom";

const navbar = () => {

  return (
    <>
        <header>
            <nav className="navbar-container">
                <div className="logo">
                    <img className='nav-logo' src="/assets/camporia-nav-logo-b.png" alt="Logo" />
                    <h1 className="logo-txt">Camporia</h1>
                </div>
                <ul>
                    <li className="li-items"><Link to="/" id='link'>Home</Link></li>
                    <li className="li-items"><Link to="/blog" id='link'>Blog</Link></li>
                    <li className="li-items"><Link to="/aboutus" id='link'>About Us</Link></li>
                    <li className="li-items"><Link to="/help" id='link'>Help</Link></li>
                    <li className="li-items"><Link to="/bookings" id='link'>Bookings</Link></li>
                    <Button text="Login / Sign up" />
                </ul>
            </nav>
        </header>
    </>
  )
}

export default navbar
import './footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img className="fire-logo" src="/assets/camporia-nav-logo-w.png" alt="Logo" />
                    <h1 className="footer-logo-txt">Camporia</h1>
                </div>
                <div className="footer-links">
                    <ul>
                        <li className="footer-li-items"><Link to="/" id='link'>Home</Link></li>
                        <li className="footer-li-items"><Link to="/blog" id='link'>Blog</Link></li>
                        <li className="footer-li-items"><Link to="/help" id='link'>Help</Link></li>
                    </ul>
                    <div className="icons">
                        <h2>Contact Us:</h2>
                        <Link to="/blog"><img src="/assets/instagram.png" alt="ig" className="ig"/></Link>
                        <Link to="/blog"><img src="/assets/twitter.png" alt="x" className="x"/></Link>

                    </div>
                </div>
            </div>
            <p className="copyright">&copy; 2025 Camporia. All rights reserved.</p>
        </footer>
    </>
  )
}

export default Footer
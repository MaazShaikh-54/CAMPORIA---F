import './payment.css'
import { useState } from 'react';
import propTypes from 'prop-types';
import Count from '../Count/count.jsx';
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/footer.jsx';
import Button from '../Button/button.jsx';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import campsites from '../Search/campsiteData.js';

const Payment = ({ setBooked }) => {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const { id } = useParams();
    const campsite = campsites.find((camp) => camp.id === Number(id));

    if (!campsite) {
        return <h2>Destination Not Found!</h2>;
    }

    const handleChange = (e) => {
        const value = e.target.value;

        if (!/^\d*$/.test(value)) return;
        
        if (value.length > 10) return;

        setPhone(value);

        if (value.length === 10) {
            setError("");
        } else {
            setError("Phone number must be 10 digits");
        }
    };

    return (
        <>
            <Navbar />
            <h1 className='pay-heading'>Payment</h1>
            <h1 className='booking-title'>Booking camp at {campsite.campsiteName}</h1>
            <div className='payment'>
                <img src="" alt="" />
                <form    className="userinfo">
                    <label htmlFor="name">Full Name: </label>
                    <input type="text" id='name' placeholder='Your name...' required />
                    <label htmlFor="phone">Phone Number: </label>
                    <input type="text" value={phone} onChange={handleChange} id="phone" placeholder='Enter 10-digit phone number' required />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </form  >
                <div className="more-options">
                    <Count />
                    <Button className="pay"  type="submit" text="Pay" onClick={()=>setBooked(navigate(`/bookings`), alert("Booked!!"))} />
                </div>
            </div>
            <Footer />
        </>
    );
}

Payment.propTypes = {
    setBooked: propTypes.func.isRequired,
};

export default Payment;
import './payment.css'
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/footer.jsx';
import Count from '../Count/count.jsx'
import campsites from '../Search/campsiteData.js';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    const campsite = campsites.find((camp) => camp.id === Number(id));

    if (!campsite) {
        return <h2>Destination Not Found!</h2>;
    }

    return (
        <>
            <div className='payment'>
                <Navbar />
                <h1>Payment</h1>
                <Count/>
                <Footer />
            </div>
        </>
    );
}

export default Payment;
import './cardDetail.css';
import Count from '../Count/count';
import Button from '../Button/button';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import campsites from "../Search/campsiteData";

export default function Detail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const campsite = campsites.find((camp) => camp.id === Number(id));

    if (!campsite) {
        return <h2>Destination Not Found!</h2>;
    }

    return (
        <>
            <div className="detail-container">
                <img src={campsite.imageUrl} alt={campsite.campsiteName} className="detail-image" />
                <div className="detail-text">
                    <h2 className='title-campsite'>{campsite.campsiteName}</h2>
                    <p className='detail-p description'>{campsite.description}</p>
                    <p className='detail-p'><b>Price: </b> <span className='price'>₹ {campsite.price}</span> per person</p>
                    <Count/>
                    <Button className='detail-btn' text="Book" onClick={()=>{navigate(`/payment/${id}`)}} />
                    <div className="furth_detail">
                        <li><img src="/assets/clock-black.png" alt="clock" className='clock-icon' /><span className='highlight'>Check in:</span> {campsite.checkin} A.M.</li>
                        <li><img src="/assets/clock-black.png" alt="clock" className='clock-icon' /><span className='highlight'>Check out:</span> {campsite.checkout} A.M.</li>
                        <li></li>
                    </div>
                </div>
            </div>

        </>
    )
}
import './cardDetail.css';
import { useParams } from "react-router-dom";
import campsites from "../Search/campsiteData"
import Button from '../Button/button';

export default function Detail() {
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
                    <p className='detail-p'>Price: {campsite.price}</p>
                    <Button className='detail-btn' text="Book"/>
                </div>
            </div>
        </>
    )
}
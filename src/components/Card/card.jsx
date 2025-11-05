import './card.css';
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Heart, Star, Trophy } from 'lucide-react';

const CampsiteCard = ({ id, imageUrl, campsiteName, price }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="campsite-card" onClick={() => navigate(`/detail/${id}`)}>
        <img src={imageUrl} alt={campsiteName} className="campsite-image" />
        <p className='campsite-info campsite-badge'><Trophy className='lucide-icon' />Popular</p>
        <Heart className='heart-icon' fill='#00000078' strokeWidth={1.25} />
        <div>
          <div className="campsite-info">
            <h3 className="campsite-name">{campsiteName}</h3>
            <div className="review-star"><Star fill='#000' strokeWidth={1} className='lucide-icon' />{4.5}{" (23)"}</div>
          </div>
          <div className="campsite-footer">
            <p className='campsite-amenities'>WiFi • Laundry • Shower</p>
            <p className="campsite-price"><span className='campsite-price-number'>₹{price}</span> <span className='campsite-price-text'>for a night</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

CampsiteCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  campsiteName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CampsiteCard;

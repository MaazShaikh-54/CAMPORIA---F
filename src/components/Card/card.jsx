import PropTypes from "prop-types";
import './card.css';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";

const CampsiteCard = ({ id, imageUrl, campsiteName, price }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="campsite-card">
        <img src={imageUrl} alt={campsiteName} className="campsite-image" />
        <div>
          <h3 className="campsite-name">{campsiteName}</h3>
          <div className="campsite-footer">
            <p className="campsite-price ">₹{price} / night</p>
            <Button text="Book" onClick={() => navigate(`/detail/${id}`)} />
          </div>
        </div>
      </div>
    </>
  );
};

CampsiteCard.propTypes = {
  id:PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  campsiteName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CampsiteCard;
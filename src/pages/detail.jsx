import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar/navbar.jsx'
import Footer from '../components/Footer/footer.jsx'
import campsites from "../components/Search/campsiteData"

const Detail = () => {
  const { id } = useParams(); // Get ID from URL
  const campsite = campsites.find((camp) => camp.id === Number(id)); // Find campsite by ID

  if (!campsite) {
    return <h2>Destination Not Found!</h2>;
  }

  return (
    <>
    <Navbar/>
    <div className="detail-container">
      <img src={campsite.imageUrl} alt={campsite.campsiteName} className="detail-image" />
      <h2>{campsite.campsiteName}</h2>
      <p>Price: {campsite.price}</p>
      <p>Description: {campsite.description}</p>
    </div>
    <Footer/>
    </>
  );
};

export default Detail;
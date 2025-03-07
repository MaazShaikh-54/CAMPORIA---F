import '../index.css'
import Navbar from '../components/Navbar/navbar'
import CampsiteList from '../components/Search/search'
import Footer from '../components/Footer/footer'

const home = () => {
  return (
    <>
        <Navbar/>
        <CampsiteList />
        <Footer/>
    </>
  )
}

export default home
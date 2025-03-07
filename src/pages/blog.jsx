import '../index.css'
import Navbar from '../components/Navbar/navbar'
import Hero from '../components/Blog/hero'
import Activies from '../components/Blog/activity'
import Footer from '../components/Footer/footer'


const Blog = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Activies/>
      <Footer/>
    </>
  )
}

export default Blog
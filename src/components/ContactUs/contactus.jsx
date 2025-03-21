import './contactus.css'
import Button from '../Button/button'

const contactus = () => {

  return (
    <>
      <form className="contact-form">
        <h1>Contact Us</h1>

        <div className='pdata'>
          <div className="label-input">
            <label className='label' htmlFor="name">Name: </label>
            <input type="text" id="Name" name="name" placeholder="name" required />
          </div>
          <div className="label-input">
            <label className='label' htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" placeholder="example@gmail.com" required />
          </div>
        </div>
        <label className='label' htmlFor="message">Message: </label>
        <textarea id="message" name="message" placeholder="Write something.." rows="5" cols="32" required></textarea>
        <Button className="submit" type="submit" text="Submit" />
      </form>
    </>
  )
}

export default contactus
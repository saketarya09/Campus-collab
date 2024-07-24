import React from 'react'
import "./Contact.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const contact = () => {
  return (
    <>
    <div className='contact-page'>

<div className="contact-section">
      <div className="contact-info">
        <div><i className="fas fa-map-marker-alt"></i>Dypiu, Pune, Maharastra</div>
        <div><i className="fas fa-envelope"></i>dypiu2021@email.com</div>
        <div><i className="fas fa-phone"></i>+91 9071123434 / 9071123404</div>
        <div><i className="fas fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM</div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form className="contact" action="https://formspree.io/f/myyrodlv" method="POST">
          <input type="text" name="username" className="text-box" placeholder="Your Name" required />
          <input type="email" name="Email" className="text-box" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <input type="submit" name="submit" className="send-btn" value="Send" />
        </form>
      </div>
    </div>
    </div>

      <section className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.401018443502!2d73.75667057504103!3d18.645992282472058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f02f4b8f47%3A0x994b7c247d09fde!2sD.%20Y.%20Patil%20International%20University!5e0!3m2!1sen!2sin!4v1714757545879!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <footer>
            <h2> Dypiu website &copy; all rights reserved</h2>
        </footer>
        
  
    </>

    
  )
}

export default contact

import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Homepage.css'


//Importing all important images for home page
import about from './home-images/about-photo.jpg';
import food1 from './home-images/food1.jpg';
import food2 from './home-images/food2.jpg';
import placement from './home-images/placement.png';
import food01 from './home-images/food01.jpg';
import food02 from './home-images/food02.jpg';
import food03 from './home-images/food03.jpg';
import malephoto1 from './home-images/male-photo1.jpg';
import malephoto2 from './home-images/male-photo2.jpg';
import malephoto3 from './home-images/male-photo3.jpg';
import restrauntimage from './home-images/restraunt-image.jpg';

const Homepage = () => {
  return (
    <div>
      <>
   <section id="showcase" className="showcase-area">
            <div className="showcase-container">
                
                <h1 className="main-title">DY Patil International University</h1>
                <p>Skill is only developed by hours and hours of work.</p>
                <a href="#food" className="btn-primary btn">Menu</a>
            </div>
   </section>

   <section id="about">
            <div className="about-wrapper container">
                <div className="about-text">
                    <p className="small">About us</p>
                    <h2>Welcome to Campus Collab,Here students and educators come together for groundbreaking endeavors.</h2>
                    <p>Campus Collab: A space where concepts evolve into impactful realities, driven by the vibrant synergy of our community. From interdisciplinary research to enriching workshops, our activities bridge academic knowledge with practical execution.</p>
                    <p>We champion a culture of collaboration, believing in the collective power to transform challenges into opportunities for growth and discovery. Join us at Campus Collab, where your potential is unlimited and every collaboration is a step towards future success.</p>
                </div>

                <div className="about-img">
                    <img src={about} alt="Image not found" />
                </div>
            </div>
     </section>

     <section id="food">
            <h2>Dashboard</h2>
            <div className="food-container container">
                <div className="food-type fruit">
                    <div className="img-container">
                       < img src = {food1}/>
                        <div className="img-content">
                            <h3>Clubs</h3>
                            <Link to="/club" className="btn btn-primary"  rel="noopener noreferrer">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className="food-type vegetable">
                    <div className="img-container">
                        <img src="./eventbg.jpg" alt="" />
                        <div className="img-content">
                            <h3>Events</h3>
                            <Link to="/Events" className="btn btn-primary"  rel="noopener noreferrer">Learn More</Link>
                        </div>
                    </div>
                </div>


                <div className="food-type grain">
                    <div className="img-container">
                        <img src={placement} alt="" />
                        <div className="img-content">
                        <h3>Placement Cell</h3>
                            <Link to="/Comingsoon" className="btn btn-primary"  rel="noopener noreferrer">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                
        <br></br>

        <section id="food">
            <div className="food-container container">
                <div className="food-type fruit">
                    <div className="img-container">
                       < img src = {food01}/>
                        <div className="img-content">
                        <h3>Courses</h3>
                            <Link to="/Courses" className="btn btn-primary"  rel="noopener noreferrer">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className="food-type vegetable">
                    <div className="img-container">
                        <img src={food02} alt="" />
                        <div className="img-content">
                        <h3>Fees Payment</h3>
                            <Link to="/Comingsoon" className="btn btn-primary"  rel="noopener noreferrer">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className="food-type grain">
                    <div className="img-container">
                        <img src={food03} alt="" />
                        <div className="img-content">
                        <h3>Lost & Found</h3>
                            <Link to="/Comingsoon" className="btn btn-primary"  rel="noopener noreferrer">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="food-menu">
            <h2 className="food-menu-heading">EXPLORE</h2>
            <div className="food-menu-container container">

        <div className="food-menu-item">
            <div className="food-img">
            <Link to="/Comingsoon"><img src="/magzines.jpg" alt="" /></Link>
            </div>
            <div className="food-description">
            <Link to="/Comingsoon"><h2 className="food-title">Magzines</h2></Link>
                <p>Explore campus life and student perspectives through engaging articles.</p>
                <Link to="/Comingsoon" rel="noopener noreferrer" className="food-price">Explore now!</Link>
            </div>
        </div>

        <div className="food-menu-item">
            <div className="food-img">
            <Link to="/Quotes"><img src="/quotify.jpg" alt="" /></Link>
            </div>
            <div className="food-description">
            <Link to="/Quotes"><h2 className="food-title">Quotify</h2></Link>
                <p>Be motivated, Read and tweet the quotes of your choice here.</p>
                <Link to="/Quotes" rel="noopener noreferrer" className="food-price">Tweet now!</Link>
            </div>
        </div>

        <div className="food-menu-item">
            <div className="food-img">
            <Link to="/Comingsoon"><img src="/Collegenews.jpg" alt="" /></Link>
            </div>
            <div className="food-description">
            <Link to="/Comingsoon"><h2 className="food-title">College News</h2></Link>
                <p>CollegeNews: Current events and insights shaping the student experience.</p>
                <Link to="/Comingsoon" rel="noopener noreferrer" className="food-price">See now!</Link>
            </div>
        </div> 

        <div className="food-menu-item">
            <div className="food-img">
            <Link to="/Comingsoon"><img src="/food-menu6.jpg" alt="" /></Link>
            </div>
            <div className="food-description">
            <Link to="/Comingsoon"><h2 className="food-title">Canteen</h2></Link>
                <p>We serve the best quality food in our canteen,<br></br> do visit someday.</p>
                <Link to="/Comingsoon" rel="noopener noreferrer" className="food-price">Visit now!</Link>
            </div>
        </div>

        <div className="food-menu-item">
            <div className="food-img">
            <Link to="//Comingsoon"><img src="/achievement.jpg" alt="" /></Link>
            </div>
            <div className="food-description">
            <Link to="/Comingsoon"><h2 className="food-title">Achievements</h2></Link>
                <p>Celebrating accomplishments and inspiring academic and personal growth.</p>
                <Link to="/Comingsoon" rel="noopener noreferrer" className="food-price">Visit now!</Link>
            </div>
        </div>

        <div className="food-menu-item">
            <div className="food-img">
            <Link to="/Comingsoon"><img src="/timetable.jpg" alt="" /></Link>
            </div>
            <div className="food-description">
            <Link to="/Comingsoon"><h2 className="food-title">Timetable</h2></Link>
                <p> Organizing student schedules and managing academic commitments efficiently.</p>
                <Link to="/Comingsoon" rel="noopener noreferrer" className="food-price">Check here!</Link>
            </div>
        </div>

            </div>
        </section>

        <section id="testimonials">
            <div className="testimonial-container container">    
            <div className="testimonial-box">
            <div className="customer-details">
                <div className="customer-photo"><img src={malephoto1} alt="Customer" /></div>
                <p className="customer-name">Prof. Prabhat Ranjan</p>
                <p className="testimonial-text">Founder Vice-Chancellor
          A Nuclear Fusion Scientist, A Futurist, An Educator, An Innovator, An Entrepreneur and A Science Communicator</p>
            </div>
        </div>

        <div className="testimonial-box">
            
            <div className="customer-details">
                <div className="customer-photo"><img src={malephoto2} alt="Customer" /></div>
                <p className="customer-name">Dr. Bahubali Shiragapur</p>
                <p className="testimonial-text">Director as well as Associate Professor. Have teaching experience in Analog and Digital Communication, Information theory and Machine learning.</p>
            </div>
        </div>

        <div className="testimonial-box">
            <div className="customer-details">
                <div className="customer-photo"><img src={malephoto3} alt="Customer" /></div>
                <p className="customer-name">Dr. Maheshwari Biradar</p>
                <p className="testimonial-text">Head of Department A Assistant Professor, have teaching experience of 25 years in Digital Communication.</p>
            </div>
        </div>

            </div>
        </section>


        <section id="contact">
            <div className="contact-container container">
                <div className="contact-image">
                    <img src={restrauntimage} alt="" />
                </div>
                <div className="form-container">
                    <h2>Feedback</h2>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="abc@gmail.com" />
                    <textarea name="message" cols="30" rows="10" placeholder="Type your text here.."></textarea>
                    <a href="#" className="btn-primary">Submit</a>
                </div>
            </div>
        </section>
        <footer>
            <h2> Dypiu website &copy; all rights reserved</h2>
        </footer>
  </>
    </div>
  )
}

export default Homepage
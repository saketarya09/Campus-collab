import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [showPopup, setShowPopup] = useState(false); // State to track pop-up visibility
    const [popupContent, setPopupContent] = useState({ src: '', caption: '' });

    const popup = document.querySelector('.popup-content');
    if (popup) {
        popup.style.display = 'none';
    }

    const openPopup = (imageSrc, caption) => {
        setPopupContent({ src: imageSrc, caption });
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="text-center">
                <h1 className="display-1">Dypiu Image Gallery</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="gallery">
                        <figure onClick={() => openPopup('/dyp5.jpg' )}>
                            <img src='/dyp5.jpg' alt="" />
                            
                            <figcaption>D.Y Patil Polytechnic<a href="https://maps.app.goo.gl/X7XAGqyX9CJ6fAbD7" className='seemore'><h5>See more</h5></a></figcaption>
                        </figure>

                        <figure onClick={() => openPopup('/dyp6.jpg' )}>
                            <img src='/dyp6.jpg' alt="" />
                            <figcaption>Dypiu Campus<a href="https://maps.app.goo.gl/cvZtHasz8toHA3Tc8" className='seemore'><h5>See more</h5></a></figcaption>
                        </figure>

                        <figure onClick={() => openPopup('/dyp2.jpg')}>
                            <img src='/dyp2.jpg' alt="" />
                            <figcaption>Engineering, Management and Research<a href="https://maps.app.goo.gl/KkWaMSStkc43ne6c9" className='seemore'><h5>See more</h5></a></figcaption>
                        </figure>
                      
                        <figure onClick={() => openPopup('/dyp3.jpg')}>
                            <img src="/dyp3.jpg" alt="" />
                            <figcaption>Dr. D Y Patil College Of Pharmacy<a href="https://maps.app.goo.gl/XwNNcqPWhL8MgBoT9" className='seemore'><h5>See more</h5></a></figcaption>
                        </figure>

                        <figure onClick={() => openPopup('/building-image.jpg')}>
                            <img src='/building-image.jpg' alt="" />
                            <figcaption>Dr. D. Y. Patil College of Architecture<a href="https://maps.app.goo.gl/oKicBng8mtuto6M47" className='seemore'><h5>See more</h5></a></figcaption>
                        </figure>

                        <figure onClick={() => openPopup('/dyp1.jpg', 'Petra<small> Jordan</small>')}>
    <img src="/dyp1.jpg" alt="Petra" />
    <figcaption>Shantai Auditorium<a href="https://maps.app.goo.gl/JrS4kmBmnQMvJYaS8" className='seemore'><h5>See more</h5></a></figcaption>
</figure>

<figure onClick={() => openPopup('dypmain.jpg', 'Chitrakoot<small> India</small>')}>
    <img src="dypmain.jpg" alt="Chitrakoot, India" />
    <figcaption>Chitrakoot<small> India</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>

<figure onClick={() => openPopup('https://i.ibb.co/KFDtgXB/rio-de-janeiro-capa2019-03-820x430-1140x760.jpg', 'Cristo Redentor<small> Rio de Janeiro</small>')}>
    <img src="https://i.ibb.co/KFDtgXB/rio-de-janeiro-capa2019-03-820x430-1140x760.jpg" alt="Cristo Redentor, RJ" />
    <figcaption>Cristo Redentor<small> Rio de Janeiro</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>

<figure onClick={() => openPopup('https://media.istockphoto.com/photos/taxis-in-times-square-with-7th-avenue-new-york-city-manhattan-picture-id1277102943?b=1&k=20&m=1277102943&s=170667a&w=0&h=tp_vCWDpgrKsUBtl2ZI-8yy2fMHtoZJPcaZBTcnN9nc=', 'NeyYork City<small> US</small>')}>
    <img src="https://media.istockphoto.com/photos/taxis-in-times-square-with-7th-avenue-new-york-city-manhattan-picture-id1277102943?b=1&k=20&m=1277102943&s=170667a&w=0&h=tp_vCWDpgrKsUBtl2ZI-8yy2fMHtoZJPcaZBTcnN9nc=" alt="NeyYorkCity" />
    <figcaption>NeyYork City<small> US</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>

<figure onClick={() => openPopup('https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg', 'Tokyo City<small> Japan</small>')}>
    <img src="https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg" alt="Tokyo" />
    <figcaption>Tokyo City<small> Japan</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>

<figure onClick={() => openPopup('https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/02/Kyoto1.jpg', 'Kyoto<small> Japan</small>')}>
    <img src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/02/Kyoto1.jpg" alt="Kyoto" />
    <figcaption>Kyoto<small> Japan</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>

<figure onClick={() => openPopup('https://images.unsplash.com/photo-1597073420615-7801d12fe2d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80', 'Puducherry<small> India</small>')}>
    <img src="https://images.unsplash.com/photo-1597073420615-7801d12fe2d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" alt="Puducherry, India"/>
    <figcaption>Puducherry<small> India</small><a href="/Comingsoon" className='seemore'><h5>See more</h5></a></figcaption>
</figure>
                    </div>
                </div>
            </div>

            {showPopup && (
                    <div className="popup" onClick={closePopup}>
                        <div className="popup-content">
                        <button class="close-btn" onclick="closePopup()">X</button>
                            <img src={popupContent.src} alt="Popup" className='gallery-popupimg' />
                            <figcaption>{popupContent.caption}</figcaption>
                        </div>
                    </div>
            )}


            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='btn-primary top' title="Go to top">Top</button>

            <footer>
            <h2> Dypiu website &copy; all rights reserved</h2>
        </footer>
        </>
    );
};

export default Gallery;

import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>

        <section className="footer-ntas">
        <iframe 
            src="https://www.dhs.gov/ntas/" 
            name="National Terrorism Advisory System" 
            title="National Terrorism Advisory System" 
            width="170" 
            height="180" 
            scrolling="no" 
            frameborder="0" 
            seamless border="0"
          
            >

            </iframe>
        </section>

        <div className='footer-links'>
            <div className='footer-link-wrappers'>
                <div className='footer-link-items'>
                    <h2>About</h2>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>

                <div className='footer-link-items'>
                    <h2>Contact</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>

            </div>

            <div className='footer-link-wrappers'>
                <div className='footer-link-items'>
                    <h2>Policy</h2>
                    <a href='https://www.cbp.gov/site-policy-notices/accessibility'>Accessibility</a>
                    <a href='https://www.cbp.gov/newsroom/publications/performance-accountability-financial'>Accountability</a>
                    <a href='https://www.cbp.gov/site-policy-notices/privacy-policy'>Privacy</a>
                    <a href='https://www.cbp.gov/site-policy-notices/foia'>FOIA</a>
                    <a href='https://www.cbp.gov/site-policy-notices'>Site Policies</a>
                </div>

                <div className='footer-link-items'>
                    <h2>Government</h2>
                    <a href='https://www.whitehouse.gov/'>The White House</a>
                    <a href='https://www.usa.gov/'>USA.gov</a>
                </div>
            </div>

        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className='social-logo'>
                        travelX <i className="fas fa-plane-departure" />
                    </Link>
                </div>
                <small className="website-rights">Team Dino © 2022</small>
                <div className="social-icons">
                    <a className="social-icon-link facebook"
                    href="https://www.facebook.com/CBPgov"
                    target="_blank"
                    aria-label='Facebook'
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a className="social-icon-link instagram"
                    href="https://www.instagram.com/cbpgov/"
                    target="_blank"
                    aria-label='Instagram'
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a className="social-icon-link twitter"
                    href="https://twitter.com/cbp"
                    target="_blank"
                    aria-label='Twitter'
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a className="social-icon-link youtube"
                    href="https://www.youtube.com/channel/UCVRj-aUsXBrlM8elk3zmLvw"
                    target="_blank"
                    aria-label='Youtube'
                    >
                        <i className="fab fa-youtube"></i>
                    </a>

                    <a className="social-icon-link LinkedIn"
                    href="https://www.linkedin.com/company/customs-and-border-protection/?trk=tyah"
                    target="_blank"
                    aria-label='LinkedIn'
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>

                    <a className="social-icon-link flickr"
                    href="https://www.flickr.com/photos/cbpphotos/"
                    target="_blank"
                    aria-label='Flickr'
                    >
                        <i className="fab fa-flickr"></i>
                    </a>
                    

                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;
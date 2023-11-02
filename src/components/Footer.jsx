import React, { useState } from 'react';
import '../styles/Footer.css';
import footerLogo from '../Assets/Images/vatebra-logo.svg';
import IsoAward from '../Assets/Images/vatebra-ISO-Award.svg';
import facebook from '../Assets/icons/facebook-icon.svg';
import twitter from '../Assets/icons/twittwer-icon.svg';
import linkedin from '../Assets/icons/linkenin-icon.svg';
import instagram from '../Assets/icons/instagram-icon.svg';
import { Link } from 'react-router-dom';



const Footer = () => {


  const locations = [
    { name: 'Nigeria', address: 'Lagos Address: Plot 1187, Abimbola Awoniyi Close, Kasumu Ekemode Street Saka Tinubu,Victoria Island, Lagos, Nigeria.', contact: '0700VATEBRA (0700 828 3272). Info@vatebra.com' },
    { name: 'Ghana', address: 'No.6 Ato Ahio St., Westland Boulevard West Legon, Accra, Ghana', contact: '+233 30 298 6030 sales@vatebra.com.gh support@vatebra.com.gh' },
    { name: 'Kenya', address: 'AGo2, Madonna House, Westlands Road, Nairobi, Kenya', contact: '+254 711 947 773 nairobioffice@vatebra.com' },
    { name: 'Sierra Leone', address: '55A Wilkinson Road, Freetown, Sierra Leone', contact: 'Info@vatebra.com' },
  ];


  const [selectedLocation, setSelectedLocation] = useState(0);

  const handleLocationClick = (index) => {
    setSelectedLocation(index);
  };

  const renderAddressAndContact = () => {
    
    if (selectedLocation !== null) {
      const { address, contact } = locations[selectedLocation];
      return (
        <div>
          <div className="footer_address_container">
            <p>{address}</p>
            <div className='footerHr'></div>
          </div>
          <div className="footer_contact">
            <p>{contact}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='footer_main_container' id='footer_color'>
      <div className='footer_column1'>
        <div className="footer_logo_container">
          <Link to='/' ><img src={footerLogo} alt=" Footer Logo" /></Link>
        </div>
        <div className='footer_location_container'>
          <div className="footer_location">
            {locations.map((location, index) => (
              <div
                key={index}
                className={index === selectedLocation ? 'footer_location_change' : ''}
                onClick={() => handleLocationClick(index)}
              >
                <p>{location.name}</p>
              </div>
            ))}
          </div>
          <div className='footerHr'></div>
        </div>
        {renderAddressAndContact()}
      </div>
      
      <div className='footer_column2'>
       <div className='vatebra_info_container'>
          <div className='footer_column2_part1'>
            <h5  className=' footer_column2_part1h5'>Vatebra</h5>
            <p  className='footer_column2_part1p'><Link to="/aboutus" >About us</Link></p>
            <p className='footer_column2_part1p'><Link to="/aboutus#leadership">Leadership</Link></p>
            <p className='footer_column2_part1p'><Link  to='/subsidiaries' >Subsidiaries</Link></p>
            <p className='footer_column2_part1p' ><Link to='/contactus'>Contact us</Link></p>
          </div>
          <div className='footer_column2_part1'>
            <h5  className=' footer_column2_part1h5'>Info</h5>
            <p  className='footer_column2_part1p'><Link to='/privacy-policy'>Privacy policy</Link></p>
            <p className='footer_column2_part1p'><Link to="/#blog">Blog</Link></p>
            <p className='footer_column2_part1p'><Link to='/subsidiaries'>Our hubs</Link></p>
            <p className='footer_column2_part1p' ><Link to='/aboutus#hod'>HODs</Link></p>
          </div>
       </div>
        <div className='footer_column2_part3'>
          <div className='footer_column2_part3_isoaward'>
            <img src={IsoAward } alt="Vatebra ISO Cert" />
          </div>
          <div className='footersocials_container'>
            <Link to='https://web.facebook.com/vatebra/?_rdc=1&_rdr' target='_blank'><img src={facebook} alt=" Facebook Icon" /></Link>
            <Link to='https://twitter.com/vatebra?lang=en' target='_blank'><img src={twitter} alt=" Twitter Icon" /></Link>
            <Link to='https://www.linkedin.com/company/vatebra/' target='_blank'><img src={linkedin} alt=" Linkenin Icon" /></Link>
            <Link to='https://www.instagram.com/vatebra/?hl=en' target='_blank'><img src={instagram} alt=" Instagram Icon" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

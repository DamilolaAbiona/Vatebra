import React,{useState} from 'react'
import Background from '../components/Background'
import   "../styles/Location.css"
import sketch from "../Assets/Images/SketchOutlined.png"
import tech1 from "../Assets/Images/serious-excited-african-american-employee-working-computer_cleanup 1.png"
import tech2 from "../Assets/Images/Frame-64.png";
import WhyChooseUs from '../components/WhyChooseUs'
import Innovation from '../components/Innovation'
import Intergrity from '../components/Intergrity'
import Professionalism from '../components/Professionalism'
import Quality from '../components/Quality'
import Partnership from '../components/Partnership'
import { NavLink , Link} from 'react-router-dom'
import LocationMap from '../components/LocationMap'
import btn_link_icon from '../Assets/icons/btn-link-icon.svg';
import AboutusCard from '../components/AboutusCard'

const Location = () => {

  const [country, setCountry] = useState("Nigeria");

  const switchCountry = (nation, e) => {
    e.preventDefault();
    setCountry(nation);
  };


  return (
    <>
    {/* <div className='overlay'> */}
    <div className=''>
        <Background>
        {/* <div className="overlay"> */}
        <div className="">
          <AboutusCard 
            heading=""
            text1='Our Locations'
            text2='When you need support, we are here to help'
          />
  
          <div className="Intouch expertisecontainer ">
            <div className=" Intouchsentence expertiseparagraph">
              <p>Footprints</p>
              <h3>
                Enhance your workplace with custom digital solutions and
                strategies
              </h3>
              <div className="colors"></div>
              <div className="footer_column1">
                  <div className="footer_location_container">
                    <div className="footer_location">
                      <p className='locationpg_navlink'>
                        <NavLink 
                          onClick={(e) => switchCountry("Nigeria", e)}
                          to={country === "Nigeria" ? "/contactus" : "/"}
                        >
                          Nigeria
                        </NavLink>
                      </p>
                      <p>
                        <NavLink
                          onClick={(e) => switchCountry("Ghana", e)}
                          to={country === "Ghana" ? "/contactus" : "/"}
                        >
                          Ghana
                        </NavLink>
                      </p>
                      <p>
                        <NavLink
                          onClick={(e) => switchCountry("Kenya", e)}
                          to={country === "Kenya" ? "/contactus" : "/"}
                        >
                          Kenya
                        </NavLink>
                      </p>
                      <p>
                        <NavLink
                          onClick={(e) => switchCountry("Sierra Leone", e)}
                          to={country === "Sierra Leone" ? "/contactus" : "/"}
                        >
                          Sierra Leone
                        </NavLink>
                      </p>
                    </div>
                    <div className="footerHr"></div>
                  </div>
                  {country === "Nigeria" && (
                    <div>
                      <div className="footer_address_container">
                        <p>
                          Lagos Address: <br />
                          Plot 1187, Abimbola Awoniyi Close, Kasumu Ekemode
                          Street Saka Tinubu,Victoria Island, Lagos, Nigeria.
                        </p>
                        <div className="footerHr"></div>
                      </div>
                      <div className="footer_contact">
                        <p>
                          0700VATEBRA (0700 828 3272). <br />
                          Info@vatebra.com
                        </p>
                      </div>
                    </div>
                  )}

                  {country === "Ghana" && (
                    <div>
                      <div className="footer_address_container">
                        <p>
                          No.6 Ato Ahio St., Westland Boulevard West Legon,
                          Accra, Ghana
                        </p>
                        <div className="footerHr"></div>
                      </div>
                      <div className="footer_contact">
                        <p>
                          +233 30 298 6030 <br />
                          sales@vatebra.com.gh
                          <br />
                          support@vatebra.com.gh
                        </p>
                      </div>
                      
                        <Link to='#' target="_blank">
                          <div className="contactus_footer_btn">
                            <p className="contactus_footer_btn_p">Visit Ghana website</p>
                            <img src={btn_link_icon} alt="" className="contactus_footer_btn_icon" />
                          </div>
                        </Link>
                     
                    </div>
                    
                  )}

                  {country === "Kenya" && (
                    <div>
                      <div className="footer_address_container">
                        <p>
                          AGo2, Madonna House, Westlands Road, Nairobi, Kenya
                        </p>
                        <div className="footerHr"></div>
                      </div>
                      <div className="footer_contact">
                        <p>
                          +254 711 947 773
                          <br />
                          nairobioffice@vatebra.com
                        </p>
                      </div>
                      <Link to='#' target="_blank">
                        <div className="contactus_footer_btn">
                          <p className="contactus_footer_btn_p">Visit Kenya website</p>
                          <img src={btn_link_icon} alt="" className="contactus_footer_btn_icon" />
                        </div>
                      </Link>
                    </div>
                  )}

                  {country === "Sierra Leone" && (
                    <div>
                      <div className="footer_address_container">
                        <p>55A Wilkinson Road, Freetown, Sierra Leone</p>
                        <div className="footerHr"></div>
                      </div>
                      <div className="footer_contact">
                        <p>Info@vatebra.com</p>
                      </div>
                      <Link to='#' target="_blank">
                        <div className="contactus_footer_btn">
                          <p className="contactus_footer_btn_p">Visit Sierra Leone website</p>
                          <img src={btn_link_icon} alt="" className="contactus_footer_btn_icon" />
                        </div>
                      </Link>
                    </div>
                  )}
              </div>
            </div>
            <div className=" location professional">
              <LocationMap  country={country}/>
            </div>
          </div>
          
            
        
       
      </div>
      </Background>

       <section className="expertise">
        <div className="expertisecontainer">
          <div className="expertiseparagraph">
            <p>Expertise</p>
            <h3>
              Expert software development tailored to unique business goals
            </h3>
            <div className="colors"></div>
          </div>
          <div className="professional">
            <img src={tech1} alt="" className="techie1 lady_techie" />
            <div className="tech2">
              <img src={tech2} alt=""  className="techie1 man_techie "/><br/>
              <img src={sketch} alt="" className="sketch" />
              <span className="sketch_span">We are Professionals</span>
              <p>
                Our highly skilled software development teams specialize in
                complex projects. <span>Custom designed software and systems that meet
                your business needs.</span>
              </p>
            </div>
          </div>
        </div>
    </section>
      <WhyChooseUs />
      <Innovation />
      <Intergrity />
      <Professionalism />
      <Quality />
      <Partnership />

        </div>
    </>
  )
}

export default Location

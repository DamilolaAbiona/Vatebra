import { useState } from "react";
import "../styles/ContactUs.css";
import Background from "../components/Background";
import "../styles/Products.css";
import loc from "../Assets/Images/loc-envi.png";
import mail from "../Assets/Images/mail-1.png";
import phone from "../Assets/Images/phone-1.png";
import WhyChooseUs from "../components/WhyChooseUs";
import Innovation from "../components/Innovation";
import Intergrity from "../components/Intergrity";
import Professionalism from "../components/Professionalism";
import Quality from "../components/Quality";
import Partnership from "../components/Partnership";
import { Link, NavLink } from "react-router-dom";
import LocationMap from "../components/LocationMap";
import AboutusCard from "../components/AboutusCard";
import btn_link_icon from '../Assets/icons/btn-link-icon.svg';

const ContactUs = () => {

  const [country, setCountry] = useState("Nigeria");

  const switchCountry = (nation, e) => {
    e.preventDefault();
    setCountry(nation);
  };

  return (
    <>
      <div className="Contact ">
        {/* contactUs Card */}

        <Background>
          <div className="">
            <AboutusCard 
              heading='Talk to us'
              text1='Contact us'
              text2='When you need support, we are here to help'
            />

            {/* Get In touch */}
            <div className="Intouch expertisecontainer ">
              <div className=" Intouchsentence expertiseparagraph">
                <p>Get in touch</p>
                <h3>
                  Enhance your workplace with custom digital solutions and
                  strategies
                </h3>
                <div className="colors"></div>
                <div className="footer_column1">
                  <div className="footer_location_container">
                    <div className="footer_location">
                      <p>
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

                <LocationMap country={country}/>
              </div>
            </div>
          </div>
        </Background>
      </div>
      {/* location */}
      <section className="address">
        <div className="addresscontainer ">
          <div className="address1 box">
            <h4>
              <img src={loc} alt="" className="address_icons" />
              Head Office (Lagos)
            </h4>
            <p className="boxp">
              Plot 1187, Abimbola Awoniyi Close, Kasumu{" "}
              <span>Ekemode Street Saka Tinubu,Victoria Island,</span> Lagos,
              Nigeria
            </p>
            <p>
              <img src={phone} alt="" className="address_icons" />
              0700VATEBRA(+0700 828 3272)
            </p>
            <p>
              <img src={mail} alt="" className="address_icons" />
              info@vatebra.com
            </p>
          </div>
          <div className="address2 box">
            <h4>
              <img src={loc} alt="" className="address_icons" /> Abuja Office
            </h4>
            <p className="boxp">
              Suite 302 Fortune Place, No. 8 Nairobi Street,{" "}
              <span>Off Aminu Kano Crescent, Wuse 2, </span>
              Abuja, Nigeria
            </p>
            <p>
              {" "}
              <img src={phone} alt="" className="address_icons" />
              +234-1-9049320, +234-1-2710671-2
            </p>
            <p>
              <img src={mail} alt="" className="address_icons" />
              abujaoffice@vatebra.com
            </p>
          </div>
        </div>
      </section>

      <section className="forms">
        <div className="formscontainer --center-all ">
          <div className="formstart"></div>
          <form
            action="https://formsubmit.co/info@vatebra.com"
            method="POST"
            className=" form"
          >
            <div className="firstname">
              <div className="first inputcommon">
                <label for="firstname" className="labe1">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  required
                />
              </div>
              <div className="email inputcommon">
                <label for="Email" className="labe2">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="subject ">
              <label for="subject" className="labe3">
                Subject
              </label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Enter Subject"
              ></textarea>
              <br />
            </div>
            <div className="message ">
              <label for="subject" className="labe4">
                Message
              </label>
              <textarea
                id="Message"
                name="subject"
                placeholder="Start typing your message"
              ></textarea>
            </div>
            <div className="submit">
              <button className="btn" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <WhyChooseUs />
      <Innovation />
      <Intergrity />
      <Professionalism />
      <Quality />
      <Partnership />

    </>
  );
};

export default ContactUs;

import React from "react";
import "../styles/Subsidiaries.css";
// import Background from "../components/Background";
// import Card from "../components/Card";
import workspace from "../Assets/Images/Screenshot-2023-06-26-at-11.43-1.png";
import { BiLinkExternal } from "react-icons/bi";
import Genesys from "../Assets/Images/Screenshot-2023-06-26-at-11.43-1-(2).png";
import vatpay from "../Assets/Images/Screenshot-2023-06-26-at-11.43-1-(3).png"
import vatacademy from "../Assets/Images/Screenshot-2023-06-26-at-11.43-1-(4).png"
import WhyChooseUs from "../components/WhyChooseUs";
import Innovation from "../components/Innovation";
import Intergrity from "../components/Intergrity";
import Professionalism from "../components/Professionalism";
import Quality from "../components/Quality";
import Partnership from "../components/Partnership";
import { Link } from "react-router-dom";
import AboutusCard from "../components/AboutusCard";

const Subsidiaries = () => {
  return (
   <>
    <div className="">
      <div className="subsidiary">
        <div className="">
          <div className="subsidiary_card">
            <AboutusCard 
              heading=''
              text1='Subsidiaries '
              text2='With our customized software services we analyze, design, develop, implement and maintain custom made solution for your business including related activities.'
            />
          </div>
          <div className="paragraph">
            <p>Our Subsidiaries</p>
          </div>
          {/* Coworking space */}
          <section className="vatworkspace expertise">
            <div className=" workspace expertisecontainer">
              <div className="expertiseparagraph">
                <p>Subsidiary</p>
                <h3 className="subsidiary_expertise_texth3">Vatebra Tech-Hub</h3>
                <p className="vatname subsidiary_expertise_text_1">
                  Vatebra techhub is in partnership with the Bank of industry
                  have a physical presence in Lagos, Bayelsa(Yenogoa and
                  Otu-Orua) and Kaduna states; with plans to expand across the
                  six geo-political zones in Nigeria.
                </p>
                <div className="colors"></div>
                <Link to='https://techhub.vatebra.com/' target="_blank">
                  <button className="subsidiary_btn">
                    View product <BiLinkExternal />
                  </button>
                </Link>
              </div>
              <div className=" professional ">
                <img src={workspace} alt="" className=" workspace1 techie1 subsidiary_img" />
              </div>
            </div>
          </section>
          
       

         
        </div>
      </div>
      {/* Genesys */}
      <section className="expertise genesys_container">
            <div className=" workspace expertisecontainer">
              <div className="  professional ">
                <img src={Genesys} alt="" className=" workspace1 techie1 subsidiary_img" />
              </div>
              <div className="expertiseparagraph">
                <p>Subsidiary</p>
                <h3 className="subsidiary_expertise_texth3">Genesys</h3>
                <p className="vatname subsidiary_expertise_text_1">
                  Genesys integrates data collection, processing & reporting to
                  improve health service effectiveness and efficiency at all
                  levels.
                </p>
                <div className="colors"></div>
                <Link to='https://www.genesys-health.com/' target="_blank">
                  <button className="subsidiary_btn">
                    View product <BiLinkExternal />
                  </button>
                </Link>
              </div>
            </div>
      </section>
      {/* VatPay */}
      <section className="vatworkspace expertise vatpay_container">
            <div className=" workspace expertisecontainer">
              <div className="expertiseparagraph">
                <p>Subsidiary</p>
                <h3 className="subsidiary_expertise_texth3">VatPay</h3>
                <p className="vatname subsidiary_expertise_text_1">
                  Vatebra techhub is in partnership with the Bank of industry
                  have a physical presence in Lagos, Bayelsa(Yenogoa and
                  Otu-Orua) and Kaduna states; with plans to expand across the
                  six geo-political zones in Nigeria.
                </p>
                <div className="colors"></div>
                <Link to='https://vatebrapay.com/' target="_blank">
                  <button className="subsidiary_btn">
                    View product <BiLinkExternal />
                  </button>
                </Link>
              </div>
              <div className="  professional ">
                <img src={vatpay} alt="" className=" workspace1 techie1 subsidiary_img" />
              </div>
            </div>
      </section>
       {/* Vatebra ACademy */}
       <section className="expertise">
            <div className=" workspace expertisecontainer">
              <div className="  professional ">
                <img src={vatacademy} alt="" className=" workspace1 techie1 subsidiary_img" />
              </div>
              <div className="expertiseparagraph">
                <p>Subsidiary</p>
                <h3 className="subsidiary_expertise_texth3">Vatebra Academy</h3>
                <p className="vatname subsidiary_expertise_text_1">
                  Genesys integrates data collection, processing & reporting to
                  improve health service effectiveness and efficiency at all
                  levels.
                </p>
                <div className="colors"></div>
                <Link to='https://vatebra-academy.vercel.app/' target="_blank">
                  <button className="subsidiary_btn">
                    View product <BiLinkExternal />
                  </button>
                </Link>
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
  );
};


export default Subsidiaries;

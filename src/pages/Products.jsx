
import React from "react";
import "../styles/Products.css";

import Acada00 from "../Assets/Images/Acada-logo.png";
import Acada1 from "../Assets/Images/Acada-logo-(1).png";
import Acada2 from "../Assets/Images/Acada-logo-(2).png";
import Acada3 from "../Assets/Images/Acada-logo-(3).png";
import Acada4 from "../Assets/Images/Acada-logo-(4).png";
import Acada5 from "../Assets/Images/Acada-logo-(5).png";
// import Acada6 from "../Assets/Images/Acada-logo-(6).png";
import Acada7 from "../Assets/Images/Acada-logo-(7).png";
import Acada8 from "../Assets/Images/Acada-logo-(8).png";
// import Acada9 from "../Assets/Images/Acada-logo-(9).png";
// import Acada10 from "../Assets/Images/Acada-logo-(10).png";
import Acada11 from "../Assets/Images/Acada-logo-(9).png";
import Acada12 from "../Assets/Images/Acada-logo-(12).png";
import Acada13 from "../Assets/Images/Acada-logo-(12).png";
import tech1 from "../Assets/Images/Frame-63.png";
import tech2 from "../Assets/Images/Frame-64.png";
import sketch from "../Assets/Images/SketchOutlined.png";
import { BiLinkExternal } from "react-icons/bi";
// import Card from "../components/Card";
import Innovation from "../components/Innovation";
import Intergrity from "../components/Intergrity";
import Professionalism from "../components/Professionalism";
import Quality from "../components/Quality";
import Partnership from "../components/Partnership";
import WhyChooseUs from "../components/WhyChooseUs";
import { Link } from "react-router-dom";
import AboutusCard from "../components/AboutusCard";

const Products = () => {
  
  return (
    <>
    <div className="products" >
      
      <div className="overlay "></div>
      <AboutusCard 
        heading='Services'
        text1='Our products'
        text2='With our customized software services we analyze, design, develop, implement and maintain custom made solution for your business including related activities.'
      />
      <div className="paragraph">
        <p>
          Vatebra offers a full range of efficient in-house and outsourced
          payment solutions,{" "}
          <span>
            including electronic payment systems and integration-based
            solutions.
          </span>
        </p>  
      </div>

      {/*** * Projects and Products ****/}
      {/*** * Projects and Products ****/}
      {/*** * Projects and Products ****/}

      <div className="projects --grid-25">
        {/* adverse */}
        <div className="adverse">
          <div className="logo">
            <img src={Acada00} alt="" />
          </div>
          <div className="adversediv">
            <h3>AdServe</h3>
            <p className="adversediv_p">
              An application used to manage advertisements displayed across any
              form of application website.
            </p>
            <Link to='https://adserve.vatebra.com/' target="_blank">
              <button>
                View product <BiLinkExternal />
              </button>
            </Link>
          </div>
        </div>
        {/* Apparaise Me Card */}
        <div>
          <div className="adverse Appraise">
            <div className="logo">
              <img src={Acada1} alt="" />
            </div>
            <div className="adversediv">
              <h3>AppraiseME</h3>
              <p className="adversediv_p">
                An Application used to manage Employee Performance review and
                Appraisals.
              </p>
             <Link to='https://appraiseme.vatebra.com/' target="_blank">
                <button>
                  View product <BiLinkExternal />
                </button>
             </Link>
            </div>
          </div>
        </div>
        {/* ProcureXpress */}
        <div className="adverse Procure">
          <div className="logo">
            <img src={Acada2} alt="" />
          </div>
          <div className="adversediv">
            <h3>ProcureXpress</h3>
            <p className="adversediv_p">
              An application used for the management of procurement processes of
              an organization
            </p>
            <Link to='https://procureexpress.vatebra.com/' target="_blank">
              <button>
                View product <BiLinkExternal />
              </button>
            </Link>
          </div>
        </div>

        {/* Itemify */}
        <div className="adverse Procure">
          <div className="logo">
            <img src={Acada3} alt="" />
          </div>
          <div className="adversediv Itemify">
            <h3>Itemify</h3>
            <p className="adversediv_p">
              A robust application used for the management of assessment items.
              It covers the processes involved from item authoring to Item
              performance analysis.
            </p>
           <Link to='https://itemify.vatebra.com' target="_blank">
            <button>
              View product <BiLinkExternal />
            </button>
           </Link>
          </div>
        </div>
        {/* VatDoc */}
        <div className="adverse VatDoc">
          <div className="logo">
            <img src={Acada4} alt="" />
          </div>
          <div className="adversediv Itemify">
            <h3>VatDoc</h3>
            <p className="adversediv_p">An Electronic Document Management System</p>
              <Link to='https://vatdoc.vatebra.com' target="_blank">
                <button>
                  View product <BiLinkExternal />
                </button>
               </Link>
          </div>
        </div>
        {/* EasyWorka */}
        <div className="adverse EasyWorka">
          <div className="logo">
            <img src={Acada5} alt="" />
          </div>
          <div className="adversediv Itemify">
            <h3>EasyWorka</h3>
            <p className="adversediv_p">
              An application suitable for small to medium scale enterprises
              regarding the processes involved in Human resources management.
            </p>
            <Link to='https://eworka.vatebra.com' target="_blank">
            <button>
              View product <BiLinkExternal />
            </button>
            </Link>
          </div>
        </div>
        {/* Cast A Vote*/}
        {/* <div className="adverse CastVote">
          <div className="logo">
            <img src={Acada6} alt="" />
          </div>
          <div className="adversediv Itemify">
            <h3>Cast-a-vote</h3>
            <p className="adversediv_p">
              An integrated and interactive polling software, it manages your
              election with an easy to use dashboard and fantastic 24/7 support.
            </p>
            <Link to='#' target="_blank">
              <button>
                View product <BiLinkExternal />
              </button>
            </Link>
          </div>
        </div> */}
        {/*e-Test */}
        <div className="adverse Test">
          <div className="logo">
            <img src={Acada7} alt="" />
          </div>
          <div className="adversediv Itemify">
            <h3>e-Test</h3>
            <p className="adversediv_p">
              An integrated and interactive polling software, it manages your
              election with an easy to use dashboard and fantastic 24/7 support.
            </p>
            <Link to='https://etest.vatebra.com' target="_blank">
              <button>
                View product <BiLinkExternal />
              </button>
            </Link>
          </div>
        </div>
        {/* WeApprove */}
        <div className="adverse WeApprove">
          <div className="logo">
            <img src={Acada8} alt="" />
          </div>
          <div className="adversediv Itemify">
            <h3>WeApprove</h3>
            <p className="adversediv_p">About product here</p>
            <Link to='https://we-approve.vatebra.org/Home' target="_blank">
              <button>
                View product <BiLinkExternal />
              </button>
            </Link>
          </div>
        </div>
        {/* ChargePlus */}
        {/* <div className="adverse ChargePlus">
          <div className="logo">
            <img src={Acada9} alt="" />
          </div>
          <div className="adversediv Itemify">
            <h3>ChargePlus</h3>
            <p className="adversediv_p">About product here</p>
            <Link to='#' target="_blank">
              <button>
                View product <BiLinkExternal />
              </button>
            </Link>
          </div>
        </div> */}
        {/* WeShare Card*/}
        {/* <div className="adverse Weshare">
          <div className="logo">
            <img src={Acada10} alt="" />
          </div>
          <div className="adversediv Itemify">
            <h3>WeShare</h3>
            <p className="adversediv_p">About product here</p>
            <Link to='#' target="_blank">
              <button>
                View product <BiLinkExternal />
              </button>
            </Link>
          </div>
        </div> */}
        {/* Verifyer */}
        <div className="adverse Verifyer">
          <div className="logo">
            <img src={Acada11} alt="" />
          </div>
          <div className="adversediv Itemify">
            <h3>Verifyer</h3>
            <p className="adversediv_p">About product here</p>
            <Link to='https://verifyer.vatebra.com' target="_blank">
              <button>
                View product <BiLinkExternal />
              </button>
            </Link>
          </div>
        </div>
        {/* MemberRoom*/}
        <div className="adverse Member room">
          <div className="logo">
            <img src={Acada12} alt="" />
          </div>
          <div className="adversediv Itemify">
            <h3>Memberoom</h3>
            <p className="adversediv_p">About Product Here.</p>
            <Link to='https://memberroom.vatebra.com' target="_blank">
              <button>
                View product <BiLinkExternal />
              </button>
            </Link>
          </div>
        </div>
        {/* Itemify */}
        <div className="adverse Scholar room">
          <div className="logo">
            <img src={Acada13} alt="" />
          </div>
          <div className="adversediv Itemify">
            <h3>Scholaroom</h3>
            <p className="adversediv_p">
              An application that automates the administrative processes of any
              primary or secondary school.
            </p>
            <Link to='https://scholarroom.vatebra.com/' target="_blank">
              <button>
                View product <BiLinkExternal />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Expertise Section */}
      
      </div>
  
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
    </>
  );
};



export default Products;

import {useEffect, useRef} from 'react';
import '../styles/Home.css';
import award from '../Assets/Images/award.png';
import LearnMoreBtn from '../components/LearnMoreBtn';
// import caretleft from '../Assets/Images/caret-left.svg';
import ibedc from '../Assets/Images/ibe-dc.svg';
import unizik from '../Assets/Images/uni-zik.svg';
import nvti from '../Assets/Images/nvt.svg';
import nitd from '../Assets/Images/ntd.svg';
import gtbank from '../Assets/Images/gt-bank.svg';
import ikejaelectrics from '../Assets/Images/ikeja-electrics.svg';
import ekedc from '../Assets/Images/ek-edc.svg';
import lumen from '../Assets/Images/lu-men.svg';
// import caretright from '../Assets/Images/caret-right.svg';
import ourThinkingPics from '../Assets/Images/ourThinking-pics.svg';
import homenet1 from '../Assets/Images/home-net1.svg';
import healthIcon from '../Assets/icons/health-icon.svg';
import portalIcon from '../Assets/icons/portal-icon.svg';
import cloudIcon from '../Assets/icons/cloud-icon.svg';
import energyIcon from '../Assets/icons/energy-icon.svg';
import customizedIcon from '../Assets/icons/customized-icon.svg';
import vatepayIcon from '../Assets/icons/vatepay-icon.svg';
import WhyChooseUs from '../components/WhyChooseUs';
import Innovation from '../components/Innovation';
import Intergrity from '../components/Intergrity';
import Professionalism from '../components/Professionalism';
import Quality from '../components/Quality';
import Partnership from '../components/Partnership';
import HomeBlog from '../components/HomeBlog';
import CountryFlags from '../components/CountryFlags';
import VatepayLTDCrad from '../components/VatepayLTDCrad';
import { Link, useLocation } from 'react-router-dom';
import Marquee from "react-fast-marquee";



const Home = () => {
  const blogSectionRef = useRef(null);
  const location = useLocation();


  useEffect(() => {
    if (location.hash === '#blog' && blogSectionRef.current) {
      blogSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

 return (
    <>
      <div className="home_section1_container">
        <div className="home_section1">
          <div className='home_section1_text_container'>
            <div className='home_section1_heading'>
              <h3>Innovations beyond now</h3>
              <h5>Re-inventing Africa with technology</h5>
            </div>
            <div  >
              <p className='home_section1_text'>
                Welcome to our world of cutting-edge software solutions!
                We are a leading company dedicated to providing exceptional
                technology services to both the private and public sectors. 
                transformative change.
              </p>
            </div>
            <div className='homeBtn_container'>
             <Link to='/contactus'> <LearnMoreBtn btn_text= 'Learn more' /></Link>
            </div>
          </div>
          <div className='award_container'>
            <img src={award } alt="Award " />
          </div>
        </div>
      </div>

    
      <div className='home_section2_container'>
          <div className='homeCards_container'>
            <div className='homeCard1' id="productsSection">
              <h4 className='homeCard1h4'>Our Products</h4>
              <p className='homeCard1p'>
                Deploy faster & scale easier with our OEM & cloud service. Hyperscale with vast infrastructure for space, power and excellence with less operational spend.
              </p>
              <div className='homeBtncard_container'>
                <Link to='/products'><LearnMoreBtn btn_text= 'Learn more' /></Link>
              </div>
            </div>
            <div className='homeCard2'>
              <h4 className='homeCard2h4' >Subsidiaries</h4>
              <p className='homeCard2p'>
                Vatebra offers a full range of efficient in-house and outsourced payment solutions, including electronic payment systems and integration-based solutions.
              </p>
              <div className='homeBtncard_container'>
                <Link to='/subsidiaries'><LearnMoreBtn btn_text= 'Learn more' /></Link>
              </div>
            </div>
            <div className='homeCard1'>
              <h4 className='homeCard1h4'>Our Locations</h4>
              <p className='homeCard1p'>
                With our customized software services we analyze, design, develop, implement and maintain custom made solution for your business including related activities.
              </p>
              <div className='homeBtncard_container'>
                <Link to='/contactus'><LearnMoreBtn btn_text= 'Learn more' className='card1btn_color' /></Link>
              </div>
            </div>
          </div>
          <div className='homeSponsors_container'>
            <div className='homeSponsors_heading'>
              <p>They trust us</p>
            </div>
            <Marquee
            gradient={false}
            speed={80}
            gradientWidth={30}
            gradientColor={[166, 166, 166]}
          >
            <div className="homeSponsorsGallery_container">
              {/* <img src={caretleft} alt="Caret Left"  className='homeSponsorsGallery_icon1'/> */}
              <img
                src={ibedc}
                alt="IBEDC "
                className="homeSponsorsGallery_icon"
              />
              <img
                src={unizik}
                alt="unizik "
                className="homeSponsorsGallery_icon"
              />
              <img
                src={nvti}
                alt="NVTI "
                className="homeSponsorsGallery_icon"
              />
              <img
                src={nitd}
                alt="NITD "
                className="homeSponsorsGallery_icon"
              />
              <img
                src={gtbank}
                alt="GTBANK "
                className="homeSponsorsGallery_icon"
              />
              <img
                src={ikejaelectrics}
                alt="IKEJA ELECTRICS "
                className="homeSponsorsGallery_icon"
              />
              <img
                src={ekedc}
                alt="EKEDC"
                className="homeSponsorsGallery_icon"
              />
              <img
                src={lumen}
                alt="EKEDC"
                className="homeSponsorsGallery_icon"
              />
              {/* <img src={caretright} alt="Caret Right" className='homeSponsorsGallery_icon1'/> */}
            </div>
          </Marquee>
          </div>

          <div className='home_section3_container'>
            <div className='home_section3_column1'>
              <h6 className='home_section3_column1h6'>Our Thinking</h6>
              <p className='home_section3_column1p'>
                We are supporting business processes to navigate complexity and reinvent them digitally
              </p>
              <div className='homehr_line'></div>
            </div>
            <div className='home_section3_column2'>
              <div className='homeOurThinking_Pics'>
                <img src={ourThinkingPics} alt="Our Thinking Pics" />
              </div>
              <div className='homeOurThinking_Text'>
                <p className='homeOurThinking_Textp'>
                  We are poised to create Africa’s leading technology company by attaining sustainable and consistent growth in providing user preferred solutions and services that facilitate superior value while solving real life problems using technology.
                </p>
                <div className='discovermore_btn'>
                  <Link to='/products'><LearnMoreBtn btn_text='Discover more' /></Link>
                </div>
              </div>
            </div>
          </div>

          <div className='homenet1_img_container'>
            <img src={homenet1} alt="Home net 1" />
          </div>
      </div>

      <div className='home_section4_container '>
        <div className='home_section4_column1'>
          <h6 className='home_section4_column1h6' >What we offer</h6>
          <p className='home_section4_column1p'>An ardent dedication to <br/> deliver unorthodox value</p>
          <div className='homehr_line  home_section4_hrline'></div>
          <div className='home_section4_btn'>
            <Link to='/products'><p className='home_section4_btn_p'>See our products</p></Link>
          </div>
        </div>
        <div className='home_section4_column2'>
            <div className='home_section4_column2_part1'>
              <div className='healthsolu_container'>
                <div className='healthsolu_icon'>
                  <img src={healthIcon} alt=" health Icon" className='soluIcon_common' />
                </div>
                <div>
                  <h4 className='solutionsHead_common'>Health Solutions</h4>
                  <p className='solutionsText_common'>
                    We create and offer human centered designs to create scalable and innovative health technology solutions based on research and best practices.
                  </p>
                  {/* <Link to='/products'><p className='solutions_readmore'>Read more</p></Link> */}
                </div>
              </div>
              <div className='portalsolu_container healthsolu_container'>
                <div className='portalsolu_icon'>
                  <img src={portalIcon} alt=" portal Icon" className='soluIcon_common'  />
                </div>
                <div>
                  <h4 className='solutionsHead_common'>Portal Solutions</h4>
                  <p className='solutionsText_common'>
                   Whether a project involves the creation of a city portal, a niche portal for an industry or special interest portal. We create portals that allows you to meet your business needs.
                  </p>
                  {/* <Link to='/products'><p className='solutions_readmore'>Read more</p></Link> */}
                </div>
              </div>
              <div className='cloudsolu_container healthsolu_container'>
                <div className='cloudsolu_icon'>
                  <img src={cloudIcon} alt=" cloudIcon" className='soluIcon_common' />
                </div>
                <div>
                  <h4 className='solutionsHead_common'>OEM & Cloud Solutions</h4>
                  <p className='solutionsText_common'>
                    We offer data integration, reporting, and predictive analytics solutions to help you gain a competitive edge in your industry.
                  </p>
                  {/* <Link to='/products'><p className='solutions_readmore'>Read more</p></Link> */}
                </div>
              </div>
            </div>
            <div className='home_section4_column2_part2'>
              <div className='energysolu_container healthsolu_container'>
                <div className='energysolu_icon'>
                  <img src={energyIcon} alt=" energy Icon" className='soluIcon_common' />
                </div>
                <div>
                  <h4 className='solutionsHead_common'>Energy Solutions</h4>
                  <p className='solutionsText_common'>
                    We are changing the narrative on how power, energy and supply chain solutions are implemented by providing solutions that meet global quality.
                  </p>
                  {/* <Link to='/products'><p className='solutions_readmore'>Read more</p></Link> */}
                </div>
              </div>
              <div className='customizedsolu_container healthsolu_container'>
                <div className='customizedsolu_icon'>
                  <img src={customizedIcon} alt="customized Icon"  className='soluIcon_common'/>
                </div>
                <div>
                  <h4 className='solutionsHead_common'>Customized Solutions</h4>
                  <p className='solutionsText_common'>
                    With our customized software services we analyze, design, develop, implement and maintain custom made solution for your business including related activities.
                  </p>
                  {/* <Link to='/products'><p className='solutions_readmore'>Read more</p></Link> */}
                </div>
              </div>
              <div className='vatepaysolu_container healthsolu_container'>
                <div className='vatepaysolu_icon'>
                  <img src={vatepayIcon} alt=" vatepay Icon"  className='soluIcon_common'/>
                </div>
                <div>
                  <h4 className='solutionsHead_common'>Payment Solutions</h4>
                  <p className='solutionsText_common'>
                    Vatebra offers a full range of efficient in-house and outsourced payment solutions, including electronic payment systems and integration-based solutions.
                  </p>
                  {/* <Link to='/products'><p className='solutions_readmore'>Read more</p></Link> */}
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className='home_section5_container'>
        <WhyChooseUs />
      </div>
      <div className='home_countryflags_container'>
        <CountryFlags />
      </div>
      <div className='home_section6_container'>
        <Innovation />
      </div>

      <div className='home_section7_container'>
        <Intergrity />
      </div>

      <div className='home_section8_container'>
        <Professionalism />
      </div>

      <div className='home_section9_container'>
        <Quality />
      </div>
      <div className='home_section10_container'>
        <Partnership />
      </div>
      <div className='home_section11_container' ref={blogSectionRef} id="blog">
        <HomeBlog />
      </div>
      <div className='home_section12_container'>
       <VatepayLTDCrad />
      </div>
    </>
  )
}

export default Home
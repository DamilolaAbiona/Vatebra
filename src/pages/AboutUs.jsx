import React, { useRef, useState, useEffect } from 'react';
import '../styles/AboutUs.css';
import aboutgallery1_img from '../Assets/Images/aboutus-page-gallery 1.svg';
import aboutgallery2_img from '../Assets/Images/aboutus-page-gallery2.png';
import intergbgImg from '../Assets/Images/integrity-bg-img.svg';
import healthIcon from '../Assets/icons/health-icon.svg';
import aboutgallery3_img from '../Assets/Images/aboutus-page-gallery 3.svg';
import aboutgallery4_img from '../Assets/Images/aboutus-page-gallery 4.svg';
import aboutgallery5_img from '../Assets/Images/aboutus-page-gallery 5.svg';
import aboutgallery6_img from '../Assets/Images/aboutus-page-gallery 6.svg';
import aboutgallery7_img from '../Assets/Images/aboutus-page-gallery 7.svg';
import LearnMoreBtn from '../components/LearnMoreBtn';
import Leadership from '../components/Leadership';
import aboutus_custo_icon from '../Assets/Images/aboutus_custo-icon.svg';
import Innovation from '../components/Innovation';
import Intergrity from '../components/Intergrity';
import Professionalism from '../components/Professionalism';
import Quality from '../components/Quality';
import Partnership from '../components/Partnership';
import AboutusCard from '../components/AboutusCard';
import { useLocation } from 'react-router-dom';


const AboutUs = () => {
  const leaderShipSectionRef = useRef(null);
  const hodSectionRef = useRef(null);
  const location = useLocation();

  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () =>{
    setShowMore(!showMore);
  }

  useEffect(() => {
    if (location.hash === '#leadership' && leaderShipSectionRef.current) {
      leaderShipSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);


  useEffect(() => {
    if (location.hash === '#hod' && hodSectionRef.current) {
      setShowMore(false)
      hodSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  
  return (
    <>

      <div className='aboutUs_section1_container' >
        <AboutusCard 
          heading="About us" 
          text1="Who we are"
          text2=" We are an ICT company in Africa with competency in the delivery of cutting-edge Software Solutions in the Private and Public Sector."
        />
        <div className='aboutUs_section1_column2'>
          <p className='aboutUs_section1_column2_text1'>
            History
          </p>
          <h3 className='aboutUs_section1_column2_h3'>
            Get to know us
          </h3>
          <p className='aboutUs_section1_column2_text2'>
            We are an ICT company in Africa with competency in the delivery of cutting-edge Software Solutions in the Private and Public Sector.Vatebra was established in 2003 as Fleet Technologies Limited in order to bridge the gap in the provision of competent and dependable Software Solutions.
            On the 7th of April, 2016, we rebranded and changed our name from Fleet Technologies Limited to Vatebra. The Rebranding was born out of the need to position ourselves as the IT backbone of the African Economy.
            We aim at meeting the need for Innovations Beyond Now
          </p>
        </div>
        <div className='aboutUs_section2_container'>
          <div className='aboutUs_section2_column1'>
            <p className='aboutUs_section2_column1p'>
              Who we are
            </p>
            <h4 className='aboutUs_section2_column1h4'>
              Enabling solutions & systems that meet business needs for today’s digital universe
            </h4>
            <div className='abouthr_line'></div>
          </div>

          <div className='aboutUs_section2_column2'>
              <div className='aboutusgallery1_img'>
                <img src={aboutgallery1_img} alt=" gallery 1" />
              </div>
              <div className='aboutusgallery2_img'>

                  <img src={aboutgallery2_img} alt=" gallery 2"
                  className='aboutusgallery2_img_aboutgallery2_img' />

                <div className='aboutusCustosolu_container'>
                  <div className='aboutusCustosolu_icon'>
                    <img src={aboutus_custo_icon} alt=" health Icon" className='aboutus_custo_img' />
                  </div>
                  <div className='aboutus_custo_col'>
                    <h4 className='aboutusgallery2Head_common'>
                      Customized Solutions
                    </h4>
                    <p className='aboutusgallery2Text_common'>
                      With our customized software services we analyze, design, develop, implement and maintain custom made solution for your business including related activities.
                    </p>
                    {/* <p className='solutions_readmore'>Read more</p> */}
                  </div>
              </div>
              </div>
          </div>
        </div>
      </div>

      <div className='aboutUs_section3_container'>
        <div className='aboutUs_section3_part1_container'>
          <p className='aboutUs_section3_part1p'>
            Our culture
          </p>
          <div className='healthsolu_container aboutUs_section3' >
                <div className='healthsolu_icon'>
                  <img src={healthIcon} alt=" health Icon" className='soluIcon_common' />
                </div>
                <div>
                  <h4 className='aboutUs_section3Head_common'>
                    Vision
                  </h4>
                  <p className='aboutUs_section3Text_common'>
                    To be the foremost provider of Information Technology Solutions in Africa.
                  </p>
                  {/* <p className='solutions_readmore'>Read more</p> */}
                </div>
          </div>
          <div className='healthsolu_container aboutUs_section3'>
                <div className='healthsolu_icon'>
                  <img src={healthIcon} alt=" health Icon" className='soluIcon_common' />
                </div>
                <div>
                  <h4 className='aboutUs_section3Head_common'>
                  Mission
                  </h4>
                  <p className='aboutUs_section3Text_common'>
                    Solving real-life problems using Information Technology
                  </p>
                  {/* <p className='solutions_readmore'>Read more</p> */}
                </div>
          </div>

        </div>

      <div  className='integritybgImg_comtainer'>
          <img src={intergbgImg} alt=" integrity net img" />
      </div>
          
      </div>
      
      <div className='aboutUs_section4_container' ref={leaderShipSectionRef} id="leadership">
        <div className='aboutUs_section4_part1'>
            <p className='aboutUs_section4_part1p'>Our people</p>
            <h4 className='aboutUs_section4_part1h4'>
              Board of Directors
            </h4>
            <div className='abouthr_line hr_rule_dir'></div>
        </div>
        <div className='aboutUs_section4_part2_gallery'>

          <div  className='aboutUs_section4_part2_gallery_container'>
            <div className='aboutUs_section4_img_wrapper'>
              <img src={aboutgallery3_img} alt=" gallery 3" className='aboutUs_section4_img_wrapper_img' />
              <div className='aboutUs_section4_img_overlay'>
                <div className='aboutUs_section4_img_overlay_text'>
                  <h3 className='aboutUs_section4_img_overlay_texth3'>Augustine O. Avwunufe</h3>
                  <p className='aboutUs_section4_img_overlay_textp'>Chairman</p>
                </div>
              </div>
            </div>
          </div>

          <div  className='aboutUs_section4_part2_gallery_container'>
            <div className='aboutUs_section4_img_wrapper'>
              <img src={aboutgallery4_img} alt=" gallery 4" />
              <div className='aboutUs_section4_img_overlay'>
                <div className='aboutUs_section4_img_overlay_text'>
                  <h3 className='aboutUs_section4_img_overlay_texth3'>Kunle Akinniran</h3>
                  <p className='aboutUs_section4_img_overlay_textp'>MANAGING DIRECTOR / CEO</p>
                </div>
              </div>
            </div>
          </div>

          <div  className='aboutUs_section4_part2_gallery_container'>
            <div className='aboutUs_section4_img_wrapper'>
              <img src={aboutgallery5_img} alt=" gallery 5" />
              <div className='aboutUs_section4_img_overlay'>
                <div className='aboutUs_section4_img_overlay_text'>
                  <h3 className='aboutUs_section4_img_overlay_texth3'>Mike Aigbe</h3>
                  <p className='aboutUs_section4_img_overlay_textp'>DEPUTY MANAGING DIRECTOR</p>
                </div>
              </div>
            </div>
          </div>

          <div  className='aboutUs_section4_part2_gallery_container'>
            <div className='aboutUs_section4_img_wrapper'>
              <img src={aboutgallery6_img} alt="gallery 6" />
              <div className='aboutUs_section4_img_overlay'>
                <div className='aboutUs_section4_img_overlay_text'>
                  <h3 className='aboutUs_section4_img_overlay_texth3'>Oluremi Bendega</h3>
                  <p className='aboutUs_section4_img_overlay_textp'>NON-EXECUTIVE</p>
                </div>
              </div>
            </div>
          </div>

          <div  className='aboutUs_section4_part2_gallery_container'>
            <div className='aboutUs_section4_img_wrapper'>
              <img src={aboutgallery7_img} alt=" gallery 7" />
              <div className='aboutUs_section4_img_overlay'>
                <div className='aboutUs_section4_img_overlay_text'>
                  <h3 className='aboutUs_section4_img_overlay_texth3'>Oluwole Adeoye</h3>
                  <p className='aboutUs_section4_img_overlay_textp'>NON-EXECUTIVE</p>
                </div>
              </div>
            </div>
          </div>
          
      </div>

      {
        showMore? (
          <div className='aboutusBtn_container' onClick={handleShowMore}>
          <LearnMoreBtn btn_text= 'show more' />
        </div>
        ) 
        : 
        (
          <div className='aboutusBtn_container' onClick={handleShowMore}>
          <LearnMoreBtn btn_text= 'show less' />
        </div>
        )
      }

      </div>
      

      <div ref={hodSectionRef} id="hod">
      {
        showMore?  "" : 
        (
          <div className='aboutUs_section5_container' >
          <Leadership />
        </div>
        )
      }
      </div>
      
      <div className='aboutUs_section6_container'>
        <Innovation />
      </div>
      <div className='aboutUs_section7_container'>
       <Intergrity />
      </div>
      <div className='aboutUs_section8_container'>
       <Professionalism />
      </div>
      <div className='aboutUs_section9_container'>
        <Quality />
      </div>
      <div className='aboutUs_section10_container'>
        <Partnership />
      </div>
    </>
  )
}

export default AboutUs
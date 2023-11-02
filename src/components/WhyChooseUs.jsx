import React from 'react';
import '../styles/WhyChooseUs.css';
import expertiseicon from '../Assets/icons/home-expertise-icon.svg';
import likeicon from '../Assets/icons/home-like-icon.svg';
import timelyicon from '../Assets/icons/home-timely-icon.svg';


const WhyChooseUs = () => {

  return (
    <div className='homewhyChooseUs_main_container'>
      <div className='homewhyChooseUs_head_container'>
        <div className='homewhyChooseUs_head'>
          <h6 className='homewhyChooseUs_headh6'>Why choose us?</h6>
          <p className='homewhyChooseUs_headp'>
            Re-inventing Africa with Technology
          </p>
        </div>
        <div className='hometimely_container '></div>
      </div>
      <div className='homewhyChooseUs_column_container'>
        <div className='homeexpertise_container'>
          <div className='homeexpertiseicon_container'>
            <img src={expertiseicon} alt="expertise icon" />
          </div>
          <div >
            <h4 className='homeexpertiseh4'>
              Expertise and Experience
            </h4>
            <p className='homeexpertise_text'>
              We have successfully completed numerous projects for clients in both private and public sectors, earning their trust and satisfaction.
            </p>
          </div>
        </div>
        <div className='homeexpertise_container'>
          <div className='homeexpertiseicon_container'>
            <img src={likeicon} alt="like icon" />
          </div>
          <div >
            <h4 className='homeexpertiseh4'>
              Quality Assurance
            </h4>
            <p className='homeexpertise_text'>
              Our rigorous quality assurance processes ensure that each project undergoes thorough testing, security assessments, and code reviews to guarantee optimal performance and reliability.
            </p>
          </div>
        </div>
        <div className='homeexpertise_container '>
          <div className='homeexpertiseicon_container'>
            <img src={timelyicon} alt="timely icon" />
          </div>
          <div >
            <h4 className='homeexpertiseh4'>
              Timely Delivery
            </h4>
            <p className='homeexpertise_text'>
              Our team follows efficient project management methodologies to ensure timely delivery without compromising on quality.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WhyChooseUs;
import React from 'react';
import '../styles/AboutUs.css';

const AboutusCard = ({heading, text1, text2}) => {


  return (
    <div>
        <div className='aboutUs_section1_column1'>
          <p className='aboutUs_section1_heading'>
            {heading}
          </p>
          <div className='aboutUs_section1_column1_flex'>
            <h3 className='aboutUs_section1_column1_flexh3'>
                {text1}
            </h3>
            <p className='aboutUs_section1_column1_flexp'>
                {text2}
            </p>
          </div>

        </div>
    </div>
  )
}

export default AboutusCard;
import React from 'react';
import '../styles/LearnMoreBtn.css';

const LearnMoreBtn = ({btn_text}) => {

  return (
    <div className='LearnMoreBtn_container'>
      <p className='LearnMoreBtn_containerp'>{btn_text}</p>
    </div>
  )
}

export default LearnMoreBtn
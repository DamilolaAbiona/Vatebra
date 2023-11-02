import React from 'react';
import '../styles/Intergrity.css';
import integerityimg  from '../Assets/Images/MicrosoftTeams-image.png';
import intergbgImg from '../Assets/Images/integrity-bg-img.svg';

const Intergrity = () => {

  return (
    <div className='homeintergrity_main_container'>
        <div className='homeintergrity_container'>
            <div className='homeintergrity_gallery'>
                <img src={integerityimg} alt=" integerity img" />
            </div>
            <div className='homeintergrity_text'>
                <p className='homeintergrity_text1'>Core value</p>
                <h3 className='homeintergrity_texth3'>
                    Integrity
                </h3>
                <p className='homeintergrity_text2'>
                    Integrity creates trust. As an organization, collectively, it’s our most valuable asset. Individually, it’s the constant choice to infuse every action with honesty, fairness, and respect for clients and colleagues alike.
                </p>
            </div>
        </div>
        <div  className='integritybgImg_comtainer'>
            <img src={intergbgImg} alt=" integrity net img" />
        </div>
    </div>
  )
}

export default Intergrity;
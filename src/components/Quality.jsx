import React from 'react';
import '../styles/Intergrity.css';
import qualityimg  from '../Assets/Images/quality-img.svg';
import intergbgImg from '../Assets/Images/integrity-bg-img.svg';

const Quality = () => {
  return (
    <div className='homeintergrity_main_container'>
        <div className='homeintergrity_container'>
            <div className='homeintergrity_gallery'>
                <img src={qualityimg} alt=" quality img" />
            </div>
            <div className='homeintergrity_text'>
                <p className='homeintergrity_text1'>Core value</p>
                <h3 className='homeintergrity_texth3'>
                    Quality
                </h3>
                <p className='homeintergrity_text2'>
                    We strive to set the highest standard of quality in everything we do. We always want to drive towards “the NEXT” great thing! By constantly challenging ourselves to improve and break new ground.
                </p>
            </div>
        </div>
        <div  className='integritybgImg_comtainer'>
            <img src={intergbgImg} alt=" integrity net img" />
        </div>
</div>
  )
}

export default Quality;
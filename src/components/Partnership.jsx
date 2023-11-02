import React from 'react';
import '../styles/Partnership.css';
import prartnetImg from '../Assets/Images/partnership-net-img.svg';
import partgallery1 from '../Assets/Images/partnership-gallerry1.png';
import partgallery2 from '../Assets/Images/partnership-gallerry-2.png';

const Partnership = () => {

  return (
    <div className='partnership_main_container'>
        <div className='partnershipbgImg_container'>
            <img src={prartnetImg} alt="partnership net Img" />
        </div>

        <div className='partnership_gallery_container'>
            <div className='partnership_gallery_column1'>
                <img src={partgallery1} alt="partnership gallery 1" />
            </div>
            <div className='partnership_gallery_column2'>
                <div className='partnership_gallery_part1'>
                    <p className='partnership_gallery_part1_text1'>Core value</p>
                    <h4 className='partnership_gallery_part1h4'>Partnership</h4>
                    <p className='partnership_gallery_part1_text2'>
                        Partnership demonstrates the immeasurable power of our shared values and collective effort to effect positive, ground-breaking change and deliver excellence for our customers, colleagues, and communities.
                    </p>
                </div>
                <div className='partnership_gallery_part2'>
                    <img src={partgallery2} alt="partnership gallery 2" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partnership;
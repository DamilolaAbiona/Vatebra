import React from 'react';
import '../styles/Innovation.css';
import innogallery1 from '../Assets/Images/innovation-img-1.png';
import innogallery2 from '../Assets/Images/innovation-img-2.png';


const Innovation = () => {

  return (
    <div className='homeinnovation_main_container'>


        <h3 className='homecorevalues_heading'>
            Our core values
        </h3>

        <div className='homeinnovation_container'>
            <div className='homeinnovation_text_container'>
                <h3 className='homeinnovation_texth3' >Innovation</h3>
                <p className='homeinnovation_textp'>
                    Innovation motivates action: to take risks, encourage curiosity and new ideas, learn from mistakes, and constantly strive to exceed expectations. Through innovation, we generate solutions for our customers and raise the bar — both within our workplace and throughout our industry.
                </p>
            </div>
            <div className='homeinnovation_gallery_container'>
                <div className='homeinnovation_gallery1'>
                    <img src={innogallery1} alt=" innovation gallery 1" className='homeinnovation_gallery1img' />
                </div>
                <div className='homeinnovation_gallery2'>
                    <img src={innogallery2} alt=" innovation gallery 2" className='homeinnovation_gallery2img' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Innovation;
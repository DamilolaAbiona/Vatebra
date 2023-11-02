import React from 'react'
import '../styles/Innovation.css';
import profimg1 from '../Assets/Images/professionalism-gallery-img-1.png';
import profimg2 from '../Assets/Images/professionalism-gallery-img-2.svg';
import profnetImg from '../Assets/Images/proffesionalism-net-img.svg'

const Professionalism = () => {
  return (
    <div className='homeprofessionalism_main_container'>
        <div className='professionalismbgImg_container'>
            <img src={profnetImg} alt="professionalism net Img" />
        </div>

        <div className='homeprofessionalism_container'>
            <div className='homeinnovation_container '>
                <div className='homeinnovation_text_container professionalism_text_container'>
                    <p className='professionalismcorevalues_heading'>
                        Core value
                    </p>
                    <h3 className='homeinnovation_texth3' >Professionalism</h3>
                    <p className='homeinnovation_textp'>
                        Professionalism generates excitement for what we do and how we do it. With Passion at the heart of everything we do, we nurture ideas, inspire excellence, and find creative ways to eliminate obstacles for cultivating growth.
                    </p>
                </div>
                <div className='homeinnovation_gallery_container'>
                    <div className='homeinnovation_gallery1 professionalism_gallery1'>
                        <img src={profimg1} alt=" professionalism gallery 1" />
                    </div>
                    <div className='homeinnovation_gallery2'>
                        <img src={profimg2} alt=" professionalism gallery 2" />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Professionalism;
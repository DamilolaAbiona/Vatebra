import React from 'react';
import '../styles/VatepayLTDCrad.css';
import vatepaymd_img from '../Assets/Images/md-vatepaycard-img.svg';
import vatepay3star from '../Assets/Images/vatepay-3-star.svg';
import vatepaycardmenu from '../Assets/icons/vatepay-md-MenuFold.svg';


const VatepayLTDCrad = () => {


  return (
    <div className='VatepayCrad_main_container'>
        <div className='VatepayCrad_container'>
            <div className='mdVatepayCrad'>
                <div className='mdVatepayCrad_menu_container'>
                    <img src={vatepaycardmenu} alt="vatepay card menu"  className='vatepaycardmenu_img'/>
                </div>
                <div className='mdVatepayCrad_img'>
                    <img src={vatepaymd_img} alt="Vatepay md img" />
                </div>
                <div className='mdVatepayCrad_column2'>
                    <h3 className='mdVatepayCradh3'>
                        Onyinye Dan-Nwachukwu
                    </h3>
                    <h5 className='mdVatepayCradh5'>
                        MD - Vatpay Ltd
                    </h5>
                    <div className='vatepay3_star'>
                        <img src={vatepay3star} alt=" 3 star img" />
                    </div>
                    <p className='mdVatepayCradp'>
                        The GENESYS solutions is an awesome innovation that has helped
                        us in documentations, archiving and management in the hospital.
                    </p>
                </div>
            </div>
            <div className='mdVatepayCrad'>
                <div className='mdVatepayCrad_menu_container'>
                    <img src={vatepaycardmenu} alt="vatepay card menu"  className='vatepaycardmenu_img'/>
                </div>
                <div className='mdVatepayCrad_img'>
                    <img src={vatepaymd_img} alt="Vatepay md img" />
                </div>
                <div className='mdVatepayCrad_column2'>
                    <h3 className='mdVatepayCradh3'>
                        Onyinye Dan-Nwachukwu
                    </h3>
                    <h5 className='mdVatepayCradh5'>
                        MD - Vatpay Ltd
                    </h5>
                    <div className='vatepay3_star'>
                        <img src={vatepay3star} alt=" 3 star img" />
                    </div>
                    <p className='mdVatepayCradp'>
                        The GENESYS solutions is an awesome innovation that has helped
                        us in documentations, archiving and management in the hospital.
                    </p>
                </div>
            </div>
            <div className='mdVatepayCrad'>
                <div className='mdVatepayCrad_menu_container'>
                    <img src={vatepaycardmenu} alt="vatepay card menu"  className='vatepaycardmenu_img'/>
                </div>
                <div className='mdVatepayCrad_img'>
                    <img src={vatepaymd_img} alt="Vatepay md img" />
                </div>
                <div className='mdVatepayCrad_column2'>
                    <h3 className='mdVatepayCradh3'>
                        Onyinye Dan-Nwachukwu
                    </h3>
                    <h5 className='mdVatepayCradh5'>
                        MD - Vatpay Ltd
                    </h5>
                    <div className='vatepay3_star'>
                        <img src={vatepay3star} alt=" 3 star img" />
                    </div>
                    <p className='mdVatepayCradp'>
                        The GENESYS solutions is an awesome innovation that has helped
                        us in documentations, archiving and management in the hospital.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VatepayLTDCrad;
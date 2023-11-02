import React from 'react';
import '../styles/CountryFlags.css';
import nigeriaFlag3d from '../Assets/Images/nigeria-flag-3d.svg';
import ghanaFlag3d from '../Assets/Images/ghana-flag-3d.svg';
import sierraleoneFlag3d from '../Assets/Images/sierra-leone-flag-3d.svg';
import kenyaFlag3d from '../Assets/Images/kenya-flag-3d.svg';
import { Link } from 'react-router-dom';

const CountryFlags = () => {

  return (
    <div className='countryFlag_main_container'>
         <div className='countryFlag_container'>
            <div className='nigflag_container'>
                <p className='nigflag_containerp'>Nigeria</p>
                <Link to='/'>
                    <img src={nigeriaFlag3d} alt="Nigeria Flag 3D" className='nigflag_container_icon' />
                </Link>
            </div>
            <div className='nigflag_container'>
                <p className='nigflag_containerp'>Ghana</p>
                <Link to='#'>
                    <img src={ghanaFlag3d} alt="Ghana Flag 3D" className='nigflag_container_icon nigflag_container_icon_blur' />
                </Link>
            </div>
            <div className='nigflag_container'>
                <p className='nigflag_containerp'>Sierra Leone</p>
                <Link to='#'>
                    <img src={sierraleoneFlag3d} alt="Sierra leone Flag 3D" className='nigflag_container_icon nigflag_container_icon_blur' />
                </Link>
            </div>
            <div className='nigflag_container'>
                <p className='nigflag_containerp'>Kenya</p>
                <Link to='#'>
                    <img src={kenyaFlag3d} alt="Kenya Flag 3D" className='nigflag_container_icon nigflag_container_icon_blur' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CountryFlags;
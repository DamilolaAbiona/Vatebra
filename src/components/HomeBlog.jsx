import React from 'react';
import '../styles/HomeBlog.css';
import blogImg1 from '../Assets/Images/homeblog-gallery-img1.png';
import blogImg2 from '../Assets/Images/homeblog-gallery-img2.png';
import blogImg3 from '../Assets/Images/homeblog-gallery-img3.png';

const HomeBlog = () => {

  return (
    <div className='HomeBlog_main_container'>
        <div className='HomeBlog_head_container'>
            <h3 className='HomeBlog_headh3'>Blog</h3>
            <p className='HomeBlog_headp'>
                Partnership demonstrates the immeasurable power of our shared values and collective effort to effect positive, ground-breaking change and deliver excellence for our customers, colleagues, and communities.
            </p>
        </div>

        <div className='HomeBlog_gallery_container'>
            <div className='HomeBlog_gallery1'>
                <div className='HomeBlog_img1_container'>
                    <img src={blogImg1} alt="Gallery img" />
                    <div className='HomeBlog_btn'>
                        <p className='HomeBlog_btnp'>
                            Technology
                        </p>
                    </div>
                </div>
                
                <div className='HomeBlog_card_container' >
                    <p className='HomeBlog_card_text1'>
                        Posted on - 23/05/2023
                    </p>
                    <h6 className='HomeBlog_card_texth6'>
                        Vatebra listed as one of the companies to inspire africa in 2019 by the london stock exchange group
                    </h6>
                    <p className='HomeBlog_card_text2'>
                    Leading Pan-African Tech Solutions provider, Vatebra Limited has been listed as one o... <span className='HomeBlog_card_text2span'>Continue reading</span>
                    </p>
                </div>
            </div>

            <div className='HomeBlog_gallery1'>
                <div className='HomeBlog_img1_container'>
                    <img src={blogImg2} alt="Gallery img" />
                    <div className='HomeBlog_btn'>
                        <p className='HomeBlog_btnp'>
                            Technology
                        </p>
                    </div>
                </div>
                
                <div className='HomeBlog_card_container2' >
                    <p className='HomeBlog_card_text1'>
                        Posted on - 23/05/2023
                    </p>
                    <h6 className='HomeBlog_card_texth6'>
                        Vatebra listed as one of the companies to inspire africa in 2019 by the london stock exchange group
                    </h6>
                    <p className='HomeBlog_card_text2'>
                    Leading Pan-African Tech Solutions provider, Vatebra Limited has been listed as one o... <span className='HomeBlog_card_text2span'>Continue reading</span>
                    </p>
                </div>
            </div>


             <div className='HomeBlog_gallery1'>
                <div className='HomeBlog_img1_container'>
                    <img src={blogImg3} alt="Gallery img" />
                    <div className='HomeBlog_btn'>
                        <p className='HomeBlog_btnp'>
                            Technology
                        </p>
                    </div>
                </div>
                
                <div className='HomeBlog_card_container2' >
                    <p className='HomeBlog_card_text1'>
                        Posted on - 23/05/2023
                    </p>
                    <h6 className='HomeBlog_card_texth6'>
                        Vatebra listed as one of the companies to inspire africa in 2019 by the london stock exchange group
                    </h6>
                    <p className='HomeBlog_card_text2'>
                    Leading Pan-African Tech Solutions provider, Vatebra Limited has been listed as one o... <span className='HomeBlog_card_text2span'>Continue reading</span>
                    </p>
                </div>
            </div>
        </div>


        <div className='HomeBlog_gallery_container_mobile'>

            <div className='HomeBlog_gallery1_mobile'>
                <div className='HomeBlog_img1_container_mobile'>
                    <img src={blogImg1} alt="Gallery img" />
                    <div className='HomeBlog_btn_mobile'>
                        <p className='HomeBlog_btnp_mobile'>
                            Technology
                        </p>
                    </div>
                </div>
                
                <div className='HomeBlog_card_container_mobile1' >
                    <p className='HomeBlog_card_text1_mobile'>
                        Posted on - 23/05/2023
                    </p>
                    <h6 className='HomeBlog_card_texth6_mobile'>
                        Vatebra listed as one of the companies to inspire africa in 2019 by the london stock exchange group
                    </h6>
                    <p className='HomeBlog_card_text2_mobile'>
                    Leading Pan-African Tech Solutions provider, Vatebra Limited has been listed as one o... <span className='HomeBlog_card_text2span_mobile'>Continue reading</span>
                    </p>
                </div>
            </div>



            <div className='HomeBlog_gallery1_mobile mobile_space1'>
                <div className='HomeBlog_img1_container_mobile'>
                    <img src={blogImg2} alt="Gallery img" />
                    <div className='HomeBlog_btn_mobile'>
                        <p className='HomeBlog_btnp_mobile'>
                            Technology
                        </p>
                    </div>
                </div>
                
                <div className='HomeBlog_card_container_mobile2' >
                    <p className='HomeBlog_card_text1_mobile'>
                        Posted on - 23/05/2023
                    </p>
                    <h6 className='HomeBlog_card_texth6_mobile'>
                        Vatebra listed as one of the companies to inspire africa in 2019 by the london stock exchange group
                    </h6>
                    <p className='HomeBlog_card_text2_mobile'>
                    Leading Pan-African Tech Solutions provider, Vatebra Limited has been listed as one o... <span className='HomeBlog_card_text2span_mobile'>Continue reading</span>
                    </p>
                </div>
            </div>


             <div className='HomeBlog_gallery1_mobile mobile_space2'>
                <div className='HomeBlog_img1_container_mobile'>
                    <img src={blogImg3} alt="Gallery img" />
                    <div className='HomeBlog_btn_mobile'>
                        <p className='HomeBlog_btnp_mobile'>
                            Technology
                        </p>
                    </div>
                </div>
                
                <div className='HomeBlog_card_container_mobile3' >
                    <p className='HomeBlog_card_text1_mobile'>
                        Posted on - 23/05/2023
                    </p>
                    <h6 className='HomeBlog_card_texth6_mobile'>
                        Vatebra listed as one of the companies to inspire africa in 2019 by the london stock exchange group
                    </h6>
                    <p className='HomeBlog_card_text2_mobile'>
                    Leading Pan-African Tech Solutions provider, Vatebra Limited has been listed as one o... <span className='HomeBlog_card_text2span'>Continue reading</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBlog;
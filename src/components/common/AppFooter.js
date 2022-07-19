import React from 'react'
import { BackTop } from 'antd';

const AppFooter = () => {
    return (
        <div className='container-fluid'>
            <div className='footer'>
                <div className='logo'>
                    <i className="fas fa-bolt"></i>
                    <a href=""> TECH </a>

                </div>
                <ul className='socials'>
                    <li> <a href="https://www.facebook.com/"> <i className="fab fa-facebook-f"></i></a>  </li>
                    <li> <a href="https://www.twitter.com/"> <i className="fab fa-twitter"></i></a> </li>
                    <li> <a href="https://www.linkedin.com/"> <i className="fab fa-linkedin-in"></i></a>  </li>
                    <li> <a href="https://www.instagram.com/"> <i className="fab fa-instagram"></i></a>  </li>
                </ul>
                <div className='copyright'>
                    
                    <p>Designed by Maryam Sher</p>
                    <p className='cp'>Copyright © 2020 Tech</p>

                </div>
                <BackTop>
                    <div className='goTop'>  <i className="fas fa-arrow-circle-up"></i> </div>
                </BackTop>
                
                
                


            </div>
            
        </div>
    )
}

export default AppFooter

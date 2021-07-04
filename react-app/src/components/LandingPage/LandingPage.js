import React from 'react';
import { useHistory } from 'react-router-dom';
import splash from '../../images/splash.png';
import Welcome from '../../images/Welcome.png'
import './LandingPage.css'

const LandingPage = () => {
    const history = useHistory();

    const enterSite = () => {
        history.push('/home')
    }

    return (
        <div className='container_landing'>
        <img src={splash} alt='monstera' className='landing_background' />
        <div className='landing_div'>
            <img src={Welcome} alt='welcome' className='landing_message' />
                <div className='button_div'>
                    <button className='button_enter' onClick={enterSite}>grow with us</button>
                </div>
        </div>
        </div>
    )
}

export default LandingPage;
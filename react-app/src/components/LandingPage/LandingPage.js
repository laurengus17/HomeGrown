import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {
    const history = useHistory();

    const enterSite = () => {
        history.push('/home')
    }

    return (
        <>
            <h2 className='welcome_message'>Welcome to Home Grown</h2>
            <button className='button_enter' onClick={enterSite}>grow with us</button>
        </>
    )
}

export default LandingPage;
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function LightButton () {
const [showMenu, setShowMenu] = useState(false);

useEffect(() => {
    const closeMenu = () => setShowMenu(false)
        if(showMenu){
            document.addEventListener('click', closeMenu);
        }

        return () => document.removeEventListener('click', closeMenu);
}, [showMenu])

const switchMenu = () => setShowMenu(prevState => !prevState);

return (
    <>
        <button className='light_button' onClick={switchMenu}>Light</button>
        {showMenu &&
            <ul className='light_dropdown'>
                <Link to='/plants/light/low'>
                    Low Light
                </Link>
                <Link to='/plants/light/average'>
                    Partially Shaded
                </Link>
                <Link to='/plants/light/high'>
                    Direct Sun
                </Link>
            </ul>
        }
    </>
)

}
export default LightButton;
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../BrowseAll/BrowseAll.css'

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
                <li>
                    <Link className='link' to='/plants/light/low'>
                        Low Light
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/plants/light/average'>
                        Partially Shaded
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/plants/light/high'>
                        Direct Sun
                    </Link>
                </li>
            </ul>
        }
    </>
)

}
export default LightButton;
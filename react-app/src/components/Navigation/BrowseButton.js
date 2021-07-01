import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

function BrowseButton () {
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
        <button className='browse_button' onClick={switchMenu}>Browse</button>
        {showMenu &&
            <ul className='browse_dropdown'>
                <li>
                    Placeholder- Variety 1
                </li>
                <li>
                    Placeholder- Variety 2
                </li>
                <li>
                    Placeholder- Variety 3
                </li>
                <li>
                    Placeholder- Variety 4
                </li>
            </ul>
        }
    </>
)

}
export default BrowseButton;
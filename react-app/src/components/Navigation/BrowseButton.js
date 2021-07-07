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
                    Air Plant
                </li>
                <li>
                    Calathea
                </li>
                <li>
                    Fern
                </li>
                <li>
                    Fiddle Leaf Fig
                </li>
                <li>
                    Flowers
                </li>
                <li>
                    Money Tree
                </li>
                <li>
                    Monstera
                </li>
                <li>
                    Palm
                </li>
                <li>
                    Peperomia
                </li>
                <li>
                    Philodendron
                </li>
                <li>
                    Pothos
                </li>
                <li>
                    Snake Plant
                </li>
                <li>
                    Succulent
                </li>
            </ul>
        }
    </>
)

}
export default BrowseButton;
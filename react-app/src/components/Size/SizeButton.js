import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function SizeButton () {
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
        <button className='size_button' onClick={switchMenu}>Size</button>
        {showMenu &&
            <ul className='size_button'>
                <li>
                    Small
                </li>
                <li>
                    Medium
                </li>
                <li>
                    Large/Tall
                </li>
            </ul>
        }
    </>
)

}
export default SizeButton;
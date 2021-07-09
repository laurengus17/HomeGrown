import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../BrowseAll/BrowseAll.css'

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
            <ul className='size_dropdown'>
                <li>
                <Link className='link' to='/plants/size/small'>
                    Small
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/size/medium'>
                    Medium
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/size/large'>
                    Large/Tall
                </Link>
                </li>
            </ul>
        }
    </>
)

}
export default SizeButton;
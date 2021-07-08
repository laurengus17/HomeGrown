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
                <Link to='/plants/size/small'>
                    Small
                </Link>
                <Link to='/plants/size/medium'>
                    Medium
                </Link>
                <Link to='/plants/size/large'>
                    Large/Tall
                </Link>
            </ul>
        }
    </>
)

}
export default SizeButton;
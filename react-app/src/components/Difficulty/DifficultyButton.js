import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function DifficultyButton () {
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
        <button className='difficulty_button' onClick={switchMenu}>Difficulty</button>
        {showMenu &&
            <ul className='difficulty_button'>
                <Link to='/plants/difficulty/1'>
                    Low Maintenance
                </Link>
                <Link to='/plants/difficulty/5'>
                    Lots O' Care
                </Link>
            </ul>
        }
    </>
)

}
export default DifficultyButton;
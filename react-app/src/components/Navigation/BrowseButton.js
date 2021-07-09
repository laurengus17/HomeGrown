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
                <Link className='link' to='/plants/variety/airplants'>
                    Air Plant
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/variety/calatheas'>
                    Calathea
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/variety/ferns'>
                    Fern
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/variety/fiddleleaffigs'>
                    Fiddle Leaf Fig
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/variety/flowers'>
                    Flowers
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/variety/moneytrees'>
                    Money Tree
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/variety/monsteras'>
                    Monstera
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/variety/palms'>
                    Palm
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/variety/peperomias'>
                    Peperomia
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/variety/philodendron'>
                    Philodendron
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/variety/pothos'>
                    Pothos
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/variety/snakeplants'>
                    Snake Plant
                </Link>
                </li>
                <li>
                <Link className='link' to='/plants/variety/succulents'>
                    Succulent
                </Link>
                </li>
                <li>
                <Link className='link' to='/browse_all'>
                    All Plants
                </Link>
                </li>
            </ul>
        }
    </>
)

}
export default BrowseButton;
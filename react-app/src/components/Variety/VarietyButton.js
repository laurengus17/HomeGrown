import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../BrowseAll/BrowseAll.css'

function VarietyButton () {
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
        <button className='variety_button' onClick={switchMenu}>Variety</button>
        {showMenu &&
            <ul className='variety_dropdown'>
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
            </ul>
        }
    </>
)

}
export default VarietyButton;
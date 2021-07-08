import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

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
            <ul className='variety_button'>
                <Link to='/plants/variety/airplants'>
                    Air Plant
                </Link>
                <Link to='/plants/variety/calatheas'>
                    Calathea
                </Link>
                <Link to='/plants/variety/ferns'>
                    Fern
                </Link>
                <Link to='/plants/variety/fiddleleaffigs'>
                    Fiddle Leaf Fig
                </Link>
                <Link to='/plants/variety/flowers'>
                    Flowers
                </Link>
                <Link to='/plants/variety/moneytrees'>
                    Money Tree
                </Link>
                <Link to='/plants/variety/monsteras'>
                    Monstera
                </Link>
                <Link to='/plants/variety/palms'>
                    Palm
                </Link>
                <Link to='/plants/variety/peperomias'>
                    Peperomia
                </Link>
                <Link to='/plants/variety/philodendron'>
                    Philodendron
                </Link>
                <Link to='/plants/variety/pothos'>
                    Pothos
                </Link>
                <Link to='/plants/variety/snakeplants'>
                    Snake Plant
                </Link>
                <Link to='/plants/variety/succulents'>
                    Succulent
                </Link>
            </ul>
        }
    </>
)

}
export default VarietyButton;
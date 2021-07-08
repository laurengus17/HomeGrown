import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const HomePage = () => {
    const [lowMaintenance, setLowMaintenance] = useState([]);
    const [balcony, setBalcony] = useState([]);
    const [small, setSmall] = useState([]);

    useEffect(() => {
        (async() => {
            const res = await fetch(`/api/plants/easy`);

            if (res.ok) {
                const data = await res.json();
                setLowMaintenance(data.results);
            }
        })();
    });

    console.log(lowMaintenance)

    useEffect(() => {
        (async() => {
            const res = await fetch(`/api/plants/balcony`);

            if (res.ok) {
                const data = await res.json();
                setBalcony(data.results);
            }
        })();
    });

    console.log(balcony)

    useEffect(() => {
        (async() => {
            const res = await fetch(`/api/plants/small`);

            if (res.ok) {
                const data = await res.json();
                setSmall(data.results);
            }
        })();
    });

    console.log(small)

    return (
        <>
            <h2>Home Page</h2>
            <div>
                <h2>Low Maintenance</h2>
            </div>
            <div>
                <h2>Balcony Lovers</h2>
            </div>
            <div>
                <h2>Small Spaces, Small 🪴</h2>
            </div>
            <Link to='/browse_all' exact={true}>
                Browse All Plants
            </Link>
        </>
    )
}

export default HomePage;
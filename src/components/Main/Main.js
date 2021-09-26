import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Guest from '../Guest/Guest';
import './Main.css';

/*-------------------------------------------------------------------
    Main section (you can find here data load with useState() and useEffect() and also find button event handler)
---------------------------------------------------------------------*/

const Main = () =>
{
    /* UseState() for processing custom API data */
    const [guests, setGuests] = useState([]);

    /* UseState() for processing data to Cart */
    const [cart, setCart] = useState([]);

    /* Load custom API data and pass to useState() */
    useEffect(() =>
    {
        fetch("./author.JSON")
            .then(res => res.json())
            .then(data => setGuests(data));
    }, []);

    /* Button event handler and handle unique guest data */
    const handleInvite = guest =>
    {
        let uniqueGuests = [...cart];
        if (uniqueGuests.indexOf(guest) === -1) {
            uniqueGuests.push(guest);
        }
        setCart(uniqueGuests);
    };

    /* Pass data to Guest and Cart using unidirectional method */
    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            guests.map(guest => <Guest
                                key={guest.key}
                                guests={guest}
                                handleInvite={handleInvite}
                            />)
                        }
                    </div>
                </div>
                <div className="col-lg-3">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Main;
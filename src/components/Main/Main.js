import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Guest from '../Guest/Guest';
import './Main.css';

const Main = () =>
{
    const [guests, setGuests] = useState([]);
    useEffect(() =>
    {
        fetch("./author.JSON")
            .then(res => res.json())
            .then(data => setGuests(data));
    }, [])
    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            guests.map(guest => <Guest
                                key={guest.key}
                                guests={guest}
                            />)
                        }
                    </div>
                </div>
                <div className="col-lg-3">
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default Main;
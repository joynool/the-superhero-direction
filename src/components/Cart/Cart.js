import React from 'react';
import InviteNameList from '../InviteNameList/InviteNameList';
import './Cart.css';

const Cart = (props) =>
{
    const { cart } = props;

    let quantity = 0;
    let cost = 0;

    /* Looping array of object and processing calculation */
    for (const guest of cart) {
        if (!guest.quantity) {
            guest.quantity = 1;
        }
        quantity = quantity + guest.quantity;
        cost = cost + guest.honorarium;
    }

    /*-----------------------------------------------------------------
        Set data dynamically after calculation and using map() to show name of invite guest names
    -------------------------------------------------------------------*/
    return (
        <div className="border border-secondary rounded-3 shadow p-3 sticky-top">
            <h3>Guest Added: {quantity}</h3>
            <div className="border border-success p-1 mb-2 rounded-3">
                <p className="fw-bold">Show Cost: {cost} Lac (BDT)</p>
                <p className="fw-bold">Remaining Budget: {120 - cost} Lac (BDT)</p>
            </div>
            <div className="card">
                <div className="card-header">
                    <h5>Guest List</h5>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        cart.map(inviteGuest => <InviteNameList
                            key={inviteGuest.key}
                            inviteGuest={inviteGuest}
                        />)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cart;
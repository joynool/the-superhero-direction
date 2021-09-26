import React from 'react';
import './Cart.css';

const Cart = () =>
{
    return (
        <div className="border border-secondary rounded-3 shadow p-3 text-center">
            <h3>Guest Added: 0</h3>
            <p>Show Cost: 0 lac BDT</p>
            <div className="card">
                <div className="card-header">
                    <h5>Guest List</h5>
                </div>
                <ul className="list-group list-group-flush text-start">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;
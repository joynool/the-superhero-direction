import React from 'react';
import './Guest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Guest = (props) =>
{
    const { name, occupation, period, notableWorks, honorarium, img } = props.guests
    return (
        <div className="col">
            <div className="card shadow-sm p-2 item">
                <img src={img} className="card-img-top border border-secondary rounded-3 p-2" alt={name} width="250px" height="250px" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Occupation: {occupation}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Period: {period}</li>
                    <li className="list-group-item">Works: {notableWorks}</li>
                    <li className="list-group-item">Honorarium: {honorarium}</li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-outline-secondary">
                        <FontAwesomeIcon icon={faUserPlus} /> Invite Guest
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Guest;
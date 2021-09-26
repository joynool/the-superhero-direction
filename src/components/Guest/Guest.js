import React from 'react';
import './Guest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Guest = (props) =>
{
    /* Data destructuring after receiving props */
    const { name, occupation, period, notableWorks, honorarium, img } = props.guests

    /*-----------------------------------------------------------------
        After destructuring use data dynamically and button event handler receive through props and pass data using parameter 
    -------------------------------------------------------------------*/
    return (
        <div className="col">
            <div className="card shadow-sm p-2 item">
                <img src={img} className="card-img-top border border-secondary rounded-3 p-2" alt={name} width="250px" height="250px" />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text fst-italic">Occupation: {occupation}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item fw-light">Period: {period}</li>
                    <li className="list-group-item fw-light">Works: {notableWorks}</li>
                    <li className="list-group-item fw-light">Honorarium: {honorarium} Lac (BDT)</li>
                </ul>
                <div className="card-body text-center">
                    <button onClick={() => props.handleInvite(props.guests)} className="btn btn-outline-secondary">
                        <FontAwesomeIcon icon={faUserPlus} /> Invite Guest
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Guest;
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

/*-------------------------------------------------------------------
Header section (you can find here site name, topics and total budget)
---------------------------------------------------------------------*/

const Header = () =>
{
    return (
        <div className="container rounded-3 mt-3 p-2 text-center header">
            <h1>
                <FontAwesomeIcon icon={faVideo} />
                <span className="text-white"> The </span>
                Talk
                <span className="text-white"> Show </span>
                Direction
            </h1>
            <p className="fs-3 fw-light">Topics : Ekushe Boi Mela, 2022</p>
            <p className="fs-4 bg-light rounded-3 p-2">Total Budget : 1.2 Crore (BDT)</p>
        </div>
    );
};

export default Header;
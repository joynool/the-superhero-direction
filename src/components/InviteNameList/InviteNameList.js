import React from 'react';

const InviteNameList = (props) =>
{
    const { name, key } = props.inviteGuest;

    /* Show list of invite guest names dynamically using props */
    return (
        <li className="list-group-item d-flex justify-content-between">
            {name}
            <button onClick={() => props.handleCancel(key)} type="button" className="close btn btn-danger" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </li>
    );
};

export default InviteNameList;
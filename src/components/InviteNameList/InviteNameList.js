import React from 'react';

const InviteNameList = (props) =>
{
    const { name } = props.inviteGuest;

    /* Show list of invite guest names dynamically using props */
    return (
        <li className="list-group-item">
            {name}
        </li>
    );
};

export default InviteNameList;
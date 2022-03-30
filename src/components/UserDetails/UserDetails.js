import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const params = useParams();
    return (
        <div>
            <h2>This is friends details : {params.userId}</h2>
        </div>
    );
};

export default UserDetails;
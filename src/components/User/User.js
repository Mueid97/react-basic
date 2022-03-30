import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = (props) => {
    const {name,username,id} = props.user;

    const navigate = useNavigate();

    const showUserDetails = () =>{
      navigate('/user/'+id);
    }
    return (
        <div>
            <h1>user name: {name}</h1>
            <Link to={"/user/"+id}>show detail</Link>
            <button onClick={showUserDetails}>{username}:{id}</button>
        </div>
    );
};

export default User;
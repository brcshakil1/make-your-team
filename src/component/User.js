import React, { useState } from 'react';

const User = (props) => {
    const {picture, name, email, phone} = props.user;
    const fullName = name.title + ' ' + name.first + ' ' + name.last;
    const addMember = props.addMember;

    const [mobile, setMobile] = useState('');

    const showPhoneNumber = () => setMobile(phone);
    
    return (
        <div style={{border: '1px solid red', margin: '10px', borderRadius:'5px', padding: '5px'}}>
            <img src={picture.large} alt="" />
            <h2>{fullName} </h2>
            <p>Email: {email}</p>
            <p>Phone: {mobile}</p>
            <p>Learn About me</p>
            <button onClick={showPhoneNumber}>Show Phone Number</button>
            <button onClick={()=> addMember(fullName)}>Add Me</button>
        </div>
    );
};

export default User;
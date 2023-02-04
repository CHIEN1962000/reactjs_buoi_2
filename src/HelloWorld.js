import React from 'react';


export default function HelloWorld() {
    const name = "chien";
    const user = {
        firtsName: "Harper",
        lastName: "Petez"
    };

    const formatName = (user) => {
    return user.firtsName + ' ' + user.lastName;
    };

 return (
    <div>
        <div>HelloWorld: {name} và {formatName(user)}</div>
        <div>{name === 'chien' ? 'xin chào chiến' : 'xin chào sai rồi'}</div>
        <div>Rất vui được gặp bạn</div>
    </div>
 );
}
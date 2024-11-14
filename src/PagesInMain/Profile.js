import React from 'react';
import '../index.css';

const UserProfile = () => {
    const defaultProfilePicture = "/download.jpeg";

return (
    <div className="user-profile">
        <h2>User Profile</h2>
        <div>
            <img src={defaultProfilePicture} alt="Profile" style={{ width: '200px', height: '200px' }} />
            <p>Username: Mary Lambert</p>
            <p>Contact: 07 57 821 574</p>
            <p>ID: 87 88 87 98</p>
            <p>About: Do not Disturb</p>
        </div>
    </div>
);
};

export default UserProfile;
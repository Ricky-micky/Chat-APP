import React from 'react';
import SearchBar from './Search';
import '../index.css';

function SingleContact({ contact, onClick }) {
    return (
        <div className="contact-card" onClick={onClick}>

            <img 
                src={contact.image || 'default-image-url-here'} 
                alt={''} 
                className="contact-image" 
            />
            <div className="contact-details">
                <strong>{contact.name || 'Unknown'}</strong>
                <p className='lastseen'>Last Seen: {contact.lastseen}</p>
            </div>
        </div>
    );
};

export default SingleContact;


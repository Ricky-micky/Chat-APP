import React from 'react';
import '../index.css'; 

function NewContact() {
    return (
        <div className="container">
            <h3>Add Contact</h3>
            <form>
                <input type="number" placeholder='Enter contact' />
                <input type="text" placeholder='Enter name' />
                <input type="image" src="your-image-url-here" alt="Upload" />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
}

export default NewContact;
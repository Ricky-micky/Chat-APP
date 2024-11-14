// import React, { useState } from 'react';
// import '../index.css';

// function NewContact({ addContact }) {
//     const [contactNumber, setContactNumber] = useState('');
//     const [contactName, setContactName] = useState('');
//     const [contactImage, setContactImage] = useState('');

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate input
//         if (!contactNumber || !contactName || !contactImage) {
//             alert('Please fill in all fields.');
//             return;
//         }

//         // Create a new contact object
//         const newContact = {
//             id: Date.now(),
//             number: contactNumber,
//             name: contactName,
//             image: contactImage,
//         };

//         // Call the function passed from the parent to update the contact list
//         addContact(newContact);

//         // Reset form fields
//         setContactNumber('');
//         setContactName('');
//         setContactImage('');
//     };

//     return (
//         <div className="container">
//             <h3>Add Contact</h3>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="number"
//                     placeholder="Enter contact number"
//                     value={contactNumber}
//                     onChange={(e) => setContactNumber(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter name"
//                     value={contactName}
//                     onChange={(e) => setContactName(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter image URL"
//                     value={contactImage}
//                     onChange={(e) => setContactImage(e.target.value)}
//                 />
//                 <button type="submit">Add Contact</button>
//             </form>
//         </div>
//     );
// }

// export default NewContact;

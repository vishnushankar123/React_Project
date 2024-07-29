// // import React, { useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target; 
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Here you can handle form submission, e.g., send data to backend

// //     // Example: Sending data to a hypothetical backend
// //     fetch('/api/contact', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify(formData)
// //     })
// //     .then(response => response.json())
// //     .then(data => {
// //       console.log('Success:', data);
// //       // Optionally, you can reset the form after successful submission
// //       setFormData({
// //         name: '',
// //         email: '',
// //         message: ''
// //       });
// //     })
// //     .catch((error) => {
// //       console.error('Error:', error);
// //     });
// //   };

// //   return (
// //     <div className="container-fluid" id='Contact'>
// //       <h2 className="text-center mb-4">Contact Us</h2>
// //       <form onSubmit={handleSubmit}>
// //         <table className="table table-bordered">
// //           <tbody>
// //             <tr>
// //               <td><label htmlFor="name" className="text-primary">Name:</label></td>
// //               <td>
// //                 <input
// //                   type="text"
// //                   className="form-control"
// //                   id="name"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </td>
// //             </tr>
// //             <tr>
// //               <td><label htmlFor="email" className="text-danger">Email:</label></td>
// //               <td>
// //                 <input
// //                   type="email"
// //                   className="form-control"
// //                   id="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //               </td>
// //             </tr>
// //             <tr>
// //               <td><label htmlFor="message" className="text-success">Message:</label></td>
// //               <td>
// //                 <textarea
// //                   className="form-control"
// //                   id="message"
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   rows="4"
// //                   required
// //                 />
// //               </td>
// //             </tr>
// //             <tr>
// //               <td colSpan="2" className="text-center">
// //                 <button type="submit" className="btn btn-primary btn-lg">Submit</button>
// //               </td>
// //             </tr>
// //           </tbody>
// //         </table>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Contact;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target; 
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle form submission, e.g., send data to backend

//     // Example: Sending data to a hypothetical backend
//     fetch('/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       // Optionally, you can reset the form after successful submission
//       setFormData({
//         name: '',
//         email: '',
//         message: ''
//       });
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   };

//   return (
//     <div className="container-fluid" id='Contact'>
//       <h2 className="text-center mb-4">Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="row">
//           <div className="col-md-6">
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label text-primary">Name:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label text-danger">Email:</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <div className="mb-3">
//               <label htmlFor="message" className="form-label text-success">Message:</label>
//               <textarea
//                 className="form-control"
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="4"
//                 required
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12 text-center">
//             <button type="submit" className="btn btn-primary btn-lg">Submit</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import '../Project React/Contact.css';
// import './Contact.css'
 
// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [Phone,setPhone]=useState('');
//   const [message, setMessage] = useState('');
//   const backgroundImageUrl='https://frydaysteulonca.files.wordpress.com/2021/08/adobestock_209158532.jpeg?w=2400'
//   const sai{
//     backgroundImageUrl:''
//   }
 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', { name, email, message });
//     setName('');
//     setEmail('');
//     setMessage('');
//   };
 
//   return (
//         <div className='container-fluid' id='contact' style={{sai}}>
//           <div className='row'>
//             <div className='col-md-12'></div>
//     <div>
//     <form className="contact-form" id='form1' onSubmit={handleSubmit}>
//       <h3>Contact Us</h3>
//       <br></br>
//       <label>
//       <b>Name:</b>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <label>
//        <b> Email:</b>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <label>
//        <b> Phone:</b>
//         <input
//           type="Phone"
//           value={Phone }
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//       </label>
//       <label>
//        <b> Message:</b>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
   
//     <div className='row'>
//       <div className='col-md-12'></div>
 
//     </div>
// </div>  
// </div></div>  
 
//   );
// };
 
// export default Contact;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Contact = () => {
//   // Replace with your image URL
//   const imageUrl = 'https://www.laccd.edu/sites/laccd.edu/files/styles/hero_0_mobile_a/public/hero/2023-10/adobestock_117169544.jpeg?h=fac97c98&itok=vFCNSYzv';

//   const containerStyle = {
//     minHeight: '100vh', 
//     padding: '20px',
//     marginTop: '-20px'
//   };

//   const rowStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   };

//   const imageContainerStyle = {
//     height: '100vh', // Set height to fill the viewport height
//     width: '50%', // Take up half of the viewport width
//     background: `url(${imageUrl})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//   };

//   const contactContainerStyle = {
//     height: '100vh', // Set height to fill the viewport height
//     width: '50%', // Take up half of the viewport width
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     padding: '20px'
//   };

//   const formStyle = {
//     maxWidth: '450px', // Example: set max width for the form
//     width: '100%' // Ensure form fills its container width
//   };

//   return (
//     <div className='container-fluid' style={containerStyle}>
//       <div className="row" style={rowStyle}>
//         <div className="col-md-6" style={imageContainerStyle}></div>
//         <div className="col-md-6" style={contactContainerStyle}>
//           <div style={formStyle}>
//             <h2 className="text-center mb-4">Contact Us</h2>
//             <form>
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Your Name:</label>
//                 <input type="text" className="form-control" id="name" required />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Your Email:</label>
//                 <input type="email" className="form-control" id="email" required />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="message" className="form-label">Message:</label>
//                 <textarea className="form-control" id="message" rows="4" required></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React from 'react';
import './Contact.css'; // Import external CSS file

const Contact = () => {
  // Replace with your image URL
  // const imageUrl = 'https://www.laccd.edu/sites/laccd.edu/files/styles/hero_0_mobile_a/public/hero/2023-10/adobestock_117169544.jpeg?h=fac97c98&itok=vFCNSYzv';
     const  imageUrl ='https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg'
  return (
    <div className='container-fluid' id='Contact'>
      <div className="row row-container">
        <div className="col-md-6 image-container" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="col-md-6 contact-container">
          <div className="form-container">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name:</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email:</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



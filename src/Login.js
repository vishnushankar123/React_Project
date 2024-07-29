// import React, { useState } from 'react';
// import './Login.css';


 
// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
 
//     const handleLogin = () => {
//         if (username === 'vishnu@gmail.com' && password === 'reddy') {
//             setIsLoggedIn(true);
//             setErrorMessage('');
//         } else {
//             setIsLoggedIn(false);
//             setErrorMessage('Invalid username or password.');
//         }
//     };
   
 
//     const handleLogout = () => {
//         setIsLoggedIn(false);
//         setUsername('');
//         setPassword('');
//         setErrorMessage('');
//     };
 
//     return (
 
 
   
//         <div className="login-container">
//             <div className='col-md-4'>
//                 <div className='row'>
//              <h1 id='wlcm'>
//              </h1>

 
//              </div>
//             </div>
               
           
//             <div className="login-box">
//                 <div className='col-md-4'></div>
//                 {isLoggedIn ? (
//                     <div>
//                         <p style={{color:'lightcyan', textAlign:'center'}} className="welcome-message">Welcome, {username}!</p>
//                         <button className="logout-button" style={{backgroundColor:'lightseagreen', margin:'80px'}} onClick={handleLogout}>Logout</button>
//                     </div>
//                 ) : (
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             className="login-input"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                         <br />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             className="login-input"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <br />
 
//                         <button className="login-button" onClick={handleLogin}>Login</button>
 
 
//                         {/* <button className="login-button" onClick={handleLogin}><img src={git} style={{width:"30px"}} alt=''/> Git hub</button> */}
 
//                         <h6 style={{ fontWeight: 'lighter', padding: '5px', color:'white'}}>Forgot Password ?</h6>
//                         <h6 style={{ fontWeight: 'lighter', color:'white'}}>Create New account ?</h6>
//                         <p className="error-message">{errorMessage}</p>
 
//                     </div>
                   
//                 )}
               
//             </div>
//             <div className='col-md-4'></div>
//         </div>
       
//     );
// };
 
// export default Login;
 
 
 
 // LoginPage.jsx

// import React, { useState } from 'react';
// import Home from './Home';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
   
//     if (username === 'sainadh' && password === 'vishnu') {
//       setIsLoggedIn(true);
//     } else {
//       setError('Invalid username or password');
//     }
//   };
//   const style = {
//     // backgroundColor: 'linear-gradient(to bottom, #ff8a00, #e52e71)'
//     backgroundImage:URL('https://cdn.pixabay.com/photo/2018/04/24/22/33/key-3348307_1280.jpg')
//   };

// //   if (isLoggedIn) {
// //     // Render the home page content if logged in
// //     return (
// //       <div className="container mt-5">
// //         <h2>Welcome to the Home Page!</h2>
        
// //       </div>
// //     );
// //   }
// if (isLoggedIn) {
//     // Render the Home component when logged in
//     return <Home />;
//   }

//   return (
//     <div className='container-fluid' style={{style}}>
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <h2 className="card-title text-center">Login</h2>
//               {error && <div className="alert alert-danger">{error}</div>}
//               <form onSubmit={handleLogin}>
//                 <div className="mb-3">
//                   <label htmlFor="username" className="form-label">Username:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">Password:</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Login</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import Home from './Home';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
   
    if (username === 'sainadh' && password === 'vishnu') {
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  };


  const backgroundImageUrl = 'https://cdn.pixabay.com/photo/2018/04/24/22/33/key-3348307_1280.jpg';

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const sai = {
    background: 'rgb(255, 105, 0.5)', 
    opacity: '0.9', 
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
    maxWidth: '400px', 
    width: '100%', 
    borderRadius: '8px' 
  };

  if (isLoggedIn) {
    
    return <Home />;
  }

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="container mt-5">
        <div className="row justify-content-end">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body" style={{sai}}>
                <h2 className="card-title text-center">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <p style={{marginTop:10}}>Forget Password ?</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


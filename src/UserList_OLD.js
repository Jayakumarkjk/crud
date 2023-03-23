// import { useState, useEffect } from 'react';
// import React from 'react';
// import Cards from './Cards.js'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useNavigate, useParams } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';




// // export function AddUser({ dashboard, setDashboard }) {
// export function AddUser({ user, setUser }) {

//     const navigate = useNavigate();

// //   const createUser = (newUser) =>{
// //     console.log("createUser", newUser);
// //         fetch(`https://6401ca170a2a1afebef22a4a.mockapi.io/users/user`, {
// //           method: "POST",
// //           body: JSON.stringify(newUser),
// //           headers: { "content-Type": "application/json"},
// //         })
// //         .then((data) => data.json())
// //         .then(() => navigate("/user"));
// //         console.log(newUser); 
// //         setDashboard ([...dashboard, newUser]);
        
//   const createUser = (newUser) =>{
//     fetch(`https://6401ca170a2a1afebef22a4a.mockapi.io/users/user`, {
//       method: "POST",
//       body:JSON.stringify(newUser),
//       headers: { "content-Type": "application/json"},
//     })
//     .then((data) => data.json())
//     .then(() => navigate("/Dashboard"));
//     setUser ([...user, newUser]);
     
//   };

// return( 
//         <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="name" placeholder="Enter name" />
//             </Form.Group>
      
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Age</Form.Label>
//               <Form.Control type="age" placeholder="Age" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Id</Form.Label>
//               <Form.Control type="id" placeholder="Id" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Gender</Form.Label>
//               <Form.Control type="gender" placeholder="Gender" />
//             </Form.Group>


//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>City</Form.Label>
//               <Form.Control type="city" placeholder="City" />
//             </Form.Group>


//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Country</Form.Label>
//               <Form.Control type="country" placeholder="Country" />
//             </Form.Group>
        
//             <Button variant="primary" 
//             type="submit" 
//             onClick={createUser}>
//             Add User
//             </Button>
//           </Form>
//         );
//       }
      
     


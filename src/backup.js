// import { useState, useEffect } from 'react';
// import React from 'react';
// import Cards from './Cards.js'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useNavigate, useParams } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import { useFormik } from "formik";
// import * as yup from "yup";
// import TextField from '@mui/material/TextField';



// const dashboardValidationSchema = yup.object({
//     name: yup.string().min(8, "need a longer name"),
//     id: yup.string().min(8, "need a longer postr"),
//     image: yup.string().min(8, "need a longer rating"),
//     gender: yup.string().min(8, "need a longer summary"),
//     city: yup.string().min(8, "need a longer trailer"),
//   });

// export function AddUser({ dashboard, setDashboard }) {

//   const navigate = useNavigate();
//   const formik =useFormik({
//     initialValues: {name:"", image:"",
//     gender:"", id:"", city:"",},
//     validationSchema : dashboardValidationSchema,
//     onSubmit:(newUser) => {
//       console.log("onSubmit", newUser);
//       createUser();
//     },
//   });
  

//   const createUser = (newUser) =>{
//         fetch(`https://6401ca170a2a1afebef22a4a.mockapi.io/users/user`, {
//           method: "POST",
//           body:JSON.stringify(newUser),
//           headers: { "content-Type": "application/json"},
//         })
//         .then((data) => data.json())
//         .then(() => navigate("/user"));
//         setDashboard ([...dashboard, newUser]);
     
//   };

// return( 

//     <form onSubmit={formik.handleSubmit} className='add-user-form'>
//     <TextField
//       id="name"
//       name="name"
//       label="Name"
//       variant="outlined"
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       value = {formik.values.name}    
            
//      />
//       {formik.touched.name && formik.errors.name ? formik.errors.name : ""}


//     <TextField
//       id="gender"
//       name="gender"
//       label="Gender"
//       variant="outlined"
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       value = {formik.values.gender}    />

//       {formik.touched.gender && formik.errors.gender ? formik.errors.gender : ""}

//     <TextField
//        id="image"
//        name="image"
//        label="Image"
//        variant="outlined"
//        onChange={formik.handleChange}
//        onBlur={formik.handleBlur}
//        value = {formik.values.image}  />

//       {formik.touched.image && formik.errors.image ? formik.errors.image : ""}


//     <TextField
//       id="id"
//       name="id"
//       label="Id"
//       variant="outlined"
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       value = {formik.values.id}  />

//       {formik.touched.id && formik.errors.id ? formik.errors.id : ""}


//     <TextField
//       id="city"
//       name="city"
//       label="City"
//       variant="outlined"
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur}
//       value = {formik.values.city}  />

//       {formik.touched.city && formik.errors.city ? formik.errors.city : ""}


//     <Button
//       variant="contained"
//       type="submit"
//       onClick={createUser}>
//       Add User</Button>
//   </form>
//   );
// }

    


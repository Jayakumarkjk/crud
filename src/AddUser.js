import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
// import {toJSON, fromJSON} from 'flatted';
// const {parse, stringify, toJSON, fromJSON} = require('flatted');
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


const userValidationSchema = yup.object({
    name: yup.string()
        .min(2, "Please enter your name")
        .required("Name is mandatory"),
    age: yup.number()
        .min(0, "Please Enter your Age")
        .required("Age is mandatory"),
    gender: yup.string()
        .min(1, "Please type your Gender")
        .required("Gender is mandatory"),
    city: yup.string()
        .min(2, "Please enter city name")
        .required("City is mandatory"),
    country: yup.string()
        .max(20, "Please type country name")
        .required("Country is mandatory"),
    image: yup.string()
        .min(2, "Please enter your url")
        .required("Image is mandatory"),
   
});

export function AddUser({ userList, setUserList }) {
    const formik = useFormik({
        initialValues: {
            name: "",
            age: "",
            gender: "",
            city: "",
            country: "",
            image: "",
        },
        validationSchema: userValidationSchema,
        onSubmit: (newUser) => {
            createUser(newUser);
        },
    });
    const navigate = useNavigate();

    const createUser = (newUser) => {
        fetch("https://6401ca170a2a1afebef22a4a.mockapi.io/users", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: { "Content-Type": "application/json" },
        })
            .then((data) => data.json())
            .then(() => navigate("/dashboard"));
        console.log(newUser);
        setUserList([...userList, newUser]);
    };
    return (
        <form onSubmit={formik.handleSubmit} style={{ marginLeft: '100px', marginTop: '50px' }} className="add-user-form">
            <h1 style={{ color: "blue", fontWeight: 'bolder', fontFamily: 'fantasy' }}>Add the Details Please</h1><br />
           
           
            <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""}
            <br />
            
            <TextField
                id="age"
                name="age"
                label="Age"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.age && formik.errors.age
                ? formik.errors.age
                : ""}
            <br />
            <TextField
                id="gender"
                name="gender"
                label="Gender"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.gender && formik.errors.gender
                ? formik.errors.gender
                : ""}
            <br />
            <TextField
                id="city"
                name="city"
                label="City"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.city && formik.errors.city
                ? formik.errors.city
                : ""}
            <br />
            <TextField
                id="country"
                name="country"
                label="Country"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.country && formik.errors.country
                ? formik.errors.country
                : ""}
            <br />
            <TextField
                id="image"
                name="image"
                label="Image"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.image && formik.errors.image
                ? formik.errors.image
                : ""}
            <br />
           
            <Button  className="btn1"
            
                type="submit"
                variant="contained"
                color="primary"
                onClick={createUser}
            >
                Add User
            </Button>&nbsp;&nbsp;

            <Button  variant="contained" color="primary" onClick={() => navigate(-1)}>
                <ArrowBackIosIcon /> BACK
            </Button>
        </form>
    );
}
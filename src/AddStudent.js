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
    department: yup.string()
        .min(0, "Please Enter your department")
        .required("Department is mandatory"),
    email: yup.string()
        .min(2, "Please enter city email")
        .required("Email is mandatory"),
    address: yup.string()
        .min(1, "Please type your address")
        .required("Address is mandatory"),
   
    image: yup.string()
        .min(2, "Please enter your url")
        .required("Image is mandatory"),
   
});

export function AddStudent({ userList, setUserList }) {
    const formik = useFormik({
        initialValues: {
            name: "",
            department: "",
            email: "",
            phone: "",
            address: "",
            image: "",
        },
        validationSchema: userValidationSchema,
        onSubmit: (newUser) => {
            createUser(newUser);
        },
    });
    const navigate = useNavigate();

    const createUser = (newUser) => {
        fetch("https://641f060ef228f1a83eaee346.mockapi.io/adminlist", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: { "Content-Type": "application/json" },
        })
            .then((data) => data.json())
            .then(() => navigate("/students"));
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
                id="department"
                name="department"
                label="Department"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.department}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.department && formik.errors.department
                ? formik.errors.department
                : ""}
            <br />
            <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            <br />
            <TextField
                id="phone"
                name="phone"
                label="Phone"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.phone && formik.errors.phone
                ? formik.errors.phone
                : ""}
            <br />
            <TextField
                id="address"
                name="address"
                label="Address"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.address && formik.errors.address
                ? formik.errors.address
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
                Add Student
            </Button>&nbsp;&nbsp;

            <Button  variant="contained" color="primary" onClick={() => navigate(-1)}>
                <ArrowBackIosIcon /> BACK
            </Button>
        </form>
    );
}

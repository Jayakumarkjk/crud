import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";



export function EditUser() {
    const { userid } = useParams();
    const [users, setUsers] = useState(null);
    useEffect(() => {
        fetch(`https://6401ca170a2a1afebef22a4a.mockapi.io/users/${userid}`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((dt1data) => {
                setUsers(dt1data);
            });
    });
    return users ? <EditUserForm users={users}/> : "Please wait........!!!"

}

function EditUserForm({users}) {
    const [name, setName] = useState(users.name);
    const [age, setAge] = useState(users.age);
    const [gender, setGender] = useState(users.gender);
    const [city, setCity] = useState(users.city);
    const [country, setCountry] = useState(users.country);
    const [image, setImage] = useState(users.image);

    
    const navigate = useNavigate();

    return (
       <div className="add-user-form" style={{marginLeft:'50px',marginTop:'50px'}}>
         <h1 style={{color: "blue", fontWeight: 'bolder', fontFamily: 'fantasy'}}>Edit user details </h1><br/>
           
            <TextField
                 label="Name"
                variant="outlined"
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Enter your name"
                value={name}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                 label="Age"
                variant="outlined"
                onChange={(event) => setAge(event.target.value)}
                type="text"
                placeholder="Enter your Age"
                value={age}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                label="Gender"
                variant="outlined"
                onChange={(event) => setGender(event.target.value)}
                type="text"
                placeholder="Enter your Gender"
                value={gender}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                 label="City"
                variant="outlined"
                onChange={(event) => setCity(event.target.value)}
                type="text"
                placeholder="Enter your City"
                value={city}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                label="Country"
                variant="outlined"
                onChange={(event) => setCountry(event.target.value)}
                type="text"
                placeholder="Enter your Country"
                value={country}
                style={{width:'800px'}}
            /><br/><br/>
            <TextField
                label="Image"
                variant="outlined"
                onChange={(event) => setImage(event.target.value)}
                type="text"
                placeholder="Enter your URL"
                value={image}
                style={{width:'800px'}}
            /><br/><br/>
            <Button
                color="primary"
                variant="contained"
                onClick={
                    () => {
                        const updatedUser = {
                            name: name,
                            age: age,
                            gender: gender,
                            city: city,
                            country: country,
                            image: image,
                        };
                        fetch(`https://6401ca170a2a1afebef22a4a.mockapi.io/users/${users.id}`, {
                            method: "PUT",
                            body: JSON.stringify(updatedUser),
                            headers: { "Content-Type": "application/json" },
                        })
                            .then((data)=>data.json())
                            .then(()=>navigate("/dashboard"));
                    }
                }
            >
             SAVE
            </Button>&nbsp;&nbsp;

            <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
                <ArrowBackIosIcon /> BACK
            </Button>
        </div>
    )
}
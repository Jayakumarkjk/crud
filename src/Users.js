import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";


export function Users({ users, id, deleteButton, editButton }) {
  const navigate = useNavigate();



  return (


    <div className='card' style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src={users.image} />
      <h2 className='card-title'>{users.name}  </h2>
      <p className='card-text'>{users.id} </p>
      <p className='card-text'>{users.age} </p>
      <p className='card-text'>{users.gender} </p>
      <p className='card-text'>{users.city} </p>
      <p className='card-text'>{users.country} </p>


      <IconButton
        aria-label="info"
        color="primary"
        onClick={() => navigate("/UserDetail/" + id)}
      >
        <InfoIcon />
      </IconButton>
      {/* <Button variant="primary"onClick={() => navigate("/edituser")}>Edit</Button>
      <Button variant="primary"onClick={() => 
        fetch(`https://6401ca170a2a1afebef22a4a.mockapi.io/users${id}`, {
          method: "DELETE",
          })}>DELETE</Button> */}

        {deleteButton} 
        {editButton}


    </div>
  );
}
;

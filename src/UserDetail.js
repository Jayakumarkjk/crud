import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";






export function UserDetail() {
  const [users, setUsers] = useState({});
  const { userid } = useParams();

  const navigate = useNavigate;

  useEffect(() =>{
    fetch(`https://6401ca170a2a1afebef22a4a.mockapi.io/users/${userid}`, {
      method: "GET",
    })
    .then((data) => data.json())
    .then((dtl) => {
      setUsers(dtl);
    });
  }, []);
 
  return (
    <div>
    <div className='user-detail-container'>
        {/* {user.map((userList)=>(
            <Users  users={userList}/> */}
            {/* {users.map((dt1, index)=>(
              <Users  key= {index} users={dt1} id={dt1.id} />
            // <Users  key= {data1.id} users={data1} id={data1.id} />
            
        //   <p  key={index}  new = {list} id={index}>
        //     </p>
        ))} */}

<div>
<div className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={users.image} />
      <h2 className='card-title'>{users.name}  </h2>
      <p className='card-text'>{users.id} </p>
      <p className='card-text'>{users.age} </p>
      <p className='card-text'>{users.gender} </p>
      <p className='card-text'>{users.city} </p>
      <p className='card-text'>{users.country} </p>
</div>    
</div>
<Button 
 color="primary" 
 variant="primary"
 onClick={() => navigate(-1)}>
            <ArrowBackIosIcon /> BACK
        </Button>
</div>

</div>



);

}

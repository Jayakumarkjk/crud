import { useState, useEffect } from 'react';
import Cards from './Cards.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { Users } from "./Users";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";




export function Dashboard() {
    const [user, setUser] = useState([]);
    // useEffect(() =>{
    //   fetch("https://6401ca170a2a1afebef22a4a.mockapi.io/users", {
    //     method: "GET",
    //   })
    //   .then((res) => res.json())
    //   .then((data1) => {
    //     setUser(data1);
    
    //   });
    // }, []);
    const getDetail = () => {
      fetch("https://6401ca170a2a1afebef22a4a.mockapi.io/users",
          { method: "GET" })
          .then((data) => data.json())
          .then((data1) => setUser(data1));
  }

    const navigate = useNavigate();
    useEffect(() => getDetail(), [])

return( 

    
    <div>
        <div className='users-list'>
            {/* {user.map((userList)=>(
                <Users  users={userList}/> */}
                {user.map((dt1, index)=>(
                  <Users  key= {index} users={dt1} id={dt1.id} 
                  
                  deleteButton={
                    <IconButton
                      color="error"
                      aria-label="deleteButton"
                      onClick={() => {
                        fetch(`https://6401ca170a2a1afebef22a4a.mockapi.io/users/${dt1.id}`, 
                          { method: "DELETE" })
                          .then(() => getDetail());
                        
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                  editButton={
                    <IconButton
                      color="secondary"
                      aria-label="editButton"
                      onClick={() => navigate(`/edit/${dt1.id}`)}
                    >
                      <EditIcon />
                    </IconButton>
                  }
                  />
                // <Users  key= {data1.id} users={data1} id={data1.id} />

                

            //   <p  key={index}  new = {list} id={index}>
            //     </p>

            ))}

        </div>

    </div>

);

}


// function Users({ users, id }){
//   const navigate = useNavigate();



//     return(

        
//         <div className='card' style={{ width: '18rem' }}> 
//         <Card.Img variant="top" src={users.image}/>
//     <h2 className='card-title'>{users.name} - {id} </h2>
//     <p className='card-text'>{users.id} </p>
//     <p className='card-text'>{users.age} </p>
//     <p className='card-text'>{users.gender} </p>
//     <p className='card-text'>{users.city} </p>
//     <p className='card-text'>{users.country} </p> 

//     <Button variant="primary" onClick={() => navigate("/user/" + id )}>ADD</Button>
//     {/* <Button variant="primary"onClick={() => navigate("/edit-user")}>Edit</Button>
//     <Button variant="primary"onClick={() => navigate("/")}>DELETE</Button> */}

//     </div>
// )
// };



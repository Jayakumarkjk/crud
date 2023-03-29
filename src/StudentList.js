import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { UserStudent } from "./UserStudent";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";




export function StudentList() {
    const [user, setUser] = useState([]);
   
    const getDetail = () => {
      fetch("https://641f060ef228f1a83eaee346.mockapi.io/adminlist",
          { method: "GET" })
          .then((data) => data.json())
          .then((data1) => setUser(data1));
  }

    const navigate = useNavigate();
    useEffect(() => getDetail(), [])

return( 

    
    <div>
        <div className='users-list'>
           
                {user.map((dt1, index)=>(
                  <UserStudent  key= {index} users={dt1} id={dt1.id} 
                  
                  deleteButton={
                    <IconButton
                      color="error"
                      aria-label="deleteButton"
                      onClick={() => {
                        fetch(`https://641f060ef228f1a83eaee346.mockapi.io/adminlist/${dt1.id}`, 
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
                      onClick={() => navigate(`/editstu/${dt1.id}`)}
                    >
                      <EditIcon />
                    </IconButton>
                  }
                  />
            ))}

        </div>

    </div>

);

}

import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route,  useNavigate } from "react-router-dom";
import { Dashboard } from './Dashboard';
import { AddUser } from './AddUser';
import { EditUser } from './EditUser';
import { UserDetail } from './UserDetail';
import { Home } from './Home';



function App() { 
  // const [dashboard, setDashboard] = useState([]);
  const [user, setUser] = useState([]);
  const [mode, setMode] = useState("light");
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // useEffect(() => {
  //   fetch("https://6401ca170a2a1afebef22a4a.mockapi.io/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDetail(data);
  //     });
  // }, []);

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>

    <div> 

<AppBar position='static'>
        <Toolbar>
          

    <Button color="inherit" onClick={()=> navigate ("/")}>Home</Button>
    <Button color="inherit" onClick={()=> navigate ("/dashboard")}>Dashboard</Button>
    <Button color="inherit" onClick={()=> navigate ("/adduser")}>Add User</Button>
    {/* <Button color="inherit" onClick={()=> navigate ("/edit")}>Edit User</Button> */}


<Button startIcon={mode==="dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    color="inherit" onClick={()=> setMode (mode === "light" ? "dark" : "light")}
      >{mode==="light" ? "dark" : "light"} Mode</Button>
      </Toolbar>
      </AppBar>
    
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      {/* <Route path="/userdetail" element={<UserDetail />}></Route> */}
      <Route path="/userdetail/:userid" element={<UserDetail />}></Route>
      <Route path="/adduser" element={<AddUser user={user}  setUser={setUser} />}></Route>
      <Route path="/edit/:userid" element={<EditUser />}></Route>



      </Routes>
      </div>

      </ThemeProvider>



  );
}




export default App;
import React, {useEffect, useState} from "react"; 
import './App.css';
import Axios from "axios";
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, ButtonGroup, Card, Hidden} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, NavLink, Redirect, useHistory} from 'react-router-dom';

function Log_in() {
 
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);
  const [usernameTextIDs] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [passwordTextIDs] = useState('');
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let history = useHistory();

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("https://rafacims-deploy.herokuapp.com/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response.data);
    });
  };

  const login = () => {
    Axios.post("https://rafacims-deploy.herokuapp.com/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (!response.data.auth){
        setLoginStatus(false);
      } else {
        localStorage.setItem("token", response.data.token);
        setLoginStatus(true); 
        history.push("/Pages/home");
      }
  });
  };

  const refresh = ()=>{
    window.location.reload();
  }

  const userAuthenticated = () =>{
    Axios.get("https://rafacims-deploy.herokuapp.com/isUserAuth",{
      headers: {
        "x-access-token": localStorage.getItem("token"),

      }
    }).then ((response)=>{
      console.log(response);
    });
  }


  return (

    <div className="App">

     <AppBar position="static">
        <Toolbar 
        style={{
          justifyContent: 'center',
          display: "inline-flex",
        }}
        >
          <Hidden xsDown>
      
          <ButtonGroup 
           color="inherit"
            variant="text" 
            aria-label="text primary button group">
           <Button onClick={()=>{
             if(loginStatus===true){
               history.push("/Pages/home")
             }else{
               history.push("/")
             }
           }}>Home</Button>
           <Button>Log Out
           </Button>
           </ButtonGroup>
         
          
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                
                open={open}
                onClose={handleClose}
              >
                <MenuItem>LogIn</MenuItem>
                
              </Menu>
              </Hidden>

             <Hidden smUp>
              <IconButton
                aria-label="more"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />Menu
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Cadets</MenuItem>
                <MenuItem onClick={handleClose}>Stock Management</MenuItem>
                <MenuItem onClick={handleClose}>Staff Accounts</MenuItem>
              </Menu>
              </Hidden>
              
             
          
          
        </Toolbar>
      </AppBar>

      <Grid container
        direction="column"
        alignItems="center"
        spacing={1} 
      >

<Grid item xs={3}>
        <Card
        style={
          {
           justifyContent: 'center',
           display: 'inline-flex',
           maxWidth: '300px',
           minWidth: '190px',
           margin: 10,
          }
        } 
        >

      <div 
      className="registration"
      style={
        {

         margin: 10 ,
        }
      
      }
      >
        <h2>Registration</h2>
        <TextField id={usernameTextIDs} label="Username" 
        onChange={(e) =>{
          setUsernameReg(e.target.value);
        }}
         />
       <TextField
          id={passwordTextIDs}
          label="Password"
          type="password" 
        onChange={(e) => {
          setPasswordReg(e.target.value)
        }}
        />
        <br></br>
      
        <Button 
        variant="contained" 
        color="primary" 
        style={
          {
           justifyContent: 'center',
           display: "inline-flex",
           margin: 12,}
        
        }
        onClick ={()=>{
          register();
          refresh();

        }}>Register</Button>
        </div>
        </Card>
        </Grid>

        <Grid item xs={3}>
        <Card
        style={
          {
           justifyContent: 'center',
           display: 'inline-flex',
           maxWidth: '300px',
           minWidth: '190px',
           margin: 10,
          }
        } 
        >

        <div 
        className="login" 
        style={
          {
           justifyContent: 'center',
           display: 'inline-block',
           margin: 12,}
        
        }>
          <h2>Login</h2>
          <TextField id={usernameTextIDs} label="Username" 
          onChange={(e) =>{
          setUsername(e.target.value);
        }}/>
        
        <TextField
          id={passwordTextIDs}
          label="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}/>
          <br></br>
        
          <Button 
          variant="contained" 
          color="primary" 
          style={
            {
             justifyContent: 'center',
             display: "inline",
             margin: 12,}
          
          }
          onClick={()=>{
            login();
            
          
          }}
            >Login</Button>
          
      </div>
      </Card>
      </Grid>
      </Grid>
     </div>
     //</div>
  );
        }


export default Log_in;


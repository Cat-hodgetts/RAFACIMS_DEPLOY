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
//These import aspects of libraries for later use

function Log_in() {
  //This is the the start of the app and encompasses all other code for the react app
 
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);
  const [usernameTextIDs] = useState('');
  const [passwordTextIDs] = useState('');
  //These are initialised variables for logging into the system

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //This is the variable and function for the icon button used later in the navigation. This is from the Material UI library - https://material-ui.com/
  let history = useHistory();

  Axios.defaults.withCredentials = true;

  //const register = () => {
    //Axios.post("https://rafacims-deploy.herokuapp.com/register", {
     // username: usernameReg,
      //password: passwordReg,
   // }).then((response) => {
    //console.log(response.data);
   // });
  //};

  //This is the Post request that allows new users to register, it is currently commented out as i do not want new account to be able to be registred however it may be needed in the future. 

  const login = () => {
    Axios.post("https://rafacims-deploy.herokuapp.com/login", {
      headers:{
        "Access-Control-Allow-Origin": true, 
      },
      username: username,
      password: password,
    }).then((response) => {
      if (!response.data.auth){
        setLoginStatus(false);
        return(
          <h3>Incorrect username and/or password</h3>
        )
      } else {
        localStorage.setItem("token", response.data.token);
        setLoginStatus(true); 
        history.push("/Pages/home");
      }
  });
  };

  //This block is the Post request that sends the username and passwords entered to the databse to be compared against existing user accounts. It states that if the data does not match (is not auth) then to set login status to false, and display a message to the user, however i it come back as auth then the page creates a cookie and sets a JSON Web token so that the user can stay logged in. It also automatically redirects the user to the home page.   

  const refresh = ()=>{
    window.location.reload();
  }
  //This function is used to refresh the page after a new user has been registered - Note it is not currently in use as the regist function is dormant. 

  const userAuthenticated = () =>{
    Axios.get("https://rafacims-deploy.herokuapp.com/isUserAuth",{
      headers: {
        "x-access-token": localStorage.getItem("token"),

      }
    }).then ((response)=>{
      console.log(response);
    });
  };
  //This function console logs the JSON web token to allow for checking that this function is working 


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
                <MenuItem onClick={handleClose}>Log Out</MenuItem>
  
              </Menu>
              </Hidden>
              
             
          
          
        </Toolbar>
      </AppBar>
      {/* This long block of code is from https://material-ui.com/ and is the 'appbar' navigation bar, it uses the react router dom and the 'ProtectedRoutes.js' page to set the navigation buttons to go to the correct page and only allow if logged in. It also scales for the diferent size of browser window, switching to a 'burger' menu once the window is too small to accurately fit the text on.   */}

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
        className="login" 
        style={
          {
           justifyContent: 'center',
           display: 'inline-block',
           margin: 12,}
        
        }>

          {/*This is the start and styling of the card with the login form on */}
          <h2>Login</h2>
          <TextField id={usernameTextIDs} label="Username" 
          onChange={(e) =>{
          setUsername(e.target.value);
        }}/>
        {/*This textfield allows the user to type in their username and then sets the value of the 'setUsername' variable to whatever the user has typed*/}
        
        <TextField
          id={passwordTextIDs}
          label="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}/>
          {/*This textfield allows the user to type in their Password and then sets the value of the 'setPassword' variable to whatever the user has typed, it also has the 'type' as password so that it appears hiden rather than as plain text*/}
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

            {/*This button calls the login function */}
          
      </div>
      </Card>
      </Grid>
      </Grid>
     </div>
  );
        }


export default Log_in;
//This is the final line and closes the app and exports for display on the front end. 


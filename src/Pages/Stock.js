import React, {useState} from "react"; 
import './App.css';
import Axios from "axios";
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, ButtonGroup, Card, Hidden, Paper, GridList} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom';
//These import aspects of libraries for later use 



function Stock() {  
  const [name, setName] = useState("");
  const [size, setSize] = useState(0);
  const [location, setLocation] = useState(0);
  const [newLocation, setNewLocation] = useState(0);
  const [itemList, setItemList] = useState([]);

  //These variables are being initialised now for later use with the form to add items to the database.

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //This is the variable and function for the icon button used later in the navigation. This is from the Material UI library - https://material-ui.com/

  const [loginStatus, setLoginStatus] = useState(true);
  let history = useHistory();
  const LogOut =()=>{
    setLoginStatus(false);
    history.push("/");
  }

  //This block initialises variable and sets the login status for the home page as true, it also creates the function to logout which sets the status to false and bounces the page back to the login page.

  const addItem = () => {
    Axios.post("https://rafacims-deploy.herokuapp.com/create", {
      name: name,
      size: size,
      location: location,
    }).then(() => {
      setItemList([
        ...itemList,
        {
          name: name,
          size: size,
          location: location,
        },
      ]);
    });
  };

  //This is a Post request that sends the information from the form through the server to add in item to the database. 

  const getItem = () => {
    Axios.get("https://rafacims-deploy.herokuapp.com/employees").then((response) => {
      setItemList(response.data);
    });
  };

  //This Get request brings up all the items in the database

  const updateItemLocation = (Id) => {
    Axios.put("https://rafacims-deploy.herokuapp.com/update", { location: newLocation, id: Id }).then(
      (response) => {
        setItemList(
          itemList.map((val) => {
            return val.id === Id
              ? {
                  id: val.id,
                  name: val.name,
                  size: val.size,
                  location: newLocation,
                }
              : val;
          })
        );
      }
    );
  };

  //This Put request changes the vale in the database one column of the item, in this case the location

  const deleteItem = (Id) => {
    Axios.delete(`https://rafacims-deploy.herokuapp.com/delete/${Id}`).then((response) => {
      setItemList(
        itemList.filter((val) => {
          return val.id !== Id;
        })
      );
    });
  };
  //This allows the user to delete items from the database
  
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
          
           <IconButton
                 aria-label="account of current user"
                 aria-controls="menu-appbar"
                 aria-haspopup="true"
                 onClick={handleMenu}
                 color="inherit"
               >
                 <AccountCircle />
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
                 <MenuItem onClick={()=>{LogOut();}}>Logout</MenuItem>
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
                 <MenuItem onClick={()=>{
             if(loginStatus===true){
               history.push("/Pages/home")
             }else{
               history.push("/")
             }
           }}>Home</MenuItem>
                 <MenuItem onClick={()=>{
             if(loginStatus===true){
               history.push("/Pages/cadets")
             }else{
               history.push("/")
             }
           }}>Cadets</MenuItem>
                 <MenuItem onClick={()=>{
             if(loginStatus===true){
               history.push("/Pages/stock")
             }else{
               history.push("/")
             }
           }}>Stock Management</MenuItem>
                 <MenuItem onClick={()=>{
             if(loginStatus===true){
               history.push("/Pages/staff")
             }else{
               history.push("/")
             }
           }}>Staff Accounts</MenuItem>
               </Menu>
               </Hidden>
               
              
           
           
         </Toolbar>
       </AppBar>
       {/* This long block of code is from https://material-ui.com/ and is the 'appbar' navigation bar, it uses the react router dom and the 'ProtectedRoutes.js' page to set the navigation buttons to go to the correct page and only allow if logged in. It also scales for the diferent size of browser window, switching to a 'burger' menu once the window is too small to accurately fit the text on.   */}

       <h1>Add an item here!</h1>
       <h5>Warning: For this initial version the show items button will show every item in the database individually. For an overview of how many of each item please visit the home page</h5>
      {/*This is the text that will be displayed at the top of the page, just below the navigation */} 
       
       <div className="information">
       <Grid container
        direction="column"
        alignItems="center"
        spacing={1} 
      >
        <Paper elevation={3}>
          <h3>Add an Item</h3>
        <Grid item xs={12}>
        <TextField
          id="filled-basic"
          style={{ margin: 18 }}
          label="Item Name"
          placeholder="Item Name..."
          margin="normal"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        {/* This sets the name of the new item in the database to be whatever the user types into the text box*/}
        </Grid>
        <Grid item xs={12}>
        <TextField
        id="filled-text"
        style={{ margin: 18 }}
        label="Size"
        type="text"
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
        </Grid>
         {/* This sets the Size of the new item in the database to be whatever the user types into the text box*/}
        
        <Grid item xs={12}>
        <TextField
          label="Location"
          style={{ margin: 18 }}
          type="Text"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        /></Grid>
        {/* This sets the Location of the new item in the database to be whatever the user types into the text box */}
        <Button onClick={addItem}>Add item</Button>
        {/* This calls the 'addItem' function when the button is pressed*/}
        <Button onClick={getItem}>Show all items</Button>
        {/* This calls the 'getItem' function when the button is pressed */}
        </Paper>
        </Grid>

        {itemList.map((val, key) => {
          return (
            <div className="items">
              <Card>
                <h2>Name: {val.name}</h2></Card><Card><h2>Size: {val.size}</h2>
                </Card>
                <Card>
                <h2>Location: {val.location}</h2>
                </Card>

               <Card>
                    {/* This displays all items in the database and sets headngs for the data*/}
              <div>
                <TextField
                  type="text"
                  placeholder="Name of cadet issued to...."
                  onChange={(event) => {
                    setNewLocation(event.target.value);
                  }}
                />
                 {/* This sets the new location of the item in the database to be whatever the user types into the text box*/}
                <Button
                  onClick={() => {
                    updateItemLocation(val.id);
                  }}
                >
                  {" "}
                  Update
                </Button>
                 {/* This calls the 'updateItemLocation function when pressed*/}

                <Button
                  onClick={() => {
                    deleteItem(val.id);
                  }}
                >
                  Delete
                </Button>
                {/* This calls the 'deleteItem' function when pressed */}

              </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
       
     );

 }


 export default Stock;
 //This is the final line and closes the app and exports for display on the front end. 
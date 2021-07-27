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



function Stock() {  
  const [name, setName] = useState("");
  const [size, setSize] = useState(0);
  const [location, setLocation] = useState(0);
  const [newLocation, setNewLocation] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [loginStatus, setLoginStatus] = useState(true);
  let history = useHistory();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const LogOut =()=>{
    setLoginStatus(false);
    history.push("/");
  }
  const addItem = () => {
    Axios.post("http://localhost:3001/create", {
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

  const getItem = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setItemList(response.data);
    });
  };

  const updateItemLocation = (Id) => {
    Axios.put("http://localhost:3001/update", { location: newLocation, id: Id }).then(
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

  const deleteItem = (Id) => {
    Axios.delete(`http://localhost:3001/delete/${Id}`).then((response) => {
      setItemList(
        itemList.filter((val) => {
          return val.id !== Id;
        })
      );
    });
  };
  
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

       <h1>Welcome back!</h1>
       
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
        
        <Grid item xs={12}>
        <TextField
          label="Location"
          style={{ margin: 18 }}
          type="Text"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        /></Grid>
        </Paper>
        </Grid>
        <Button onClick={addItem}>Add Items</Button>
      </div>
      <div className="Items">
        <Button onClick={getItem}>Show Items</Button>

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
              <div>
                <TextField
                  type="text"
                  placeholder="Name of cadet issued to...."
                  onChange={(event) => {
                    setNewLocation(event.target.value);
                  }}
                />
                <Button
                  onClick={() => {
                    updateItemLocation(val.id);
                  }}
                >
                  {" "}
                  Update
                </Button>

                <Button
                  onClick={() => {
                    deleteItem(val.id);
                  }}
                >
                  Delete
                </Button>

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
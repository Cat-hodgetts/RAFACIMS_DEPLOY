import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from "axios";
import 'fontsource-roboto';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {useHistory} from 'react-router-dom';
import { Grid, ButtonGroup, Card, Hidden} from "@material-ui/core";
//These import aspects of libraries for later use 

function Home(){
  //This is the the start of the app and encompasses all othe code for the react app

const [WWMtotal, setWWMTotal]=useState([])
const [WWFtotal, setWWFTotal]=useState([])
const [WBMtotal, setWBMTotal]=useState([])
const [WBFtotal, setWBFTotal]=useState([])
const [Troutotal, setTrouTotal]=useState([])
const [Skitotal, setSkiTotal]=useState([])
const [Slatotal, setSlaTotal]=useState([])
const [TieStotal, setTieSTotal]=useState([])
const [TieLtotal, setTieLTotal]=useState([])
const [Bertotal, setBerTotal]=useState([])
const [WWMstores, setWWMStores]=useState([])
const [WWFstores, setWWFStores]=useState([])
const [WBMstores, setWBMStores]=useState([])
const [WBFstores, setWBFStores]=useState([])
const [Troustores, setTrouStores]=useState([])
const [Skistores, setSkiStores]=useState([])
const [Slastores, setSlaStores]=useState([])
const [TieSstores, setTieSStores]=useState([])
const [TieLstores, setTieLStores]=useState([])
const [Berstores, setBerStores]=useState([])
const [WWMsize, setWWMSize]=useState([])
const [WWFsize, setWWFSize]=useState([])
const [WBMsize, setWBMSize]=useState([])
const [WBFsize, setWBFSize]=useState([])
const [Trousize, setTrouSize]=useState([])
const [Skisize, setSkiSize]=useState([])
const [Slasize, setSlaSize]=useState([])
const [TieSsize, setTieSSize]=useState([])
const [TieLsize, setTieLSize]=useState([])
const [Bertsize, setBerSize]=useState([])
const [WWMissued, setWWMIssued]=useState([])
const [WWFissued, setWWFIssued]=useState([])
const [WBMissued, setWBMIssued]=useState([])
const [WBFissued, setWBFIssued]=useState([])
const [Trouissued, setTrouIssued]=useState([])
const [Skiissued, setSkiIssued]=useState([])
const [Slaissued, setSlaIssued]=useState([])
const [TieSissued, setTieSIssued]=useState([])
const [TieLissued, setTieLIssued]=useState([])
const [Bertissued, setBerIssued]=useState([])

//This is a list of variables that are set up to be used in the stock table


useEffect(()=>{
  Axios.get("https://rafacims-deploy.herokuapp.com/Total")
  .then(resp=>{
    console.log(resp)
    setWWMTotal(resp.data[0].TotalStock)
    setWWFTotal(resp.data[1].TotalStock)
    setWBMTotal(resp.data[2].TotalStock)
    setWBFTotal(resp.data[3].TotalStock)
    setTrouTotal(resp.data[4].TotalStock)
    setSkiTotal(resp.data[5].TotalStock)
    setSlaTotal(resp.data[6].TotalStock)
    setTieSTotal(resp.data[7].TotalStock)
    setTieLTotal(resp.data[8].TotalStock)
    setBerTotal(resp.data[9].TotalStock)
  })
},[])
//This is a get request from front end to the server to get the information from the 'total' function, it sets the values of the variables earlier initialised to be the total for each item with the same name.


useEffect(()=>{
  Axios.get("https://rafacims-deploy.herokuapp.com/Stores")
  .then(resp=>{
    setWWMStores(resp.data[0].StoresStock)
    setWWFStores(resp.data[1].StoresStock)
    setWBMStores(resp.data[2].StoresStock)
    setWBFStores(resp.data[3].StoresStock)
    setTrouStores(resp.data[4].StoresStock)
    setSkiStores(resp.data[5].StoresStock)
    setSlaStores(resp.data[6].StoresStock)
    setTieSStores(resp.data[7].StoresStock)
    setTieLStores(resp.data[8].StoresStock)
    setBerStores(resp.data[9].StoresStock)
  })
},[])
//This is a get request from front end to the server to get the information from the 'Stores' function, it sets the values of the variables earlier initialised to be the total for each item that has teh location as 'stores' with the same name.

useEffect(()=>{
  Axios.get("https://rafacims-deploy.herokuapp.com/Issued")
  .then(resp=>{
    //console.log(resp)
    setWWMIssued(resp.data[0].IssuedStock)
    setWWFIssued(resp.data[1].IssuedStock)
    setWBMIssued(resp.data[2].IssuedStock)
    setWBFIssued(resp.data[3].IssuedStock)
    setTrouIssued(resp.data[4].IssuedStock)
    setSkiIssued(resp.data[5].IssuedStock)
    setSlaIssued(resp.data[6].IssuedStock)
    setTieSIssued(resp.data[7].IssuedStock)
    setTieLIssued(resp.data[8].IssuedStock)
    setBerIssued(resp.data[9].IssuedStock)
  })
},[])
//This is a get request from front end to the server to get the information from the 'Issued' function, it sets the values of the variables earlier initialised to be the total of each item that is not in stores for each item with the same 

useEffect(()=>{
  Axios.get("https://rafacims-deploy.herokuapp.com/Sizes")
  .then(resp=>{
    console.log(resp)
    setWWMSize(resp.data[0].Sizes)
    setWWFSize(resp.data[1].Sizes)
    setWBMSize(resp.data[2].Sizes)
    setWBFSize(resp.data[3].Sizes)
    setTrouSize(resp.data[4].Sizes)
    //setSkiSize(resp.data[5].Sizes)
    //setSlaSize(resp.data[6].Sizes)
    //setTieSSize(resp.data[7].Sizes)
    //setTieLSize(resp.data[8].Sizes)
    //setBerSize(resp.data[9].Sizes)
  })
},[])

//This is a get request from front end to the server to get the information from the 'Sizes' function, it sets the values of the variables earlier initialised to be the total for each item with the same. This code is WIP as it is a future feature o teh home page havng more information about the stock level of specific sizes

const [loginStatus, setLoginStatus] = useState(true);
let history = useHistory();
const LogOut =()=>{
  setLoginStatus(false);
  history.push("/");
}

//This block initialises variable and sets the login status for the home page as true, it also creates the function to logout which sets the status to false and bounces the page back to the login page.

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
//This is the variable and function for the icon button used later in the navigation. This is from the Material UI library - https://material-ui.com/


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});
//this is code from Material UI for the styling of the table - https://material-ui.com/





const createData = (name, stores, issued, total )=>{
  return {
    name,
    stores,
    issued,
    total,
    details: [
      { Size: '60/60/60', Stores: 43, issued: 3 , total: 46},
    ],
  };
}

//This code sets up the data that will be displayed in the table - originally from https://material-ui.com/ edited to fit this project. 


const Row = (props)=>{
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  //Code from https://material-ui.com/ that creates the necessary settings for the rows, it also initialises the ablity to 'open' and 'close' which will be used in the future for the drop down sectin with specific size info.

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.stores}</TableCell>
        <TableCell>{row.issued}</TableCell>
        <TableCell>{row.total}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Size:</TableCell>
                    <TableCell>Stores:</TableCell>
                    <TableCell>Issued:</TableCell>
                    <TableCell>Total:</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.Size}>
                      <TableCell component="th" scope="row">
                        {detailsRow.Size}
                      </TableCell>
                      <TableCell>{detailsRow.Stores}</TableCell>
                      <TableCell>{detailsRow.issued}</TableCell>
                      <TableCell>{detailsRow.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );



}
//This is a react fragment, used for returning multiple elements, that contains the table displayed on the home page. Using the 'Rows' function from before and the adding in some of the previously defined variables to populate the table. 

Row.propTypes = {
  row: PropTypes.shape({
    stores: PropTypes.number.isRequired,
    issued: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        Size: PropTypes.string.isRequired,
        Stores: PropTypes.number.isRequired,
        issued: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
//Here the rows of the table are set up to get data from the variables and sets the data type to correspond to the correct data coming in from the database. 


const rows = [
  createData('Wedgewood Shirt (M)', WWMstores, WWMissued, WWMtotal),
  createData('Wedgewood Shirt (F)', WWFstores, WWFissued, WWFtotal),
  createData('Working Blue Shirt (M)', WBMstores, WBMissued, WBMtotal),
  createData('Working Blue Shirt (F)', WBFstores, WBFissued, WBFtotal),
  createData('Trousers', Troustores, Trouissued, Troutotal),
  createData('Skirt', Skistores, Skiissued, Skitotal), 
  createData('Slacks', Slastores, Slaissued, Slatotal),
  createData('Tie (Short)', TieSstores, TieSissued, TieStotal), 
  createData('Tie (Long)', TieLstores, TieLissued ,TieLtotal), 
  createData('Beret', Berstores, Bertissued, Bertotal),
];
//This section sets the name of each row and the data displayed for each row to be the variables defined before as the information from the SQL queries by the server. 

  return (
    <div className="App">

      <AppBar position="static">
         <Toolbar 
         style={{
           justifyContent: 'center',
           display: "inline-flex",
         }}>
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
           <Button onClick={()=>{
             if(loginStatus===true){
               history.push("/Pages/Stock")
             }else{
               history.push("/")
             }
           }}>Add items</Button>
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
               history.push("/Pages/Stock")
             }else{
               history.push("/")
             }
           }}>Add items</MenuItem>
               </Menu>
               </Hidden>
         </Toolbar>
       </AppBar>
{/* This long block of code is from https://material-ui.com/ and is the 'appbar' navigation bar, it uses the react router dom and the 'ProtectedRoutes.js' page to set the navigation buttons to go to the correct page and only allow if logged in. It also scales for the diferent size of browser window, switching to a 'burger' menu once the window is too small to accurately fit the text on.   */}
       <h1>Welcome Back!</h1>
       <h3>Here's an overview of the current stock</h3>

      {/* These are heading text that will appear on the screen.*/}
       <Card>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name:</TableCell>
            <TableCell>In Stores:</TableCell>
            <TableCell>Issued:</TableCell>
            <TableCell>Total:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
    </div>
  );
};
{/* This is simply the final stage of displaying the table, using the other code block from earlier. It sets the headings for the table and the info to be pulled from previous code block. Again sourced from https://material-ui.com/ and edited to suit the project */}
export default Home;
//This is the final line and closes the app and exports for display on the front end. 

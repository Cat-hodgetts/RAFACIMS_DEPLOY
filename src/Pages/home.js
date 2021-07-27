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

function Home(){

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
console.log(Troustores)

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
//console.log(issued)

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

const [loginStatus, setLoginStatus] = useState(true);
let history = useHistory();
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});
const LogOut =()=>{
  setLoginStatus(false);
  history.push("/");
}



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


const Row = (props)=>{
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

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
               </Menu>
               </Hidden>
               
              
           
           
         </Toolbar>
       </AppBar>
       <h1>Welcome Back!</h1>
       <h3>Here's an overview of the current stock</h3>
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
export default Home;

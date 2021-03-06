import React from 'react';
import {Route, Redirect } from 'react-router-dom';

function ProtectedRoute({isAuth, component: Component, ...rest }){
  return (
    <Route
    {...rest} 
    render={(props)=>{
    if(isAuth){
      return <Redirect to={{pathname:"./home.js"}}/>;
    }else{
      return <Redirect to={{pathname:"/", state: {from:props.location} }}/>;
    }
  }}
  />
  );
}
  


export default ProtectedRoute;
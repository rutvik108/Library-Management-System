import React, { useContext } from "react";
import { Breadcrumbs, Button, Grid, InputLabel, OutlinedInput, TextField, makeStyles} from "@material-ui/core";
import {style} from "../Profile/style";
import { NavLink, Navigate, json } from "react-router-dom";
import { useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {Typography} from "@material-ui/core";
import {Link} from "@material-ui/core";
import axios from "axios";
import { userContext } from "../../App";


export const Login = () =>{
    const navigate =useNavigate();
    const userDetails =useContext(userContext)


    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email Is Required").email("Entered Email Is Not Valid"),
        password: Yup.string().required("Enter Password").min(8,"password is too short").max(16,"password is too Long"),
         })
         const classes=style();

         const onsubmit = (data)=>{
            console.log(data)
            axios.post("http://localhost:5000/api/user/login",data).then((res)=>{
                toast.success("successfully LoggedIn")
                navigate("/book-listing")
            }  )
        }

return (
    <div className={classes.wrapper}> 
          {/* <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            className="breadcrumb-wrapper"
          >
            <Link color="inherit" href="/" title="Home">
              Home
            </Link>
            <Typography color="textPrimary">Create an Account</Typography>
          </Breadcrumbs>   */}

<h1 className="SignupHeader">Login </h1>
<hr className="redline"/>
<br/>
<h3 className="personalInfoHeader">Personal Information</h3>
<br/>
<InputLabel className="personalInfoHeader">Please Enter Following Information To Login  Your Account</InputLabel>
<br/>


<Formik initialValues={{
    email: "",  
    password: "", 
}}
 validationSchema={validationSchema}
 onSubmit= {onsubmit}
 >
    {
        ({values, errors, handleChange ,handleSubmit, })=>{
            return(

<div>
<form className="registerPage" onSubmit={handleSubmit}>

            <TextField
           
           name="email"
           label="Email Address*"
          
           variant="outlined"
           onChange={handleChange}
          /> 

       <InputLabel className="error">
      
        {errors.email ? errors.email : ""}</InputLabel>

         <br/><br/>
         
         <TextField
           
           name="password"
           label="Password "
           type="password"
           variant="outlined"
       
           onChange={handleChange}
         
           autoComplete="off"
           
       />   
       <InputLabel className="error">    
        {errors.password ? errors.password:""  }</InputLabel>     
    
    <br/>
 
    <br/>
    <div>
      
    </div>    
        <Button
             // className="pink-btn btn"
            variant="contained"
            color="secondary"
            type="submit"
           className="registerbtn"
        > 
            Register
        </Button>
    <br/>    <br/>    <br/>

</form>
</div>
            );
        }
    }

</Formik>


 
</div>
);
}
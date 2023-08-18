
// import classes from "./Profile.module.css";
import { Breadcrumbs, Button, Grid, InputLabel, OutlinedInput, TextField} from "@material-ui/core";
import {style} from "./style";
import { NavLink, Navigate, json } from "react-router-dom";
import { useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {Typography} from "@material-ui/core";
import {Link} from "@material-ui/core";
import axios from "axios";



export const Profile = ()=>{
    const classes=style();
    const navigate=useNavigate();

    // const[details , setDetails] = useState(
    //     {
    //         email: "",
    //         password: "",
    //         confirmpassword: ""
    //     }
    // ); 

    // const handleChange = (e, property)=>{
    //     setDetails({
    //         ...details,
    //         [property]:e.target.value
    //     })    
    // }

const validationSchema = Yup.object().shape({
    firstName:Yup.string().required("Name Is Required"),
    lastName:Yup.string().required("last name is required"),
    email: Yup.string().required("Email Is Required").email("Entered Email Is Not Valid"),
    roleId:Yup.number().required("please select any option"),
    password: Yup.string().required("Enter Password").min(8,"password is too short").max(16,"password is too Long"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null],"password must match ").required("required field"),
})
    
// const onsubmit = async(data) => {
//     delete data.confirmpassword;
//     console.log(data);
//     toast.success("done");
//     axios.post("http://localhost:5000/api/user",data,).catch(err=>{console.log(err)})
// }

const onsubmit = async (data)=>{
    delete data.confirmPassword;
    console.log(data)
    axios.post("http://localhost:5000/api/user",data,).catch(err=>{
        console.log(err)
    })
    navigate("/login")
   toast.success("successfully registered")
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

<h1 className="SignupHeader">Create An Account</h1>
<hr className="redline"/>
<br/>
<h3 className="personalInfoHeader">Personal Information</h3>
<br/>
<InputLabel className="personalInfoHeader">Please Enter Following Information To Create Your Account</InputLabel>
<br/>


<Formik initialValues={{
    firstName: "",
    lastName: "",
    email: "",
    roleId:0,
    password: "", 
    confirmPassword:""
  

}}
 validationSchema={validationSchema}
 onSubmit= {onsubmit}
 >
    {
        ({values, errors, handleChange ,handleSubmit, })=>{
            return(

<div>
<form className="registerPage" onSubmit={handleSubmit}>

<Grid container direction="row" spacing={10}>
    <Grid item>
        <TextField
           name="firstName"
           label="First Name*"
           variant="outlined"
           onChange={handleChange}
          
           
        />
        <InputLabel className="error">{errors.firstName ? errors.firstName : ""}</InputLabel>
        </Grid>
    <Grid item> <TextField
         name="lastName"
         label="Last Name*"
         variant="outlined"
         onChange={handleChange} 
         />
         <InputLabel className="error">
        
         { errors.lastName ? errors.lastName : ""}
         </InputLabel>
         </Grid>
</Grid>
         <br/>
         <Grid container direction="row" spacing={10}>
            <Grid item>
            <TextField
           
           name="email"
           label="Email Address*"
          
           variant="outlined"
           onChange={handleChange}
          
           
       /> <InputLabel className="error">
      
        {errors.email ? errors.email : ""}</InputLabel>

            </Grid>
            
         </Grid>
         <br/><br/>
         
         <Grid container direction="row" spacing={10}>
            <Grid item> <TextField
           
           name="password"
           label="Password "
           type="password"
           variant="outlined"
       
           onChange={handleChange}
         
           autoComplete="off"
           
       />   
       <InputLabel className="error">    
        {errors.password ? errors.password:""  }</InputLabel> </Grid>


            <Grid item>
            <TextField
           
           name="confirmPassword"
           label="Re Enter Password "
           type="password"
           variant="outlined"
       
           onChange={handleChange}
         
           autoComplete="off"
           
       />  
              <InputLabel className="error" >

              {errors.confirmPassword ? errors.confirmPassword:""  }</InputLabel></Grid>

         </Grid>
         <br/>
         <Grid >
                <select
                onChange={handleChange}
                name="roleId"
                
           
                >
                    <option value={values.roleId = 1}>Buyer</option>
                    <option value={values.roleId = 2}>Seller</option>
                </select>

                <InputLabel className="error">
      
        {errors.rollID ? errors.rollId : ""}</InputLabel>
            </Grid>

    
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

};


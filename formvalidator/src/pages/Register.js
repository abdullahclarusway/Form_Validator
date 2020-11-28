import React from "react";
import { useFormik } from "formik";
import { makeStyles } from '@material-ui/core/styles';
import logo from "../assets/logo.jpeg";
import { Button, TextField, Grid, Container, FormHelperText } from "@material-ui/core";

const stylesFunc = makeStyles({
    wrapper: {
      marginTop: "5rem",
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
      
    },

    title:{
      color:"white",
    },

    form:{

    },

    logo:{
        height:"200px",
       
    }
  });
  

  function Register() {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

      const signupStyles = stylesFunc();

      return (
          
        
        <Container className={signupStyles.wrapper} > 
        <img src={logo} className={signupStyles.logo} />
        <h1 className={signupStyles.title}>Wellcome to Clarusway</h1>
        <div >
        <form onSubmit={formik.handleSubmit} >
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder="First Name"
            
          />
          </Grid>
          <Grid item xs={12}>
          <label htmlFor="lastName"></label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            placeholder= "Last Name"
          />
          </Grid>
           <Grid item xs={12}>
          <label htmlFor="email"></label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email Address"
          />
          </Grid>
          <Grid item xs={12}>
          <label htmlFor="password"></label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
          </Grid>
          <Grid item xs={12}>
          <label htmlFor="confirmPassword"></label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            placeholder="Confirm Password"
          />
          </Grid>
           <Grid item xs={12}>
          <button type="submit">Register</button>
          </Grid>
          </Grid>
        </form>
        </div>
        
        </Container>
      
      );
};

export default Register;

import React from "react";
import { useFormik } from "formik";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Register = () => {
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
      return (
        <Container maxWidth="sm">
             <Grid container spacing={3}>
        <form onSubmit={formik.handleSubmit}>
        <Grid item xs={12}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          </Grid>
          <Grid item xs={12}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          </Grid>
           <Grid item xs={12}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          </Grid>
           <Grid item xs={12}>
          <button type="submit">Submit</button>
          </Grid>
        </form>
        </Grid>
        </Container>
      );
};

export default Register;

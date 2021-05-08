import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { database } from './fire.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));



export default function Student( {topicId, id}) {

 const [fname, setfname] = React.useState("");
 const [lname, setlname] = React.useState("");
 const [rollno, setrollno] = React.useState("");
 const [dept, setdept] = React.useState("");
 const [sec, setsec] = React.useState("");

 const classes = useStyles();


  function handleit(){
    try {
      database.s_details
        .where('sid', '==', id)
        .get()
        .then((existingFiles) => {
          const existingFile = existingFiles.docs[0]
          if (existingFile) {
            existingFile.ref.update({ fname:fname, lname:lname, rollno:rollno, dept:dept, sec:sec})
          } else {
            database.s_details.add({
              sid: id,
              fname:fname, 
              lname:lname, 
              rollno:rollno, 
              dept:dept, 
              sec:sec
            })
          }
        })
        alert("Details Added")
      
    } catch (error) {
      alert("Error Please try again")
    }
  
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Student Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Roll No"
            fullWidth
            autoComplete="shipping address-line1"
            value={rollno}
            onChange={(e) => setrollno(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Department"
            fullWidth
            autoComplete="shipping address-level2"
            value={dept}
            onChange={(e) => setdept(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="Section" fullWidth value={sec}
            onChange={(e) => setsec(e.target.value)} />
        </Grid>
      </Grid>
      <br></br>
      <p></p>
      <Button variant="contained" className={classes.button} color="primary" onClick={handleit}> Update Details</Button>
    </React.Fragment>
  );
}
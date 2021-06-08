import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom'
import { database } from './fire.js'
import { Form } from 'react-bootstrap'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Digital Course File
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: '50%',
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
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    paddingRight: 'auto',
    alignItems: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    paddingRight: '120px',
    alignItems: 'center',
  },
}));

export default function Feedback() {
  const classes = useStyles();
  const [name, setname] = React.useState("");
  const [q1, setq1] = React.useState(""); 
  const [q2, setq2] = React.useState("");
  const [q3, setq3] = React.useState("");
  const [q4, setq4] = React.useState("");


  let {topicId} = useParams()
  
  function handleit(e){
      if(q1 && q2 && q3 && q4){
        e.preventDefault()
        database.feedback.add({
          proff_id: topicId,
          createdAt: database.getTime(),
          name: name,
          q1: q1,
          q2: q2,
          q3: q3,
          q4:q4
        })
        setq1('')
        setq2('')
        setq3('')
        setq4('')
        setname('')
        alert("Feedback Submitted!! :-)")
      }
      else{
        alert("Plese Enter all fields!! :-(")
      }
    
  }
  function clear(){
    setname('')
    setq1('')
    setq2('')
    setq3('')
    setq4('')
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Digital Course File System
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          
          <Typography component="h1" variant="h4" align="center">
            Feedback Portal
          </Typography>
          
          <br></br>
          <Form>
          <Typography component="h1" variant="h6" align="center">
            <b>Enter the course name:</b>
            <br></br>
            <Form.Control
                type='text'
                required
                value={name}
                onChange={(e) => setname(e.target.value)} />
          </Typography>
          <Typography component="h1" variant="h6" align="center">
            <b>Q1:Rate the course(1-5)</b>
            <br></br>
            <Form.Control
                type='number'
                required
                value={q1}
                onChange={(e) => setq1(e.target.value)} />
          </Typography>
          <br></br>
          <Typography component="h1" variant="h6" align="center">
            <b>Q2:Rate the teaching (1-5)</b> 
            <br></br>
            <Form.Control
                type='number'
                required
                value={q2}
                onChange={(e) => setq2(e.target.value)}/>
          </Typography>
          <br></br>
          <Typography component="h1" variant="h6" align="center">
            <b>Q3:Overall Rating (1-10)</b> 
            <br></br>
            <Form.Control
                type='number'
                required
                value={q3}
                onChange={(e) => setq3(e.target.value)}/>
          </Typography>
          <br></br>
          <Typography component="h1" variant="h6" align="center">
            <b>Q4:Anymore suggestion</b> 
            <br></br>
            <textarea
                required
                value={q4}
                onChange={(e) => setq4(e.target.value)}
              />
          </Typography>
          <br></br>
            <Button variant='danger' className={classes.button} onClick={clear}>
              Cancel
            </Button>
            <Button
            variant="contained"
            color="primary"
            onClick={handleit}
            className={classes.buttons}>
             <p style={{alignItems:'center'}}>Submit</p>    
            </Button>
            </Form>
            
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
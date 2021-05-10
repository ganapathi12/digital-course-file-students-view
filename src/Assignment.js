import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Student from './Student';
import UploadAssg from './UplodeAssg';
import { useParams } from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import { database } from './fire.js'



const id = uuidV4()

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
      width: '75%',
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

export default function Assignment() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Student Details', 'Uploding details'];
  const [docname, setdocname] = React.useState(""); 
  const [docdue, setdocdue] = React.useState("");
  const [docdes, setdocdes] = React.useState("");
  const [doctoggle, setdoctoggle] = React.useState(true);
  let [vaild, setvaild] = React.useState(true)
  
  const sendDataToParent = (index) => { 
    console.log(index);
    setvaild(index);
  };



  let {topicId} = useParams()
  const docRef = database.a_folders.doc(topicId)
  docRef.get().then((doc) => {    
    if (doc.exists) {        
      setdocname(doc.data().name); 
      setdocdue(doc.data().date);
      setdocdes(doc.data().desp); 
      setdoctoggle(doc.data().toggle);
      } 
      else {        
        console.log("No such document!");    
      }}).catch((error) => {
            console.log("Error getting document:", error);
          });
  console.log(docname)
  

  function getStepContent(step) {
    
    switch (step) {
      case 0:
        return <Student topicId={topicId} id={id} sendDataToParent={sendDataToParent} />;
      case 1:
        return <UploadAssg topicId={topicId} sid={id} sendDataToParent={sendDataToParent}/>;
      default:
        throw new Error('Unknown step');
    }
  }


  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setvaild(true)
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  var today = new Date()
  let date;
  if(today.getMonth() + 1 < 10)
    date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate();
  else
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
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
            Assignment Portal for {docname}
          </Typography>
          <br></br>
          <Typography component="h1" variant="h6" align="left">
            <b>Due:</b> {docdue}
          </Typography>
          <br></br>
          <Typography component="h1" variant="h6" align="left">
            <b>Description:</b> {docdes}
          </Typography>
          
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          { (docdue < date && !(doctoggle)) || (docdue >= date && !(doctoggle)) ? (
          <h2 style={{textAlign:'center', color:'red'}}>No More Submittion Accpected!!</h2>
          ) : (
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your Submittion.
                </Typography>
                <Typography variant="subtitle1">
                  Your Submittion Ref. number is {id} 
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}

                  {console.log(vaild)}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled = {vaild}
                  >
                    {activeStep === steps.length - 1 ? 'Submit Assignment' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment> )
          }
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import Alert from '@mui/material/Alert';
import { getIn } from './Data'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { Paper } from '@mui/material';
import './Cards.css';
import { Button } from '@mui/material';


var string = localStorage.getItem("input string");
var personObj = getIn(string);


function Cards() {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        
        >
          Matches all current databases
        </Alert>
      </Collapse>
      </Box>

      <Grid  
      className="card"
      direction="row"
      alignItems="column"
      style={{ minHeight: '100vh', display:'flex'}}
      >
    <Grid item xs={3} >
    <Card sx={{ maxWidth: 300 }} >
      <Paper>
        <h3>Department of State</h3>
      </Paper>
      <CardMedia
        component="img"
        height="300"
        image={personObj.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {personObj.fullName}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Date of Birth: {personObj.dateOfBirth}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Passport Number: {personObj.passportNumber}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Passport Expiration: {personObj.passportExpiration}
        </Typography>

      </CardContent>
    </Card>
  </Grid>
  
  <Grid item xs={3}>
  <Card sx={{ maxWidth: 300 }}>
      <Paper>
        <h3>Social Security</h3>
      </Paper>  
      <br></br>    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {personObj.fullName}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Date of Birth: {personObj.dateOfBirth}
        </Typography>

      </CardContent>
    </Card>

   
  </Grid>

  <Grid 
  item xs={3} >
  <Card sx={{ maxWidth: 300 }}>
      <Paper>
        <h3>Department of Motor Vehicles</h3>
      </Paper>
      <CardMedia
        component="img"
        height="300"
        image={personObj.image2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {personObj.fullName}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          DL: {personObj.driversLicense}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Date of Birth: {personObj.dateOfBirth}
        </Typography>

      </CardContent>
    </Card>
    </Grid>
        
  </Grid>
  
    </div>
    
  )
}

export default Cards;
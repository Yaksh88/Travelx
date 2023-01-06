
import React from 'react';
import '../App.css';
import './SSN.css';
import { Grid, Button, TextField, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import {getIn} from './Data'




const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "white"
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: "white"
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "white"
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
    color: "white"
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "white"
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "white"
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: "white"
  }
});

var inputStr;



function SSN() {
  return (
    
    <div className='ssn-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      
      <div className='ssn-submit'>
        <header>
          <Grid container direction="column" alignItems="center" justify="center">
          <Typography color="white" fullWidth style = {{marginBottom: "1em"}} >
            Please enter your SSN!
          </Typography>

          <StyledTextField
            
            onChange={(event) => {
              localStorage.setItem("input string", inputStr = (parseInt(event.target.value)));
               }}
            InputLabelProps={{style : {color : 'white'}}}
            InputProps={{style : {color : 'white'}}}
            FormHelperTextProps = {{style : {color : 'white'}}}
            label="Social Security"
            id="outlined-size-normal"
            size='normal'
            placeholder='xxx-xx-xxxx'
            fullWidth style = {{marginBottom: "1em"}}
          />
          <Button 
           onClick={() => {
            if (!(getIn(inputStr))){
              alert("Error: This SSN is not found!");
            }else{
              window.location.href = "/datapage"
            }
          }}
          type="submit" 
          variant="contained" 
          style={{margin: '0 auto', display: "flex"}} 
          endIcon={<KeyboardArrowRightIcon/>}>
            Submit
            </Button>

          </Grid>


        </header>
      </div>

    </div>
  );
}

export default SSN;
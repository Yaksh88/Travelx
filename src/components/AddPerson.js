import React from 'react';
//import '../App.css';
//import './HeroSection.css';
import {useState} from 'react';
import { Button, TextField } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import {getIn} from './Data';
import './AddPerson.css'
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import FormControl from '@mui/material/FormControl';
import IMask from 'imask';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import { createVendiaClient } from '@vendia/client';
import * as _ from 'underscore';
//import {dmvData} from '../dataDMV'

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


function toggleFields(elem, show) {
	
	var temp = document.getElementsByClassName(elem);
	
	for (var i=0; i<temp.length; i++) {
		(show === true) ? temp[i].style.display = "inline-block" : temp[i].style.display = "none";
	}
	document.getElementsByClassName("field-header")[0].style.display = "block";
	
}

const NameMask = React.forwardRef(function NameMask(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
	{...other}
      mask="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      definitions={{
        'a': /([A-Za-z]|\s)/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

NameMask.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};



const SSNMask = React.forwardRef(function SSNMask(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
	{...other}
      mask="###-##-####"
      definitions={{
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

SSNMask.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const PassportMask = React.forwardRef(function PassportMask(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
	{...other}
      mask="A########"
      definitions={{
		'A': /[A-Za-z]/,
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

PassportMask.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const LicenseMask = React.forwardRef(function LicenseMask(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
	{...other}
      mask="LLLLLLLLLLLLLLL"
      definitions={{
		'L': /([a-zA-Z]|\d)/
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

LicenseMask.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const DateMask = React.forwardRef(function DateMask(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
	  {...other}
      mask={Date}
      pattern= 'm{/}`d{/}`YYYY'  // optional interval options
	  min= {new Date(1960, 0, 1)}
	  max= {new Date(2100, 0, 1)}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

DateMask.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function setFields(val) {
	if (val == 1) {
		toggleFields("dmv-data-field", false);
		toggleFields("dos-data-field", false);
		toggleFields("ss-data-field", true);
	} else if (val == 2) {
		toggleFields("dmv-data-field", false);
		toggleFields("ss-data-field", false);
		toggleFields("dos-data-field", true);
	} else if (val == 3) {
		toggleFields("dos-data-field", false);
		toggleFields("ss-data-field", false);
		toggleFields("dmv-data-field", true);
	} else {
	}		
	
}



function AddPerson() {
	
	const [values, setValues] = useState({
		ssnmask: '',
		namemask: '',
		dobmask: '',
		passportmask: '',
		licensemask: '',
		expmask: ''
	});
	const [photo, updatePhoto] = useState(""); // photo data
	const [preview, updatePreview] = useState(""); // the actual preview

	const nameError = (values.namemask.length < 3);
	const ssnError = (values.ssnmask.length != 11);
	const dobError = (values.dobmask.length != 10);
	const licenseError = (values.licensemask.length == 0);
	const passportError = (values.passportmask.length != 9);
	const expError = (values.expmask.length != 10);
	
	
	const [department, setDepartment] = useState("");
	const handleDeptSelect = (event) => {
		setDepartment(event.target.value);
		setFields(event.target.value);
	};
	
	// displaying photo preview
	const onChangePhoto = e => {
		if (e.target.files[0]) {
			updatePhoto(e.target.files[0]);
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				updatePreview(reader.result);
			});
			reader.readAsDataURL(e.target.files[0]);
		}
	};
	
	const photoError = (photo.length == 0); // temporary 
	const ssnBtnErr = false;
	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};
	
	const checkFormErrors = !((department == 1 && !nameError && !ssnError && !dobError) || (department == 2 && !nameError && !ssnError && !dobError && !passportError && !expError && !photoError) || (department == 3 && !nameError && !ssnError && !dobError && !licenseError && !photoError));

	
  return (
    
    <div className='edit-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />

      <div className='data-submit'>
        <header>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<div className="department-dropdown">
		
			<FormControl margin="normal" fullWidth sx={{ m: 1, minWidth: 120}}>
				
				<Select
					placeholder="Select department"
					labelId="select-department"
					id="department-dropdown"
					value={department}
					displayEmpty
					onChange={handleDeptSelect}
					SelectDisplayProps={{
						style : {color : "black"}
					}}
					MenuProps={{
						style : {color : "white"}
					}}
					variant = 'outlined'
					sx={{background: 'white', color: 'black'}}
				>
					<MenuItem hidden disabled value="">
						Select department
					</MenuItem>
					<MenuItem value={1}>Social Security</MenuItem>
					<MenuItem value={2}>Department of State</MenuItem>
					<MenuItem value={3}>Department of Motor Vehicles</MenuItem>
				</Select>
			</FormControl>
			
		</div>
		
			<br></br>
			
		<div className="field-header">
		<h1 className="page-description">
		Add/Update Citizen Information
		</h1>
		  <div className="ss-data-field dos-data-field dmv-data-field" id="center-tab">
			  <StyledTextField
				  InputLabelProps={{style : {color : (ssnError ? "red" : "white")}}}
				  FormHelperTextProps = {{style : {color : (ssnError ? "red" : "white")}}}
				  InputProps={{
					style : {color : (ssnError ? "red" : "white")},
					inputComponent: SSNMask,
					value: values.ssnmask,
					onChange: handleChange
				  }}
				  name="ssnmask"
				  label="Social Security Number"
				  error={ssnError}
				  variant="outlined"
				  helperText={ssnError ? "Please enter the full 9-digit SSN." : ""}
				  id="ssn-input-field"
				  size='normal'
				  placeholder='e.g., 888-88-8888'
				  
				/>
				
				<Button 
					onClick={() => {
						var data;
						var parsedSsn = values.ssnmask.replace(/\-/g, "");
						if (getIn(parsedSsn)){
							
							data = getIn(parsedSsn);
							// now begin adding data to form (autofill)
							setValues({
								...values,
								namemask: ((data.fullName != undefined) ? data.fullName : ''),
								dobmask: ((data.dateOfBirth != undefined) ? data.dateOfBirth : ''),
								passportmask: ((data.driversLicense != undefined) ? data.driversLicense : ''),
								licensemask: ((data.dateOfBirth != undefined) ? data.dateOfBirth : ''),
								expmask: ((data.passportExpiration != undefined) ? data.passportExpiration : ''),
							});
						}else{
							// display error message saying data couldn't be found
							// Like "No existing SSN found in the database"
							alert("No matching info found in database.")
							//ssnBtnErr = true;
						}
					}}
					type="submit" 
					variant="contained"
					endIcon={<KeyboardArrowRightIcon/>}
					disabled={ssnError}
					sx={{margin: "0px auto", display: "flex"}}
					//helperText={ssnBtnErr ? "Please enter the full 9-digit SSN." : ""}
					>
					Search SSN
				</Button>
		  
		  </div>
		  
		  <br></br>
		  
		  <div className="dos-data-field dmv-data-field" id="photo-preview">
			<div className="previewProfilePic">
                <img className="picturePreview" src={preview} />
			</div>
				<Button 
				variant="contained" 
				component="label"
				>
				  <PhotoCamera 
				  sx={{marginRight: "10px"}}
				  /> Upload Photo ID      
				  <input hidden accept="image/png, image/jpeg" multiple type="file" onChange={onChangePhoto}/>
				</Button>
		  
			
              
          </div>
		  <br></br>
		  <div className="ss-data-field dos-data-field dmv-data-field">
			  <StyledTextField
				InputLabelProps={{style : {color : (nameError ? "red" : "white")}}}
				FormHelperTextProps = {{style : {color : (nameError ? "red" : "white")}}}
				InputProps={{
					style : {color : (nameError ? "red" : "white")},
					inputComponent: NameMask,
					value: values.namemask,
					onChange: handleChange,
				}}
				name="namemask"
				label="Name"
				error={nameError}
				variant="outlined"
				helperText={nameError ? "This field cannot be blank" : ""}
				id="name-input-field"
				size='normal'
				placeholder='e.g. John Diggle'
			  />
		  </div>
		  <div className="ss-data-field dos-data-field dmv-data-field">
			  <StyledTextField
				  InputLabelProps={{style : {color : (dobError ? "red" : "white")}}}
				  FormHelperTextProps = {{style : {color : (dobError ? "red" : "white")}}}
				  InputProps={{
					style : {color : (dobError ? "red" : "white")},
					inputComponent: DateMask,
					value: values.dobmask,
					onChange: handleChange
				  }}
				  name="dobmask"
				  label="Date of Birth"
				  error={dobError}
				  variant="outlined"
				  helperText={dobError ? "Please enter the full date." : ""}
				  id="dob-input-field"
				  size='normal'
				  placeholder='MM/DD/YYYY'
				/>
		  </div>
		  <div className="dmv-data-field">
			  <StyledTextField
				  InputLabelProps={{style : {color : (licenseError ? "red" : "white")}}}
				  FormHelperTextProps = {{style : {color : (licenseError ? "red" : "white")}}}
				  InputProps={{
					style : {color : (licenseError ? "red" : "white")},
					inputComponent: LicenseMask,
					value: values.licensemask,
					onChange: handleChange
				  }}
				  name="licensemask"
				  label="Driver's License"
				  error={licenseError}
				  variant="outlined"
				  helperText={licenseError ? "Please enter the driver's license" : ""}
				  id="license-input-field"
				  size='normal'
				  placeholder=''
				/>
		  </div>
		  <div className="dos-data-field">
			  <StyledTextField
				  InputLabelProps={{style : {color : (passportError ? "red" : "white")}}}
				  FormHelperTextProps = {{style : {color : (passportError ? "red" : "white")}}}
				  InputProps={{
					style : {color : (passportError ? "red" : "white")},
					inputComponent: PassportMask,
					value: values.passportmask,
					onChange: handleChange
				  }}
				  name="passportmask"
				  label="Passport Number"
				  error={passportError}
				  variant="outlined"
				  helperText={passportError ? "Please enter the passport number" : ""}
				  id="outlined-size-normal"
				  size='normal'
				  placeholder='e.g., A00000000'
				/>
		  </div>
		  <div className="dos-data-field">
			  <StyledTextField
				  InputLabelProps={{style : {color : (expError ? "red" : "white")}}}
				  FormHelperTextProps = {{style : {color : (expError ? "red" : "white")}}}
				  InputProps={{
					style : {color : (expError ? "red" : "white")},
					inputComponent: DateMask,
					value: values.expmask,
					onChange: handleChange
				  }}
				  name="expmask"
				  label="Passport Expiration"
				  error={expError}
				  variant="outlined"
				  helperText={expError ? "Please enter the full date." : ""}
				  id="outlined-size-normal"
				  size='normal'
				  placeholder='MM/DD/YYYY'
				/>
		  </div>
		  
		            <Button 
           onClick={() => {
			// success function: add
			var obj = {};
			var parsedSsn = values.ssnmask.replace(/\-/g, "");
			obj[parsedSsn] = {};
			var incomingData;
			if (department==1) {
				incomingData = { }
				Object.assign(obj[parsedSsn], {fullName: values.namemask, dateOfBirth: values.dobmask} )
			} else if (department==2) {
				Object.assign(obj[parsedSsn], {fullName: values.namemask, dateOfBirth: values.dobmask, passportNumber: values.passportmask, passportExpiration: values.expmask} )
			} else if (department==3) {
				Object.assign(obj[parsedSsn], {fullName: values.namemask, driversLicense: values.licensemask, dateOfBirth: values.dobmask} )
			} else {
			}
			console.log(obj)
          }}
          type="submit" 
          variant="contained" 
          style={{margin: '0 auto', display: "flex"}} 
          endIcon={<KeyboardArrowRightIcon/>}
		  disabled={checkFormErrors}
		  >
            Submit
            </Button>
		  
		  </div>
		  
		  



        </header>
      </div>

    </div>
  );
}

export default AddPerson;
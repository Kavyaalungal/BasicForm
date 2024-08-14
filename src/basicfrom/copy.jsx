// import React, { useState } from 'react';
// import {
//     Grid, TextField, Typography, Button, Checkbox, FormControlLabel, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, RadioGroup, FormControl, FormLabel,
//     Avatar,
//     Autocomplete,
//     InputLabel,
//     Select,
//     MenuItem,
// } from '@mui/material';
// import { styled } from '@mui/system';
// import './Basic.css';

// // const StyledTypography = styled(Typography)({
// //   color: 'green',
// //   fontWeight: 'bold',
// //   marginBottom: '10px',
// // });

// // const BorderPaper = styled(Paper)(({ theme }) => ({
// //   padding: theme.spacing(2),
// //   border: '1px solid #ccc',
// //   height:'500px'
// // }));





// function BasicForm() {
//     const patientDetails = {
//         firstName: 'John',
//         lastName: 'Doe',
//         dob: '01/01/1980',
//         gender: 'Male',
//         contact: '123-456-7890',
//         email: 'johndoe@example.com',
//         profileImage: 'https://via.placeholder.com/150', // Placeholder image URL
//     };

//     return (
//         <>
//             <Grid container spacing={2}>

//                 {/* Left Side */}
//                 <Grid item xs={12}  sm={3}>

//                     {/* <BorderPaper> */}
//                     <Grid container spacing={2}>
//                         <div style={{ marginLeft: '10px' }} className='border-paper leftside'>
//                             <Box
//                                 display="flex"
//                                 flexDirection="column"
//                                 alignItems="center"
//                                 justifyContent="center"
//                             // Adjust height as needed
//                             >
//                                 {/* Profile Image */}
//                                 <Avatar
//                                     alt={`${patientDetails.firstName} ${patientDetails.lastName}`}
//                                     src={patientDetails.profileImage}
//                                     sx={{ width: 100, height: 100, marginBottom: 2 }}
//                                 />
//                                 {/* Patient Details */}
//                                 {Object.entries(patientDetails)
//                                     .filter(([key]) => key !== 'profileImage')
//                                     .map(([key, detail], index) => (
//                                         <Typography key={index} variant="body1" gutterBottom align="center">
//                                             {detail}
//                                         </Typography>
//                                     ))}
//                             </Box>
//                             {/* CoreUI 
//               React DatePicker
//               component includes a
//                feature that allows you t
//                o disable certain dates, such as w
//                eekends or holidays. This can be 
//                accomplished by
//                 passing an array to disabledDate 
//                 prop to the component, which determines
//                  which dates should be disabled based
//                   on custom logic.
//                   CoreUI 
//              React DatePicker
//               component includes a
//                feature that allows you t
//                o disable certain dates, such as w
//                eekends or holidays. This can be 
//                accomplished by
//                 passing an array to disabledDate 
//                 prop to the component, which determines
//                  which dates should be disabled based
//                   on custom logic.  */}

//                         </div>





//                     </Grid>

//                     {/* </BorderPaper> */}
//                 </Grid>
//                 {/* Right Side */}
//                 <Grid item xs={12}  sm={9}>
//                     {/* <BorderPaper> */}
//                     <Grid container spacing={2}>
//                         <div style={{ marginLeft: '10px', width: '1000px' }} className='border-paper '>
//                             <Grid container spacing={2}>

//                                 <Grid item xs={12} md={3}>
//                                     <FormControl fullWidth variant="outlined" sx={{ height: '40px', marginBottom: '25px' }}>
//                                         <InputLabel sx={{ fontSize: '1rem', top: '-4px' }}>Search By</InputLabel>
//                                         <Select

//                                             label="Search By"
//                                             sx={{ height: '40px' }}
//                                         >
//                                             <MenuItem value="Patient ID">Patient ID</MenuItem>
//                                             <MenuItem value="Name">Name</MenuItem>
//                                             <MenuItem value="Email">Email</MenuItem>
//                                             <MenuItem value="Phone">Phone</MenuItem>
//                                         </Select>
//                                     </FormControl>
//                                 </Grid>
//                                 <Grid item xs={12} sm={9}>

//                                     <TextField
//                                         //  label={searchCriteria}
//                                         variant="outlined"
//                                         size="small"
//                                         fullWidth
//                                         InputLabelProps={{ style: { fontSize: '1rem', } }}
//                                         InputProps={{
//                                             style: { marginBottom: '20px' },
//                                         }}
//                                         sx={{
//                                             '& .MuiAutocomplete-inputRoot': {
//                                                 paddingRight: '0px',
//                                             },
//                                         }}
//                                     />


//                                 </Grid>
//                                 <Grid container spacing={2}> 
//   {/* This `spacing={2}` adds space between grid items */}

//   <Grid item xs={12} sm={3}>
//     <TextField
//       id="patientid"
//       label="Patient ID"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{ style: { fontSize: '1rem' } }}
//     />
//   </Grid>

//   <Grid item xs={12} sm={2}>
//     <TextField
//       select
//       label="Prefix"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{ style: { fontSize: '14px' } }}
//     >
//       <MenuItem value=""><em>None</em></MenuItem>
//       <MenuItem value="Mr">Mr</MenuItem>
//       <MenuItem value="Mrs">Mrs</MenuItem>
//       <MenuItem value="Ms">Ms</MenuItem>
//       <MenuItem value="Miss">Miss</MenuItem>
//     </TextField>
//   </Grid>

//   <Grid item xs={12} sm={7}>
//     <TextField
//       id="name"
//       label="Name"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{ style: { fontSize: '1rem' } }}
//     />
//   </Grid>

//   <Grid item container xs={12} sm={7} spacing={2}>
//     <Grid item xs={3}>
//       <TextField
//         id="yyyy"
//         label="Age YY"
//         variant="outlined"
//         size="small"
//         fullWidth
//         InputLabelProps={{ style: { fontSize: '1rem' } }}
//       />
//     </Grid>
//     <Grid item xs={3}>
//       <TextField
//         id="mm"
//         label="Age MM"
//         variant="outlined"
//         size="small"
//         fullWidth
//         InputLabelProps={{ style: { fontSize: '1rem' } }}
//       />
//     </Grid>
//     <Grid item xs={3}>
//       <TextField
//         id="dd"
//         label="Age DD"
//         variant="outlined"
//         size="small"
//         fullWidth
//         InputLabelProps={{ style: { fontSize: '1rem' } }}
//       />
//     </Grid>

//     <Grid item xs={12} sm={3}>
//       <FormControl variant="outlined" size="small" fullWidth>
//         <InputLabel id="genderLabel">Gender</InputLabel>
//         <Select
//           labelId="genderLabel"
//           id="gender"
//           label="Gender"
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         >
//           <MenuItem value=""><em>None</em></MenuItem>
//           <MenuItem value="Male">Male</MenuItem>
//           <MenuItem value="Female">Female</MenuItem>
//           <MenuItem value="Other">Other</MenuItem>
//         </Select>
//       </FormControl>
//     </Grid>
//   </Grid>

//   <Grid item xs={12} sm={5}>
//     <TextField
//       id="dob"
//       label="Date of Birth"
//       type="date"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//     />
//   </Grid>

//   <Grid item xs={12} sm={4}>
//     <TextField
//       id="phone1"
//       label="Phone1"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{ style: { fontSize: '1rem' } }}
//     />
//   </Grid>

//   <Grid item xs={12} sm={4}>
//     <TextField
//       id="phone2"
//       label="Phone2"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{ style: { fontSize: '1rem' } }}
//     />
//   </Grid>

//   <Grid item xs={12} sm={4}>
//     <TextField
//       id="email"
//       label="Email"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{ style: { fontSize: '1rem' } }}
//     />
//   </Grid>

//   <Grid item xs={12}>
//     <TextField
//       id="address"
//       label="Address"
//       variant="outlined"
//       size="small"
//       fullWidth
//       InputLabelProps={{ style: { fontSize: '1rem' } }}
//     />
//   </Grid>
// </Grid>


//                             </Grid>
//                             {/* CoreUI 
//              React DatePicker
//               component includes a
//                feature that allows you t
//                o disable certain dates, such as w
//                eekends or holidays. This can be 
//                accomplished by
//                 passing an array to disabledDate 
//                 prop to the component, which determines
//                  which dates should be disabled based
//                   on custom logic.
//                   CoreUI 
//              React DatePicker
//               component includes a
//                feature that allows you t
//                o disable certain dates, such as w
//                eekends or holidays. This can be 
//                accomplished by
//                 passing an array to disabledDate 
//                 prop to the component, which determines
//                  which dates should be disabled based
//                   on custom logic.
//                   CoreUI 
//              React DatePicker
//               component includes a
//                feature that allows you t
//                o disable certain dates, such as w
//                eekends or holidays. This can be 
//                accomplished by
//                 passing an array to disabledDate 
//                 prop to the component, which determines
//                  which dates should be disabled based
//                   on custom logic.
//                   CoreUI 
//              React DatePicker
//               component includes a
//                feature that allows you t
//                o disable certain dates, such as w
//                eekends or holidays. This can be 
//                accomplished by
//                 passing an array to disabledDate 
//                 prop to the component, which determines
//                  which dates should be disabled based
//                   on custom logic. */}

//                         </div>



//                     </Grid>
//                     {/* </BorderPaper> */}
//                 </Grid>
//             </Grid>
//         </>
//     );
// }

// export default BasicForm;
// import React from "react";

// // react-bootstrap components
// import {
//   Badge,
//   Button,
//   Card,
//   Form,
//   Navbar,
//   Nav,
//   Container,
//   Row,
//   Col
// } from "react-bootstrap";
// import {
//       Grid, TextField, Typography,  Checkbox, FormControlLabel, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, RadioGroup, FormControl, FormLabel,
//       Avatar,
//       Autocomplete,
//       InputLabel,
//       Select,
//       MenuItem,
//   } from '@mui/material'

// function BasicForm() {
//   return (
//     <>
//       <Container fluid>
//         <Row>
//         <Col md="4">
//             <Card className="card-user">
//               <div className="card-image">
//                 <img
//                   alt="profile image"
//                   src=""
//                   // src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
//                 ></img>
//               </div>
//               <Card.Body>
//                 <div className="author">
//                   <a href="#pablo" onClick={(e) => e.preventDefault()}>
//                     {/* <img
//                       alt="..."
//                       className="avatar border-gray"
//                       src={require("assets/img/faces/face-3.jpg")}
//                     ></img> */}
//                     <h5 className="title">Mike Andrew</h5>
//                   </a>
//                   <p className="description">michael24</p>
//                 </div>
//                 <p className="description text-center">
//                   "Lamborghini Mercy <br></br>
//                   Your chick she so thirsty <br></br>
//                   I'm in that two seat Lambo"
//                 </p>
//               </Card.Body>
//               <hr></hr>
//               <div className="button-container mr-auto ml-auto">
//                 <Button
//                   className="btn-simple btn-icon"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   variant="link"
//                 >
//                   <i className="fab fa-facebook-square"></i>
//                 </Button>
//                 <Button
//                   className="btn-simple btn-icon"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   variant="link"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </Button>
//                 <Button
//                   className="btn-simple btn-icon"
//                   href="#pablo"
//                   onClick={(e) => e.preventDefault()}
//                   variant="link"
//                 >
//                   <i className="fab fa-google-plus-square"></i>
//                 </Button>
//               </div>
//             </Card>
//           </Col>
//           <Col md="8">
//             <Card>
//               <Card.Header>
//                 <Card.Title as="h4">Patient Registration</Card.Title>
//               </Card.Header>
//               <Card.Body>
//                 <Form>
//                   <Row>
//                     <Col className="pr-1" md="5">
//                       <Form.Group>
//                       <Grid item xs={12} md={3}>
//                                      <FormControl fullWidth variant="outlined" sx={{ height: '40px', marginBottom: '25px' }}>
//                                          <InputLabel sx={{ fontSize: '1rem', top: '-4px' }}>Search By</InputLabel>
//                                          <Select

//                                             label="Search By"
//                                             sx={{ height: '40px' }}
//                                         >
//                                             <MenuItem value="Patient ID">Patient ID</MenuItem>
//                                             <MenuItem value="Name">Name</MenuItem>
//                                             <MenuItem value="Email">Email</MenuItem>
//                                             <MenuItem value="Phone">Phone</MenuItem>
//                                         </Select>
//                                     </FormControl>
//                                 </Grid>
//                                 <Grid item xs={12} sm={9}>

//                                     <TextField
//                                         //  label={searchCriteria}
//                                         variant="outlined"
//                                         size="small"
//                                         fullWidth
//                                         InputLabelProps={{ style: { fontSize: '1rem', } }}
//                                         InputProps={{
//                                             style: { marginBottom: '20px' },
//                                         }}
//                                         sx={{
//                                             '& .MuiAutocomplete-inputRoot': {
//                                                 paddingRight: '0px',
//                                             },
//                                         }}
//                                     />


//                                 </Grid>
//                         {/* <label>Company (disabled)</label>
//                         <Form.Control
//                           defaultValue="Creative Code Inc."
//                           disabled
//                           placeholder="Company"
//                           type="text"
//                         ></Form.Control> */}
//                       </Form.Group>
//                     </Col>
//                     <Col className="px-1" md="3">
//                       <Form.Group>
//                         <label>Username</label>
//                         <Form.Control
//                           defaultValue="michael23"
//                           placeholder="Username"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="4">
//                       <Form.Group>
//                         <label htmlFor="exampleInputEmail1">
//                           Email address
//                         </label>
//                         <Form.Control
//                           placeholder="Email"
//                           type="email"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="6">
//                       <Form.Group>
//                         <label>First Name</label>
//                         <Form.Control
//                           defaultValue="Mike"
//                           placeholder="Company"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="6">
//                       <Form.Group>
//                         <label>Last Name</label>
//                         <Form.Control
//                           defaultValue="Andrew"
//                           placeholder="Last Name"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <Form.Group>
//                         <label>Address</label>
//                         <Form.Control
//                           defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
//                           placeholder="Home Address"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="4">
//                       <Form.Group>
//                         <label>City</label>
//                         <Form.Control
//                           defaultValue="Mike"
//                           placeholder="City"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="px-1" md="4">
//                       <Form.Group>
//                         <label>Country</label>
//                         <Form.Control
//                           defaultValue="Andrew"
//                           placeholder="Country"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="4">
//                       <Form.Group>
//                         <label>Postal Code</label>
//                         <Form.Control
//                           placeholder="ZIP Code"
//                           type="number"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <Form.Group>
//                         <label>About Me</label>
//                         <Form.Control
//                           cols="80"
//                           defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
//                           that two seat Lambo."
//                           placeholder="Here can be your description"
//                           rows="4"
//                           as="textarea"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Button
//                     className="btn-fill pull-right"
//                     type="submit"
//                     variant="info"
//                   >
//                     Update Profile
//                   </Button>
//                   <div className="clearfix"></div>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//           {/* <Col md="8">
//             <Card>
//               <Card.Header>
//                 <Card.Title as="h4">Edit Profile</Card.Title>
//               </Card.Header>
//               <Card.Body>
//                 <Form>
//                   <Row>
//                     <Col className="pr-1" md="5">
//                       <Form.Group>
//                         <label>Company (disabled)</label>
//                         <Form.Control
//                           defaultValue="Creative Code Inc."
//                           disabled
//                           placeholder="Company"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="px-1" md="3">
//                       <Form.Group>
//                         <label>Username</label>
//                         <Form.Control
//                           defaultValue="michael23"
//                           placeholder="Username"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="4">
//                       <Form.Group>
//                         <label htmlFor="exampleInputEmail1">
//                           Email address
//                         </label>
//                         <Form.Control
//                           placeholder="Email"
//                           type="email"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="6">
//                       <Form.Group>
//                         <label>First Name</label>
//                         <Form.Control
//                           defaultValue="Mike"
//                           placeholder="Company"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="6">
//                       <Form.Group>
//                         <label>Last Name</label>
//                         <Form.Control
//                           defaultValue="Andrew"
//                           placeholder="Last Name"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <Form.Group>
//                         <label>Address</label>
//                         <Form.Control
//                           defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
//                           placeholder="Home Address"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className="pr-1" md="4">
//                       <Form.Group>
//                         <label>City</label>
//                         <Form.Control
//                           defaultValue="Mike"
//                           placeholder="City"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="px-1" md="4">
//                       <Form.Group>
//                         <label>Country</label>
//                         <Form.Control
//                           defaultValue="Andrew"
//                           placeholder="Country"
//                           type="text"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                     <Col className="pl-1" md="4">
//                       <Form.Group>
//                         <label>Postal Code</label>
//                         <Form.Control
//                           placeholder="ZIP Code"
//                           type="number"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col md="12">
//                       <Form.Group>
//                         <label>About Me</label>
//                         <Form.Control
//                           cols="80"
//                           defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
//                           that two seat Lambo."
//                           placeholder="Here can be your description"
//                           rows="4"
//                           as="textarea"
//                         ></Form.Control>
//                       </Form.Group>
//                     </Col>
//                   </Row>
//                   <Button
//                     className="btn-fill pull-right"
//                     type="submit"
//                     variant="info"
//                   >
//                     Update Profile
//                   </Button>
//                   <div className="clearfix"></div>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//           */}
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default BasicForm;





import React, { useState } from 'react';
import {
  Grid, TextField, Typography, Button, Checkbox, FormControlLabel, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, RadioGroup, FormControl, FormLabel,
  Avatar,
  Autocomplete,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from '@mui/material';
import { Tabs, Tab } from '@mui/material';

import { styled } from '@mui/system';
import './Basic.css';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import EditIcon from '@mui/icons-material/Edit';
// import Avatar from '@mui/material/Avatar';
import { CButton, CCard, CCardBody, CCardHeader, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import { CDatePicker } from '@coreui/react-pro';
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'

function BasicForm(props) {
  const [profileImage, setProfileImage] = useState(null);
  const [nationalId, setNationalId] = useState('');
  const [userId] = useState('USER12345');
  const [tabIndex, setTabIndex] = useState(0);
  const [nationalIdProof, setNationalIdProof] = useState(null);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleNationalIdChange = (event) => {
    setNationalId(event.target.value);
  };
  const handleNationalIdProofUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNationalIdProof(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Grid container spacing={5}>
        {/* Left Side */}
        <Grid item xs={12} sm={12} md={3}>
          <CCard style={{ width: '100%' }}>
            <CCardHeader style={{
              backgroundColor: '#3095E5',
              color: 'white',
              padding: 8,
              fontSize: '16px',
              border: '1px solid  #3095E5',
              marginBottom: 2
            }}>Welcome, User</CCardHeader>
            <CCardBody style={{ textAlign: 'center' }}>
              {/* <Box
                sx={{
                  backgroundColor: '#3095E5',
                  color: 'white', 
                  padding: 2, 
                  borderRadius: 1, 
                  border: '1px solid #3095E5', 
                  marginBottom: 2 
                }}
              >
                <Typography variant="h6">Welcome, User</Typography>
              </Box> */}
              
              <Typography
                variant="subtitle1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 2,
                  color: ' #5cb435 ', 
                  fontWeight: 'bold' 
                }}
              >
                ID: {userId}
                <IconButton
                  onClick={() => handleEditClick()} 
                // sx={{ marginLeft: 1 }} 
                >
                  <EditIcon sx={{ color: ' #5cb435 ', marginBottom: '7px' }} /> 
                </IconButton>
              </Typography>

              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-avatar"
                type="file"
                onChange={handleImageUpload}
              />
              <label htmlFor="upload-avatar">
                <IconButton component="span">
                  <Avatar
                    alt="Patient Avatar"
                    src={profileImage || 'path_to_default_avatar.png'}
                    sx={{ width: 100, height: 100, }}
                  />
                </IconButton>
              </label>
              {/* <CCardTitle>Patient Details</CCardTitle> */}
             
              <Grid item xs={12} sm={6} md={12}>
            <TextField
              select
              label="National ID"
              value={nationalId}
              onChange={handleNationalIdChange}
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '1rem' } }}
            >
              <MenuItem value="ID1">National ID1</MenuItem>
              <MenuItem value="ID2">National ID2</MenuItem>
              <MenuItem value="ID3">National ID3</MenuItem>
            </TextField>

            {/* Conditional rendering of upload field */}
            {nationalId && (
              <Box sx={{ marginTop: 2 }}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="upload-id-proof"
                  type="file"
                  onChange={handleNationalIdProofUpload}
                />
                <label htmlFor="upload-id-proof">
                  <IconButton component="span">
                    <Typography>Upload ID Proof</Typography>
                  </IconButton>
                </label>
                {nationalIdProof && (
                  <Box sx={{ marginTop: 2 }}>
                    <img
                      src={nationalIdProof}
                      alt="National ID Proof"
                      style={{ width: '100%', height: 'auto', borderRadius: 4 }}
                    />
                  </Box>
                )}
              </Box>
            )}
          </Grid>
          
              <CCardText>
                {/* <strong>Name:</strong><br/> John Doe <br />
                        <strong>Age</strong>, <strong>Gender</strong><br/> 45, Male <br />
                        <strong>Phone:</strong><br/> +123456789 <br />
                        <strong>Email:</strong><br/> johndoe@example.com */}
              </CCardText>
            </CCardBody>
          </CCard>
        </Grid>



        {/* Right Side */}
        <Grid item xs={12} sm={12} md={9}>
          <CCard style={{ width: '100%', height: 'auto' }}>
            <CCardBody>
              <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth" sx={{ marginBottom: 2 }}>
                <Tab label="Tab 1" />
                <Tab label="Tab 2" />
                <Tab label="Tab 3" />
              </Tabs>

              <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && (
                  <Box>
                    {/* Content for Tab 1 */}
                    <Grid container spacing={1}>

                      <Grid item xs={12} md={3}>
                      <TextField
                          select
                          label="Search By"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '16px' } }}
                        >
                          <MenuItem value="Patient ID">Patient ID</MenuItem>
                            <MenuItem value="Name">Name</MenuItem>
                            <MenuItem value="Email">Email</MenuItem>
                            <MenuItem value="Phone">Phone</MenuItem>
                        </TextField>
                       
                      </Grid>
                      <Grid item xs={12} sm={9}>

                        <TextField
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem', } }}
                          InputProps={{
                            style: { marginBottom: '20px' },
                          }}
                          sx={{
                            '& .MuiAutocomplete-inputRoot': {
                              paddingRight: '0px',
                            },
                          }}
                        />


                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          id="patientid"
                          label="Patient ID"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={2}>
                        <TextField
                          select
                          label="Prefix"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '14px' } }}
                        >
                          <MenuItem value=""><em>None</em></MenuItem>
                          <MenuItem value="Mr">Mr</MenuItem>
                          <MenuItem value="Mrs">Mrs</MenuItem>
                          <MenuItem value="Ms">Ms</MenuItem>
                          <MenuItem value="Miss">Miss</MenuItem>
                        </TextField>
                      </Grid>

                      <Grid item xs={12} sm={7}>
                        <TextField
                          id="name"
                          label="Name"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        />
                      </Grid>

                      <Grid item container xs={12} sm={7} spacing={2}>
                        <Grid item xs={3}>
                          <TextField
                            id="yyyy"
                            label="Age YY"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputLabelProps={{ style: { fontSize: '1rem' } }}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField
                            id="mm"
                            label="Age MM"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputLabelProps={{ style: { fontSize: '1rem' } }}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField
                            id="dd"
                            label="Age DD"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputLabelProps={{ style: { fontSize: '1rem' } }}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FormControl variant="outlined" size="small" fullWidth>
                            <InputLabel id="genderLabel">Gender</InputLabel>
                            <Select
                              labelId="genderLabel"
                              id="gender"
                              label="Gender"
                              InputLabelProps={{ style: { fontSize: '1rem' } }}
                            >
                              <MenuItem value=""><em>None</em></MenuItem>
                              <MenuItem value="Male">Male</MenuItem>
                              <MenuItem value="Female">Female</MenuItem>
                              <MenuItem value="Other">Other</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={5}>
                      <CDatePicker locale="en-US" placeholder={'Date of Birth'}  />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <TextField
                          id="phone1"
                          label="Phone1"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <TextField
                          id="phone2"
                          label="Phone2"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <TextField
                          id="email"
                          label="Email"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          id="address"
                          label="Address"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
                      <Grid item>
                        <Button
                          variant="contained"


                          sx={{ marginTop: 2, marginRight: 1, backgroundColor: '#3095E5' }}
                        >
                          Save
                        </Button>
                        <Button
                          variant="contained"


                          sx={{ marginTop: 2, marginLeft: 2, backgroundColor: '#3095E5' }}
                        >
                          New
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                )}
                {tabIndex === 1 && (
                  <Box>
                    {/* Content for Tab 2 */}
                    <Grid container spacing={2}>
                      {/* Your form content or other elements for Tab 2 */}
                    </Grid>
                  </Box>
                )}
                {tabIndex === 2 && (
                  <Box>
                    {/* Content for Tab 3 */}
                    <Grid container spacing={2}>
                      {/* Your form content or other elements for Tab 3 */}
                    </Grid>
                  </Box>
                )}
              </Box>
            </CCardBody>
          </CCard>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={9}>
        <CCard style={{ width: '100%', height: 'auto' }}>
           
            <CCardBody>
              
                <Grid container spacing={2}>

                                 <Grid item xs={12} md={3}>
                                     <FormControl fullWidth variant="outlined" sx={{ height: '40px', marginBottom: '25px' }}>
                                         <InputLabel sx={{ fontSize: '1rem', top: '-4px' }}>Search By</InputLabel>                                        <Select

                                            label="Search By"
                                            sx={{ height: '40px' }}
                                        >
                                            <MenuItem value="Patient ID">Patient ID</MenuItem>
                                            <MenuItem value="Name">Name</MenuItem>
                                            <MenuItem value="Email">Email</MenuItem>
                                            <MenuItem value="Phone">Phone</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={9}>

                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        InputLabelProps={{ style: { fontSize: '1rem', } }}
                                        InputProps={{
                                            style: { marginBottom: '20px' },
                                        }}
                                        sx={{
                                            '& .MuiAutocomplete-inputRoot': {
                                                paddingRight: '0px',
                                            },
                                        }}
                                    />


                                </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
     <TextField
      id="patientid"
      label="Patient ID"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{ style: { fontSize: '1rem' } }}
    />
  </Grid>

  <Grid item xs={12} sm={2}>
    <TextField
      select
      label="Prefix"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{ style: { fontSize: '14px' } }}
    >
      <MenuItem value=""><em>None</em></MenuItem>
      <MenuItem value="Mr">Mr</MenuItem>
      <MenuItem value="Mrs">Mrs</MenuItem>
      <MenuItem value="Ms">Ms</MenuItem>
      <MenuItem value="Miss">Miss</MenuItem>
    </TextField>
  </Grid>

  <Grid item xs={12} sm={7}>
    <TextField
      id="name"
      label="Name"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{ style: { fontSize: '1rem' } }}
    />
  </Grid>

  <Grid item container xs={12} sm={7} spacing={2}>
    <Grid item xs={3}>
      <TextField
        id="yyyy"
        label="Age YY"
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{ style: { fontSize: '1rem' } }}
      />
    </Grid>
    <Grid item xs={3}>
      <TextField
        id="mm"
        label="Age MM"
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{ style: { fontSize: '1rem' } }}
      />
    </Grid>
    <Grid item xs={3}>
      <TextField
        id="dd"
        label="Age DD"
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{ style: { fontSize: '1rem' } }}
      />
    </Grid>

    <Grid item xs={12} sm={3}>
      <FormControl variant="outlined" size="small" fullWidth>
        <InputLabel id="genderLabel">Gender</InputLabel>
        <Select
          labelId="genderLabel"
          id="gender"
          label="Gender"
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  </Grid>

  <Grid item xs={12} sm={5}>
    <TextField
      id="dob"
      label="Date of Birth"
      type="date"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
    />
  </Grid>

  <Grid item xs={12} sm={4}>
    <TextField
      id="phone1"
      label="Phone1"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{ style: { fontSize: '1rem' } }}
    />
  </Grid>

  <Grid item xs={12} sm={4}>
    <TextField
      id="phone2"
      label="Phone2"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{ style: { fontSize: '1rem' } }}
    />
  </Grid>

  <Grid item xs={12} sm={4}>
    <TextField
      id="email"
      label="Email"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{ style: { fontSize: '1rem' } }}
    />
  </Grid>

  <Grid item xs={12}>
    <TextField
      id="address"
      label="Address"
      variant="outlined"
      size="small"
      fullWidth
      InputLabelProps={{ style: { fontSize: '1rem' } }}
    />
  </Grid>
  </Grid>
  <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
            <Grid item>
              <Button
                variant="contained"
                
               
                sx={{ marginTop: 2, marginRight: 1,backgroundColor:'#3095E5' }}
              >
                Save
              </Button>
              <Button
                variant="contained"
               
               
                sx={{ marginTop: 2, marginLeft: 2,backgroundColor:'#3095E5' }}
              >
                New
              </Button>
            </Grid>
          </Grid>

           
                
            </CCardBody>
        </CCard>
    </Grid> */}
      </Grid>

    </>
  );
}

export default BasicForm;


// import React, { useState } from "react";









    {/* <div className="col-12 col-lg-4 col-xl-3">
          <div className="row gy-4">
            <div className="col-12">
              <div className="card widget-card border-light shadow-sm">
               
                <div className="card-body">
                  <ul className="list-group list-group-flush mb-12">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
  <h6 className="m-0">User ID: (12132434)</h6>
  
</li>
                  <li className="list-group-item d-flex justify-content-center align-items-center">
  <div className="d-flex justify-content-center align-items-center">
    <label htmlFor="avatarUpload" className="avatar-label">
      <img
        src={image || '/images/avatar2.png'}
        alt="Avatar"
        className="avatar-img"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          cursor: 'pointer',
        }}
      />
    </label>
    <input
      type="file"
      id="avatarUpload"
      style={{ display: 'none' }}
      onChange={handleImageChange}
    />
  </div>
</li>

<li className="list-group-item d-flex flex-column align-items-start">
     
      
    
      <div className="mb-3 w-100">
        <label htmlFor="nationalIdType" className="form-label">Select National ID Type</label>
        <select
          id="nationalIdType"
          className="form-select"
          value={selectedId}
          onChange={handleIdChange}
        >
          <option value="">Select ID Type</option>
          <option value="passport">Passport</option>
          <option value="driverLicense">Driver's License</option>
          <option value="nationalIdCard">National ID Card</option>
          <option value="voterId">Voter ID</option>
        </select>
      </div>
      
  
      <div className="w-100">
        <label htmlFor="nationalIdUpload" className="form-label">Upload National ID</label>
        <input
          type="file"
          id="nationalIdUpload"
          className="form-control"
          onChange={handleFileChange}
          disabled={!selectedId}  
        />
      </div>
    </li>

                   
                   
                  </ul>
                 
                </div>
              </div>
            </div>
       
          </div>
        </div> */}
        {/* <div className="col-12 col-lg-8 col-xl-9">
          <div className="card widget-card border-light shadow-sm">
            <div className="card-body p-4">
             
              <div className="tab-content pt-4" id="profileTabContent">
                <div
                  className="tab-pane fade show active"
                  id="overview-tab-pane"
                  role="tabpanel"
                  aria-labelledby="overview-tab"
                  tabIndex={0}
                >
                 
                  <Grid container spacing={1}>

<Grid item xs={12} md={3}>
<TextField
    select
    label="Search By"
    variant="outlined"
    size="small"
    fullWidth
    InputLabelProps={{ style: { fontSize: '16px' } }}
  >
    <MenuItem value="Patient ID">Patient ID</MenuItem>
      <MenuItem value="Name">Name</MenuItem>
      <MenuItem value="Email">Email</MenuItem>
      <MenuItem value="Phone">Phone</MenuItem>
  </TextField>
 
</Grid>
<Grid item xs={12} sm={9}>

  <TextField
    variant="outlined"
    size="small"
    fullWidth
    InputLabelProps={{ style: { fontSize: '1rem', } }}
    InputProps={{
      style: { marginBottom: '20px' },
    }}
    sx={{
      '& .MuiAutocomplete-inputRoot': {
        paddingRight: '0px',
      },
    }}
  />


</Grid>
</Grid>
<Grid container spacing={2}>
                      <Grid item xs={12} sm={3}>
                        <TextField
                          id="patientid"
                          label="Patient ID"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={2}>
                        <TextField
                          select
                          label="Prefix"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '14px' } }}
                        >
                          <MenuItem value=""><em>None</em></MenuItem>
                          <MenuItem value="Mr">Mr</MenuItem>
                          <MenuItem value="Mrs">Mrs</MenuItem>
                          <MenuItem value="Ms">Ms</MenuItem>
                          <MenuItem value="Miss">Miss</MenuItem>
                        </TextField>
                      </Grid>

                      <Grid item xs={12} sm={7}>
                        <TextField
                          id="name"
                          label="Name"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        />
                      </Grid>

                      <Grid item container xs={12} sm={7} spacing={2}>
                        <Grid item xs={3}>
                          <TextField
                            id="yyyy"
                            label="Age YY"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputLabelProps={{ style: { fontSize: '1rem' } }}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField
                            id="mm"
                            label="Age MM"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputLabelProps={{ style: { fontSize: '1rem' } }}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <TextField
                            id="dd"
                            label="Age DD"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputLabelProps={{ style: { fontSize: '1rem' } }}
                          />
                        </Grid>

                        <Grid item xs={12} sm={3}>
                          <FormControl variant="outlined" size="small" fullWidth>
                            <InputLabel id="genderLabel">Gender</InputLabel>
                            <Select
                              labelId="genderLabel"
                              id="gender"
                              label="Gender"
                              InputLabelProps={{ style: { fontSize: '1rem' } }}
                            >
                              <MenuItem value=""><em>None</em></MenuItem>
                              <MenuItem value="Male">Male</MenuItem>
                              <MenuItem value="Female">Female</MenuItem>
                              <MenuItem value="Other">Other</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={5}>
                      <CDatePicker locale="en-US" placeholder={'Date of Birth'}  />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <TextField
                          id="phone1"
                          label="Phone1"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <TextField
                          id="phone2"
                          label="Phone2"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <TextField
                          id="email"
                          label="Email"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          id="address"
                          label="Address"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputLabelProps={{ style: { fontSize: '1rem' } }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
                      <Grid item>
                        <Button
                          variant="contained"


                          sx={{ marginTop: 2, marginRight: 1, backgroundColor: '#6C946F' }}
                        >
                          Save
                        </Button>
                        <Button
                          variant="contained"


                          sx={{ marginTop: 2, marginLeft: 2, backgroundColor: '#6C946F' }}
                        >
                          New
                        </Button>
                      </Grid>
                    </Grid>
                 
                  
                </div>
                
              
              
              </div>
            </div>
          </div>
        </div> */}

// // react-bootstrap components
// import {
//   Badge,
//   Button,
//   Card,
//   Form,
//   Navbar,
//   Nav,
//   Container,
//   Row,
//   Col
// } from "react-bootstrap";
// import {
//       Grid, TextField, Typography,  Checkbox, FormControlLabel, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, RadioGroup, FormControl, FormLabel,
//       Avatar,
//       Autocomplete,
//       InputLabel,
//       Select,
//       MenuItem,
//   } from '@mui/material'
//   import '/images/avatar2.png'

// function BasicForm() {
//   const [image, setImage] = useState(null);
//   const [selectedId, setSelectedId] = useState('');
//   const [idFile, setIdFile] = useState(null);

//   const handleIdChange = (event) => {
//     setSelectedId(event.target.value);
//   };

//   const handleFileChange = (event) => {
//     setIdFile(event.target.files[0]);
//   };
//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
   
 
//   <section className=" py-3 py-md-5 py-xl-8">
  
//     <div className="container">
//       <div className="row gy-4 gy-lg-0">
//         <div className="col-12 col-lg-4 col-xl-3">
//           <div className="row gy-4">
//             <div className="col-12">
//               <div className="card widget-card border-light shadow-sm">
//                 {/* <div className="card-header ">
//                   Welcome, Ethan Leo
//                 </div> */}
//                 <div className="card-body">
//                   <div className="text-center mb-3">
//                     {/* <img
//                       src="./assets/img/profile-img-1.jpg"
//                       className="img-fluid rounded-circle"
//                       alt="Luna John"
//                     /> */}
//                   </div>
//                   {/* <h5 className="text-center mb-1">USERNAME </h5> */}
                 
//                   {/* <p className="text-center text-secondary mb-4">
//                     Project Manager
//                   </p> */}
//                   <ul className="list-group list-group-flush mb-12">
//                   <li className="list-group-item d-flex justify-content-between align-items-center">
//   <h6 className="m-0">User ID: (12132434)</h6>
//   {/* <span>4,620</span> */}
// </li>
//                   <li className="list-group-item d-flex justify-content-center align-items-center">
//   <div className="d-flex justify-content-center align-items-center">
//     <label htmlFor="avatarUpload" className="avatar-label">
//       <img
//         src={image || '/images/avatar2.png'}
//         alt="Avatar"
//         className="avatar-img"
//         style={{
//           width: '100px',
//           height: '100px',
//           borderRadius: '50%',
//           objectFit: 'cover',
//           cursor: 'pointer',
//         }}
//       />
//     </label>
//     <input
//       type="file"
//       id="avatarUpload"
//       style={{ display: 'none' }}
//       onChange={handleImageChange}
//     />
//   </div>
// </li>

// <li className="list-group-item d-flex flex-column align-items-start">
//       {/* <div className="d-flex justify-content-between align-items-center w-100 mb-3">
//         <h6 className="m-0">Following</h6>
//         <span>5,987</span>
//       </div> */}
      
    
//       <div className="mb-3 w-100">
//         <label htmlFor="nationalIdType" className="form-label">Select National ID Type</label>
//         <select
//           id="nationalIdType"
//           className="form-select"
//           value={selectedId}
//           onChange={handleIdChange}
//         >
//           <option value="">Select ID Type</option>
//           <option value="passport">Passport</option>
//           <option value="driverLicense">Driver's License</option>
//           <option value="nationalIdCard">National ID Card</option>
//           <option value="voterId">Voter ID</option>
//         </select>
//       </div>
      
//       {/* National ID Upload Field */}
//       <div className="w-100">
//         <label htmlFor="nationalIdUpload" className="form-label">Upload National ID</label>
//         <input
//           type="file"
//           id="nationalIdUpload"
//           className="form-control"
//           onChange={handleFileChange}
//           disabled={!selectedId}  // Disable if no ID type is selected
//         />
//       </div>
//     </li>

                   
                   
//                   </ul>
//                   {/* <div className="d-grid m-0">
//                     <button className="btn btn-outline-primary" type="button">
//                       Follow
//                     </button>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//             {/* <div className="col-12">
//               <div className="card widget-card border-light shadow-sm">
//                 <div className="card-header text-bg-primary">
//                   Social Accounts
//                 </div>
//                 <div className="card-body">
//                   <a
//                     href="#!"
//                     className="d-inline-block bg-dark link-light lh-1 p-2 rounded"
//                   >
//                     <i className="bi bi-youtube" />
//                   </a>
//                   <a
//                     href="#!"
//                     className="d-inline-block bg-dark link-light lh-1 p-2 rounded"
//                   >
//                     <i className="bi bi-twitter-x" />
//                   </a>
//                   <a
//                     href="#!"
//                     className="d-inline-block bg-dark link-light lh-1 p-2 rounded"
//                   >
//                     <i className="bi bi-facebook" />
//                   </a>
//                   <a
//                     href="#!"
//                     className="d-inline-block bg-dark link-light lh-1 p-2 rounded"
//                   >
//                     <i className="bi bi-linkedin" />
//                   </a>
//                 </div>
//               </div>
//             </div> */}
//             {/* <div className="col-12">
//               <div className="card widget-card border-light shadow-sm">
//                 <div className="card-header text-bg-primary">About Me</div>
//                 <div className="card-body">
//                   <ul className="list-group list-group-flush mb-0">
//                     <li className="list-group-item">
//                       <h6 className="mb-1">
//                         <span className="bii bi-mortarboard-fill me-2" />
//                         Education
//                       </h6>
//                       <span>M.S Computer Science</span>
//                     </li>
//                     <li className="list-group-item">
//                       <h6 className="mb-1">
//                         <span className="bii bi-geo-alt-fill me-2" />
//                         Location
//                       </h6>
//                       <span>Mountain View, California</span>
//                     </li>
//                     <li className="list-group-item">
//                       <h6 className="mb-1">
//                         <span className="bii bi-building-fill-gear me-2" />
//                         Company
//                       </h6>
//                       <span>GitHub Inc</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div> */}
//             {/* <div className="col-12">
//               <div className="card widget-card border-light shadow-sm">
//                 <div className="card-header text-bg-primary">Skills</div>
//                 <div className="card-body">
//                   <span className="badge text-bg-primary">HTML</span>
//                   <span className="badge text-bg-primary">SCSS</span>
//                   <span className="badge text-bg-primary">Javascript</span>
//                   <span className="badge text-bg-primary">React</span>
//                   <span className="badge text-bg-primary">Vue</span>
//                   <span className="badge text-bg-primary">Angular</span>
//                   <span className="badge text-bg-primary">UI</span>
//                   <span className="badge text-bg-primary">UX</span>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </div>
//         <div className="col-12 col-lg-8 col-xl-9">
//           <div className="card widget-card border-light shadow-sm">
//             <div className="card-body p-4">
//               <ul className="nav nav-tabs" id="profileTab" role="tablist">
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link active"
//                     id="overview-tab"
//                     data-bs-toggle="tab"
//                     data-bs-target="#overview-tab-pane"
//                     type="button"
//                     role="tab"
//                     aria-controls="overview-tab-pane"
//                     aria-selected="true"
//                   >
//                     Overview
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link"
//                     id="profile-tab"
//                     data-bs-toggle="tab"
//                     data-bs-target="#profile-tab-pane"
//                     type="button"
//                     role="tab"
//                     aria-controls="profile-tab-pane"
//                     aria-selected="false"
//                   >
//                     Profile
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link"
//                     id="email-tab"
//                     data-bs-toggle="tab"
//                     data-bs-target="#email-tab-pane"
//                     type="button"
//                     role="tab"
//                     aria-controls="email-tab-pane"
//                     aria-selected="false"
//                   >
//                     Emails
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className="nav-link"
//                     id="password-tab"
//                     data-bs-toggle="tab"
//                     data-bs-target="#password-tab-pane"
//                     type="button"
//                     role="tab"
//                     aria-controls="password-tab-pane"
//                     aria-selected="false"
//                   >
//                     Password
//                   </button>
//                 </li>
//               </ul>
//               <div className="tab-content pt-4" id="profileTabContent">
//                 <div
//                   className="tab-pane fade show active"
//                   id="overview-tab-pane"
//                   role="tabpanel"
//                   aria-labelledby="overview-tab"
//                   tabIndex={0}
//                 >
//                   <h5 className="mb-3">About</h5>
//                   <p className="lead mb-3">
//                     Ethan Leo is a seasoned and results-driven Project Manager
//                     who brings experience and expertise to project management.
//                     With a proven track record of successfully delivering
//                     complex projects on time and within budget, Ethan Leo is the
//                     go-to professional for organizations seeking efficient and
//                     effective project leadership.
//                   </p>
//                   <h5 className="mb-3">Profile</h5>
//                   <div className="row g-0">
//                     <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
//                       <div className="p-2">First Name</div>
//                     </div>
//                     <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
//                       <div className="p-2">Ethan</div>
//                     </div>
//                     <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
//                       <div className="p-2">Last Name</div>
//                     </div>
//                     <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
//                       <div className="p-2">Leo</div>
//                     </div>
//                     <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
//                       <div className="p-2">Education</div>
//                     </div>
//                     <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
//                       <div className="p-2">M.S Computer Science</div>
//                     </div>
//                     <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
//                       <div className="p-2">Address</div>
//                     </div>
//                     <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
//                       <div className="p-2">Mountain View, California</div>
//                     </div>
//                     <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
//                       <div className="p-2">Country</div>
//                     </div>
//                     <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
//                       <div className="p-2">United States</div>
//                     </div>
//                     <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
//                       <div className="p-2">Job</div>
//                     </div>
//                     <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
//                       <div className="p-2">Project Manager</div>
//                     </div>
//                     <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
//                       <div className="p-2">Company</div>
//                     </div>
//                     <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
//                       <div className="p-2">GitHub Inc</div>
//                     </div>
//                     <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
//                       <div className="p-2">Phone</div>
//                     </div>
//                     <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
//                       <div className="p-2">+1 (248) 679-8745</div>
//                     </div>
//                     <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
//                       <div className="p-2">Email</div>
//                     </div>
//                     <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
//                       <div className="p-2">leo@example.com</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="tab-pane fade"
//                   id="profile-tab-pane"
//                   role="tabpanel"
//                   aria-labelledby="profile-tab"
//                   tabIndex={0}
//                 >
//                   <form action="#!" className="row gy-3 gy-xxl-4">
//                     <div className="col-12">
//                       <div className="row gy-2">
//                         <label className="col-12 form-label m-0">
//                           Profile Image
//                         </label>
//                         <div className="col-12">
//                           <img
//                             src="./assets/img/profile-img-1.jpg"
//                             className="img-fluid"
//                             alt="Luna John"
//                           />
//                         </div>
//                         <div className="col-12">
//                           <a
//                             href="#!"
//                             className="d-inline-block bg-primary link-light lh-1 p-2 rounded"
//                           >
//                             <i className="bi bi-upload" />
//                           </a>
//                           <a
//                             href="#!"
//                             className="d-inline-block bg-danger link-light lh-1 p-2 rounded"
//                           >
//                             <i className="bi bi-trash" />
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputFirstName" className="form-label">
//                         First Name
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="inputFirstName"
//                         defaultValue="Ethan"
//                       />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputLastName" className="form-label">
//                         Last Name
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="inputLastName"
//                         defaultValue="Leo"
//                       />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputEducation" className="form-label">
//                         Education
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="inputEducation"
//                         defaultValue="M.S Computer Science"
//                       />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputSkills" className="form-label">
//                         Skills
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="inputSkills"
//                         defaultValue="HTML, SCSS, Javascript, React, Vue, Angular, UI, UX"
//                       />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputJob" className="form-label">
//                         Job
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="inputJob"
//                         defaultValue="Project Manager"
//                       />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputCompany" className="form-label">
//                         Company
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="inputCompany"
//                         defaultValue="GitHub Inc"
//                       />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputPhone" className="form-label">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         className="form-control"
//                         id="inputPhone"
//                         defaultValue={+12486798745}
//                       />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputEmail" className="form-label">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="inputEmail"
//                         defaultValue="leo@example.com"
//                       />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputAddress" className="form-label">
//                         Address
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="inputAddress"
//                         defaultValue="Mountain View, California"
//                       />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputCountry" className="form-label">
//                         Country
//                       </label>
//                       <select className="form-select" id="inputCountry">
//                         <option value="Afghanistan">Afghanistan</option>
//                         <option value="Åland Islands">Åland Islands</option>
//                         <option value="Albania">Albania</option>
//                         <option value="Algeria">Algeria</option>
//                         <option value="American Samoa">American Samoa</option>
//                         <option value="Andorra">Andorra</option>
//                         <option value="Angola">Angola</option>
//                         <option value="Anguilla">Anguilla</option>
//                         <option value="Antarctica">Antarctica</option>
//                         <option value="Antigua and Barbuda">
//                           Antigua and Barbuda
//                         </option>
//                         <option value="Argentina">Argentina</option>
//                         <option value="Armenia">Armenia</option>
//                         <option value="Aruba">Aruba</option>
//                         <option value="Australia">Australia</option>
//                         <option value="Austria">Austria</option>
//                         <option value="Azerbaijan">Azerbaijan</option>
//                         <option value="Bahamas">Bahamas</option>
//                         <option value="Bahrain">Bahrain</option>
//                         <option value="Bangladesh">Bangladesh</option>
//                         <option value="Barbados">Barbados</option>
//                         <option value="Belarus">Belarus</option>
//                         <option value="Belgium">Belgium</option>
//                         <option value="Belize">Belize</option>
//                         <option value="Benin">Benin</option>
//                         <option value="Bermuda">Bermuda</option>
//                         <option value="Bhutan">Bhutan</option>
//                         <option value="Bolivia">Bolivia</option>
//                         <option value="Bosnia and Herzegovina">
//                           Bosnia and Herzegovina
//                         </option>
//                         <option value="Botswana">Botswana</option>
//                         <option value="Bouvet Island">Bouvet Island</option>
//                         <option value="Brazil">Brazil</option>
//                         <option value="British Indian Ocean Territory">
//                           British Indian Ocean Territory
//                         </option>
//                         <option value="Brunei Darussalam">
//                           Brunei Darussalam
//                         </option>
//                         <option value="Bulgaria">Bulgaria</option>
//                         <option value="Burkina Faso">Burkina Faso</option>
//                         <option value="Burundi">Burundi</option>
//                         <option value="Cambodia">Cambodia</option>
//                         <option value="Cameroon">Cameroon</option>
//                         <option value="Canada">Canada</option>
//                         <option value="Cape Verde">Cape Verde</option>
//                         <option value="Cayman Islands">Cayman Islands</option>
//                         <option value="Central African Republic">
//                           Central African Republic
//                         </option>
//                         <option value="Chad">Chad</option>
//                         <option value="Chile">Chile</option>
//                         <option value="China">China</option>
//                         <option value="Christmas Island">
//                           Christmas Island
//                         </option>
//                         <option value="Cocos (Keeling) Islands">
//                           Cocos (Keeling) Islands
//                         </option>
//                         <option value="Colombia">Colombia</option>
//                         <option value="Comoros">Comoros</option>
//                         <option value="Congo">Congo</option>
//                         <option value="Congo, The Democratic Republic of The">
//                           Congo, The Democratic Republic of The
//                         </option>
//                         <option value="Cook Islands">Cook Islands</option>
//                         <option value="Costa Rica">Costa Rica</option>
//                         <option value="Cote D'ivoire">Cote D'ivoire</option>
//                         <option value="Croatia">Croatia</option>
//                         <option value="Cuba">Cuba</option>
//                         <option value="Cyprus">Cyprus</option>
//                         <option value="Czech Republic">Czech Republic</option>
//                         <option value="Denmark">Denmark</option>
//                         <option value="Djibouti">Djibouti</option>
//                         <option value="Dominica">Dominica</option>
//                         <option value="Dominican Republic">
//                           Dominican Republic
//                         </option>
//                         <option value="Ecuador">Ecuador</option>
//                         <option value="Egypt">Egypt</option>
//                         <option value="El Salvador">El Salvador</option>
//                         <option value="Equatorial Guinea">
//                           Equatorial Guinea
//                         </option>
//                         <option value="Eritrea">Eritrea</option>
//                         <option value="Estonia">Estonia</option>
//                         <option value="Ethiopia">Ethiopia</option>
//                         <option value="Falkland Islands (Malvinas)">
//                           Falkland Islands (Malvinas)
//                         </option>
//                         <option value="Faroe Islands">Faroe Islands</option>
//                         <option value="Fiji">Fiji</option>
//                         <option value="Finland">Finland</option>
//                         <option value="France">France</option>
//                         <option value="French Guiana">French Guiana</option>
//                         <option value="French Polynesia">
//                           French Polynesia
//                         </option>
//                         <option value="French Southern Territories">
//                           French Southern Territories
//                         </option>
//                         <option value="Gabon">Gabon</option>
//                         <option value="Gambia">Gambia</option>
//                         <option value="Georgia">Georgia</option>
//                         <option value="Germany">Germany</option>
//                         <option value="Ghana">Ghana</option>
//                         <option value="Gibraltar">Gibraltar</option>
//                         <option value="Greece">Greece</option>
//                         <option value="Greenland">Greenland</option>
//                         <option value="Grenada">Grenada</option>
//                         <option value="Guadeloupe">Guadeloupe</option>
//                         <option value="Guam">Guam</option>
//                         <option value="Guatemala">Guatemala</option>
//                         <option value="Guernsey">Guernsey</option>
//                         <option value="Guinea">Guinea</option>
//                         <option value="Guinea-bissau">Guinea-bissau</option>
//                         <option value="Guyana">Guyana</option>
//                         <option value="Haiti">Haiti</option>
//                         <option value="Heard Island and Mcdonald Islands">
//                           Heard Island and Mcdonald Islands
//                         </option>
//                         <option value="Holy See (Vatican City State)">
//                           Holy See (Vatican City State)
//                         </option>
//                         <option value="Honduras">Honduras</option>
//                         <option value="Hong Kong">Hong Kong</option>
//                         <option value="Hungary">Hungary</option>
//                         <option value="Iceland">Iceland</option>
//                         <option value="India">India</option>
//                         <option value="Indonesia">Indonesia</option>
//                         <option value="Iran, Islamic Republic of">
//                           Iran, Islamic Republic of
//                         </option>
//                         <option value="Iraq">Iraq</option>
//                         <option value="Ireland">Ireland</option>
//                         <option value="Isle of Man">Isle of Man</option>
//                         <option value="Israel">Israel</option>
//                         <option value="Italy">Italy</option>
//                         <option value="Jamaica">Jamaica</option>
//                         <option value="Japan">Japan</option>
//                         <option value="Jersey">Jersey</option>
//                         <option value="Jordan">Jordan</option>
//                         <option value="Kazakhstan">Kazakhstan</option>
//                         <option value="Kenya">Kenya</option>
//                         <option value="Kiribati">Kiribati</option>
//                         <option value="Korea, Democratic People's Republic of">
//                           Korea, Democratic People's Republic of
//                         </option>
//                         <option value="Korea, Republic of">
//                           Korea, Republic of
//                         </option>
//                         <option value="Kuwait">Kuwait</option>
//                         <option value="Kyrgyzstan">Kyrgyzstan</option>
//                         <option value="Lao People's Democratic Republic">
//                           Lao People's Democratic Republic
//                         </option>
//                         <option value="Latvia">Latvia</option>
//                         <option value="Lebanon">Lebanon</option>
//                         <option value="Lesotho">Lesotho</option>
//                         <option value="Liberia">Liberia</option>
//                         <option value="Libyan Arab Jamahiriya">
//                           Libyan Arab Jamahiriya
//                         </option>
//                         <option value="Liechtenstein">Liechtenstein</option>
//                         <option value="Lithuania">Lithuania</option>
//                         <option value="Luxembourg">Luxembourg</option>
//                         <option value="Macao">Macao</option>
//                         <option value="Macedonia, The Former Yugoslav Republic of">
//                           Macedonia, The Former Yugoslav Republic of
//                         </option>
//                         <option value="Madagascar">Madagascar</option>
//                         <option value="Malawi">Malawi</option>
//                         <option value="Malaysia">Malaysia</option>
//                         <option value="Maldives">Maldives</option>
//                         <option value="Mali">Mali</option>
//                         <option value="Malta">Malta</option>
//                         <option value="Marshall Islands">
//                           Marshall Islands
//                         </option>
//                         <option value="Martinique">Martinique</option>
//                         <option value="Mauritania">Mauritania</option>
//                         <option value="Mauritius">Mauritius</option>
//                         <option value="Mayotte">Mayotte</option>
//                         <option value="Mexico">Mexico</option>
//                         <option value="Micronesia, Federated States of">
//                           Micronesia, Federated States of
//                         </option>
//                         <option value="Moldova, Republic of">
//                           Moldova, Republic of
//                         </option>
//                         <option value="Monaco">Monaco</option>
//                         <option value="Mongolia">Mongolia</option>
//                         <option value="Montenegro">Montenegro</option>
//                         <option value="Montserrat">Montserrat</option>
//                         <option value="Morocco">Morocco</option>
//                         <option value="Mozambique">Mozambique</option>
//                         <option value="Myanmar">Myanmar</option>
//                         <option value="Namibia">Namibia</option>
//                         <option value="Nauru">Nauru</option>
//                         <option value="Nepal">Nepal</option>
//                         <option value="Netherlands">Netherlands</option>
//                         <option value="Netherlands Antilles">
//                           Netherlands Antilles
//                         </option>
//                         <option value="New Caledonia">New Caledonia</option>
//                         <option value="New Zealand">New Zealand</option>
//                         <option value="Nicaragua">Nicaragua</option>
//                         <option value="Niger">Niger</option>
//                         <option value="Nigeria">Nigeria</option>
//                         <option value="Niue">Niue</option>
//                         <option value="Norfolk Island">Norfolk Island</option>
//                         <option value="Northern Mariana Islands">
//                           Northern Mariana Islands
//                         </option>
//                         <option value="Norway">Norway</option>
//                         <option value="Oman">Oman</option>
//                         <option value="Pakistan">Pakistan</option>
//                         <option value="Palau">Palau</option>
//                         <option value="Palestinian Territory, Occupied">
//                           Palestinian Territory, Occupied
//                         </option>
//                         <option value="Panama">Panama</option>
//                         <option value="Papua New Guinea">
//                           Papua New Guinea
//                         </option>
//                         <option value="Paraguay">Paraguay</option>
//                         <option value="Peru">Peru</option>
//                         <option value="Philippines">Philippines</option>
//                         <option value="Pitcairn">Pitcairn</option>
//                         <option value="Poland">Poland</option>
//                         <option value="Portugal">Portugal</option>
//                         <option value="Puerto Rico">Puerto Rico</option>
//                         <option value="Qatar">Qatar</option>
//                         <option value="Reunion">Reunion</option>
//                         <option value="Romania">Romania</option>
//                         <option value="Russian Federation">
//                           Russian Federation
//                         </option>
//                         <option value="Rwanda">Rwanda</option>
//                         <option value="Saint Helena">Saint Helena</option>
//                         <option value="Saint Kitts and Nevis">
//                           Saint Kitts and Nevis
//                         </option>
//                         <option value="Saint Lucia">Saint Lucia</option>
//                         <option value="Saint Pierre and Miquelon">
//                           Saint Pierre and Miquelon
//                         </option>
//                         <option value="Saint Vincent and The Grenadines">
//                           Saint Vincent and The Grenadines
//                         </option>
//                         <option value="Samoa">Samoa</option>
//                         <option value="San Marino">San Marino</option>
//                         <option value="Sao Tome and Principe">
//                           Sao Tome and Principe
//                         </option>
//                         <option value="Saudi Arabia">Saudi Arabia</option>
//                         <option value="Senegal">Senegal</option>
//                         <option value="Serbia">Serbia</option>
//                         <option value="Seychelles">Seychelles</option>
//                         <option value="Sierra Leone">Sierra Leone</option>
//                         <option value="Singapore">Singapore</option>
//                         <option value="Slovakia">Slovakia</option>
//                         <option value="Slovenia">Slovenia</option>
//                         <option value="Solomon Islands">Solomon Islands</option>
//                         <option value="Somalia">Somalia</option>
//                         <option value="South Africa">South Africa</option>
//                         <option value="South Georgia and The South Sandwich Islands">
//                           South Georgia and The South Sandwich Islands
//                         </option>
//                         <option value="Spain">Spain</option>
//                         <option value="Sri Lanka">Sri Lanka</option>
//                         <option value="Sudan">Sudan</option>
//                         <option value="Suriname">Suriname</option>
//                         <option value="Svalbard and Jan Mayen">
//                           Svalbard and Jan Mayen
//                         </option>
//                         <option value="Swaziland">Swaziland</option>
//                         <option value="Sweden">Sweden</option>
//                         <option value="Switzerland">Switzerland</option>
//                         <option value="Syrian Arab Republic">
//                           Syrian Arab Republic
//                         </option>
//                         <option value="Taiwan">Taiwan</option>
//                         <option value="Tajikistan">Tajikistan</option>
//                         <option value="Tanzania, United Republic of">
//                           Tanzania, United Republic of
//                         </option>
//                         <option value="Thailand">Thailand</option>
//                         <option value="Timor-leste">Timor-leste</option>
//                         <option value="Togo">Togo</option>
//                         <option value="Tokelau">Tokelau</option>
//                         <option value="Tonga">Tonga</option>
//                         <option value="Trinidad and Tobago">
//                           Trinidad and Tobago
//                         </option>
//                         <option value="Tunisia">Tunisia</option>
//                         <option value="Turkey">Turkey</option>
//                         <option value="Turkmenistan">Turkmenistan</option>
//                         <option value="Turks and Caicos Islands">
//                           Turks and Caicos Islands
//                         </option>
//                         <option value="Tuvalu">Tuvalu</option>
//                         <option value="Uganda">Uganda</option>
//                         <option value="Ukraine">Ukraine</option>
//                         <option value="United Arab Emirates">
//                           United Arab Emirates
//                         </option>
//                         <option value="United Kingdom">United Kingdom</option>
//                         <option value="United States" selected="">
//                           United States
//                         </option>
//                         <option value="United States Minor Outlying Islands">
//                           United States Minor Outlying Islands
//                         </option>
//                         <option value="Uruguay">Uruguay</option>
//                         <option value="Uzbekistan">Uzbekistan</option>
//                         <option value="Vanuatu">Vanuatu</option>
//                         <option value="Venezuela">Venezuela</option>
//                         <option value="Viet Nam">Viet Nam</option>
//                         <option value="Virgin Islands, British">
//                           Virgin Islands, British
//                         </option>
//                         <option value="Virgin Islands, U.S.">
//                           Virgin Islands, U.S.
//                         </option>
//                         <option value="Wallis and Futuna">
//                           Wallis and Futuna
//                         </option>
//                         <option value="Western Sahara">Western Sahara</option>
//                         <option value="Yemen">Yemen</option>
//                         <option value="Zambia">Zambia</option>
//                         <option value="Zimbabwe">Zimbabwe</option>
//                       </select>
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputYouTube" className="form-label">
//                         YouTube
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="inputYouTube"
//                         defaultValue="https://www.youtube.com/EthanLeo"
//                       />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputX" className="form-label">
//                         X
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="inputX"
//                         defaultValue="https://twitter.com/EthanLeo"
//                       />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputFacebook" className="form-label">
//                         Facebook
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="inputFacebook"
//                         defaultValue="https://www.facebook.com/EthanLeo"
//                       />
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <label htmlFor="inputLinkedIn" className="form-label">
//                         LinkedIn
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="inputLinkedIn"
//                         defaultValue="https://www.linkedin.com/EthanLeo"
//                       />
//                     </div>
//                     <div className="col-12">
//                       <label htmlFor="inputAbout" className="form-label">
//                         About
//                       </label>
//                       <textarea
//                         className="form-control"
//                         id="inputAbout"
//                         defaultValue={
//                           "Ethan Leo is a seasoned and results-driven Project Manager who brings experience and expertise to project management. With a proven track record of successfully delivering complex projects on time and within budget, Ethan Leo is the go-to professional for organizations seeking efficient and effective project leadership."
//                         }
//                       />
//                     </div>
//                     <div className="col-12">
//                       <button type="submit" className="btn btn-primary">
//                         Save Changes
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//                 <div
//                   className="tab-pane fade"
//                   id="email-tab-pane"
//                   role="tabpanel"
//                   aria-labelledby="email-tab"
//                   tabIndex={0}
//                 >
//                   <form action="#!">
//                     <fieldset className="row gy-3 gy-md-0">
//                       <legend className="col-form-label col-12 col-md-3 col-xl-2">
//                         Email Alerts
//                       </legend>
//                       <div className="col-12 col-md-9 col-xl-10">
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             id="emailChange"
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor="emailChange"
//                           >
//                             Email Changed
//                           </label>
//                         </div>
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             id="passwordChange"
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor="passwordChange"
//                           >
//                             Password Changed
//                           </label>
//                         </div>
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             id="weeklyNewsletter"
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor="weeklyNewsletter"
//                           >
//                             Weekly Newsletter
//                           </label>
//                         </div>
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             id="productPromotions"
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor="productPromotions"
//                           >
//                             Product Promotions
//                           </label>
//                         </div>
//                       </div>
//                     </fieldset>
//                     <div className="row">
//                       <div className="col-12">
//                         <button type="submit" className="btn btn-primary mt-4">
//                           Save Changes
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//                 <div
//                   className="tab-pane fade"
//                   id="password-tab-pane"
//                   role="tabpanel"
//                   aria-labelledby="password-tab"
//                   tabIndex={0}
//                 >
//                   <form action="#!">
//                     <div className="row gy-3 gy-xxl-4">
//                       <div className="col-12">
//                         <label htmlFor="currentPassword" className="form-label">
//                           Current Password
//                         </label>
//                         <input
//                           type="password"
//                           className="form-control"
//                           id="currentPassword"
//                         />
//                       </div>
//                       <div className="col-12">
//                         <label htmlFor="newPassword" className="form-label">
//                           New Password
//                         </label>
//                         <input
//                           type="password"
//                           className="form-control"
//                           id="newPassword"
//                         />
//                       </div>
//                       <div className="col-12">
//                         <label htmlFor="confirmPassword" className="form-label">
//                           Confirm Password
//                         </label>
//                         <input
//                           type="password"
//                           className="form-control"
//                           id="confirmPassword"
//                         />
//                       </div>
//                       <div className="col-12">
//                         <button type="submit" className="btn btn-primary">
//                           Change Password
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </>

   
//   );
// }

// export default BasicForm;
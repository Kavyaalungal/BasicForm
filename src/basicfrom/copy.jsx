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
                        {/* <FormControl fullWidth variant="outlined" sx={{ height: '40px', marginBottom: '25px' }}>
                          <InputLabel sx={{ fontSize: '1rem', top: '-4px' }}>Search By</InputLabel>                                        <Select

                            label="Search By"
                            sx={{ height: '40px' }}
                          >
                            <MenuItem value="Patient ID">Patient ID</MenuItem>
                            <MenuItem value="Name">Name</MenuItem>
                            <MenuItem value="Email">Email</MenuItem>
                            <MenuItem value="Phone">Phone</MenuItem>
                          </Select>
                        </FormControl> */}
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
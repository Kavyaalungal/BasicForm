import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { CDatePicker } from '@coreui/react-pro';
import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
function Register() {
  return (
   <>
   <Grid container spacing={2}>
    <Grid item xs={12}>
    <Card>
    <CardContent>
    <Grid container spacing={1}>
                  <Grid item xs={12} sm={3} md={4} lg={3}>
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
                  <Grid item xs={12} sm={9} md={8} lg={9}>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
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

              
    </CardContent>
   </Card>
    </Grid>
    <Grid item xs={12}>
    <Card>
    <CardContent>
  
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4} md={4}>
                    <TextField
                      id="patientid"
                      label="Patient ID"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={3} md={2}>
                    <TextField
                      select
                      label="Prefix"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '16px' } }}
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="Mr">Mr</MenuItem>
                      <MenuItem value="Mrs">Mrs</MenuItem>
                      <MenuItem value="Ms">Ms</MenuItem>
                      <MenuItem value="Miss">Miss</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={5} md={6}>
                    <TextField
                      id="name"
                      label="Name"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                    />
                  </Grid>

                  {/* <Grid item container xs={12} sm={7} spacing={2}> */}
                    <Grid item xs={4} sm={2} md={2}>
                      <TextField
                        id="yyyy"
                        label="Age YY"
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputLabelProps={{ style: { fontSize: '1rem' } }}
                      />
                    </Grid>
                    <Grid item xs={4} sm={2} md={2}>
                      <TextField
                        id="mm"
                        label="Age MM"
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputLabelProps={{ style: { fontSize: '1rem' } }}
                      />
                    </Grid>
                    <Grid item xs={4} sm={2} md={2}>
                      <TextField
                        id="dd"
                        label="Age DD"
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputLabelProps={{ style: { fontSize: '1rem' } }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={4} md={3}>
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
                  {/* </Grid> */}

                  <Grid item xs={12} sm={5} md={3}>
                    <CDatePicker locale="en-US" placeholder={'Date of Birth'} />
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
                      multiline
                      rows={5}
                      fullWidth
                      InputLabelProps={{ style: { fontSize: '1rem' } }}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
                  <Grid item>
                    <Button
                      variant="contained"
                      className="button"
                      sx={{ marginTop: 2, marginRight: 1, }}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      className="button"
                      sx={{ marginTop: 2, marginLeft: 2,}}
                    >
                      New
                    </Button>
                  </Grid>
                </Grid>
    </CardContent>
   </Card>
    </Grid>
    </Grid>
   </>
  )
}

export default Register
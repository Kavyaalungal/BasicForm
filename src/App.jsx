import { useState } from 'react'
import { CNavItem, CNavLink, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CBadge , CCloseButton  } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicForm from '../src/basicfrom/BasicForm'
import './App.css';
import Patient from './basicfrom/Patient';
function App() {
 

  const [visibleXL, setVisibleXL] = useState(false)
// const [visibleLg, setVisibleLg] = useState(false)
// const [visibleSm, setVisibleSm] = useState(false)
return (
  <>
    <CButton color="primary" onClick={() => setVisibleXL(!visibleXL)}>Extra large modal</CButton>
    {/* <CButton color="primary" onClick={() => setVisibleLg(!visibleLg)}>Large modal</CButton>
    <CButton color="primary" onClick={() => setVisibleSm(!visibleSm)}>Small modal</CButton> */}
    <CModal
    className='custom-modal'
      size="xl"
      visible={visibleXL}
      onClose={() => setVisibleXL(false)}
      aria-labelledby="OptionalSizesExample1"
    >
      <CModalHeader className='custom-modal-header'>
        <CModalTitle id="OptionalSizesExample1" className='custom-modal-title '>Patient Registartion</CModalTitle>
      </CModalHeader>
      <CModalBody className='c-modal-body'>
        <Patient/>
        {/* <BasicForm/> */}
      </CModalBody>
    </CModal>
  
  </>
)
}
export default App;

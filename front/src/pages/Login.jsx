import React from 'react'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
// import { Button } from 'bootstrap';



const fortmatResponse = (res) => {
  console.log(JSON.stringify(res, null, 2));
  return JSON.stringify(res, null, 2);
};

const Login = ({isAllowed}) => {
  const navigate = useNavigate();
  const handleLogin = async () =>
  {
  //   const requestOptions = {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ title: 'React POST Request Example' })
  // };
    fetch("http://localhost:3001/api/v1/login")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      localStorage.setItem('auth', true); 
      navigate('/dashboard');
    })
    .catch(err => console.log(fortmatResponse(err) || err))
    
  }

  //API

  

  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between   mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          
          <Button className="mb-4 w-100" size="lg" onClick={handleLogin}>Sign in</Button>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}

export default Login
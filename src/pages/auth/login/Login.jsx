import React, { useContext, useState } from 'react'
import Form from '../../../components/form/Form'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from "../../../context/AuthContext"

const Login = () => {
  const inputTypes = ['email','password'];
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const {user,dispatch} = useContext(AuthContext)
  const navigate = useNavigate()


  const handleClick = async (e) => {

     // extract the values of loginname and password
     const email = formData.find(input => input.type === "email").value;
     const password = formData.find(input => input.type === "password").value;


     dispatch({type:"LOGIN_START"})
    try {
      const res = await axios.post("http://localhost:9000/user/login", {
        email,
        password
      });
  
      dispatch({type:"LOGIN_SUCCESS",payload:[res.data.details,res.data.role]})

      setTimeout(() => {
        navigate('/')
      }, 2000)

    } catch (err) {
      dispatch({type:"LOGIN_FAILURE",payload:err.response.data})

      setError([true, err.response.data.message])
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }

  const handleSubmit = (formData) => {
    setFormData(formData)
    console.log("Submit form data: ",formData);
}
  return (
    <>
    <h1 className='text-center mt-5'>Login</h1>
    {error && (
      <div className="alert alert-danger text-center w-35" role="alert">
     {error}
        </div>
    )
    }
    {success && (
      <div class="alert alert-success" role="alert">
     {success}
        </div>
    )
    }
    <div className='d-flex justify-content-center align-items-center' style={{marginTop:"100% !important"}}>
       <Form inputTypes={inputTypes} onSubmit={handleSubmit} onClick={handleClick} />
    </div>

    <div className='d-flex flex-column align-items-center justify-content-center'>

       <hr className='w-25 align-center mt-3'/>
       <h3 className='text-center my-4'>OR</h3>
       <Link to="/auth/register" className='text-center'>Don't have an account? Register now</Link>
    </div>

    </>
  )
}

export default Login
import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const inputTypes = ['text', 'email','password'];
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleClick = async (e) => {

     // extract the values of loginname and password
     const name = formData.find(input => input.type === "text").value;
     const email = formData.find(input => input.type === "email").value;
     const password = formData.find(input => input.type === "password").value;

    try {
      const res = await axios.post("https://real-jade-snail-veil.cyclic.app/user/register", {
        name,
        email,
        password
      });
      console.log(res);

      setSuccess(res.data[0])
      setTimeout(() => {
        navigate('/auth/login')
      }, 2000)

    } catch (err) {
      console.error(err);

      setError([true, err.response.data])
      setTimeout(() => {
        setError(false)
      }, 3000)

    }
  }

  const handleSubmit = (formData) => {
    setFormData(formData)
}
  return (
    <>
    <h1 className='text-center mt-5'>Register</h1>
    {error && (
      <div class="alert alert-danger text-center" role="alert">
     {error}
        </div>
    )
    }
    {success && (
      <div class="alert alert-success text-center" role="alert">
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
       <Link to="/auth/login" className='text-center'>Already have an account? Login now</Link>
    </div>

    </>
  )
}

export default Register
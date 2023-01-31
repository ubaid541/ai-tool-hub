import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import axios from "axios"
import { Link } from 'react-router-dom';

const Register = () => {
  const inputTypes = ['text', 'email','password'];
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  console.log("Upper form data",formData)

  const handleClick = async (e) => {

     // extract the values of loginname and password
     const name = formData.find(input => input.type === "text").value;
     const email = formData.find(input => input.type === "email").value;
     const password = formData.find(input => input.type === "password").value;


     console.table("click: ",name,email,password)

    // try {
    //   const res = await axios.post("https://koki.pk/abante/index.php?rt=a/account/login", {
    //     loginname,
    //     password,
    //     api_key
    //   });
    //   console.log(res);
    // } catch (err) {
    //   console.error(err);
    // }
  }

  const handleSubmit = (formData) => {
    setFormData(formData)
    console.log("Submit form data: ",formData);
}
  return (
    <>
    <h1 className='text-center mt-5'>Register</h1>
    {error && (
      <div class="alert alert-danger" role="alert">
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
       <Link to="/auth/login" className='text-center'>Already have an account? Login now</Link>
    </div>

    </>
  )
}

export default Register
import React from 'react'
import { useState } from 'react'

import "./ImageGinie.css"

const ImageGinie = () => {
    const [imageDesc, setImageDesc] = useState('');
    const [displayImage, setDisplayImage] = useState()
    const [showspinner, setSpinner] = useState(false)
    const [error, setError] = useState()
  
    const handleKeyPress = (e)=>{
      if(e.key === "Enter"){
        handleSubmit(e)
      }
    }
  
  
    const handleChange = (e) => {
  
      setImageDesc((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    };
  
    const handleReset = (e)=>{
      setDisplayImage("")
      // setImageDesc("")
    }
  
    
    const handleSubmit = async (e)=>{
      e.preventDefault()
  
      if(!imageDesc){
        setError("Input field cannot be empty")
        setTimeout(() => {
          setError(false)
        }, 3000)
        // alert("Input field cannot be empty")
        return
      }
  
      try {
        setDisplayImage("")
        setSpinner(true)
        const response = await fetch('https://real-jade-snail-veil.cyclic.app/generateImage', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              prompt: imageDesc.prompt,
              size : imageDesc.size
          })
      })
        //  console.log(response);    
         const data = await response.json()   
  
         setDisplayImage(data.data)
  
         setSpinner(false)
  
            // setImageDesc("")
      
          } catch (error) {
            // alert(error)
            setError(error)
            setTimeout(() => {
              setError(false)
            }, 3000)
            console.log(error);
          }
      
      
    }
  
    return (
      <div className='container-fluid'>
        <div className='row mb-4 text-center py-5' style={{background:'#4d4dff'}}>
          <h1 style={{color:'#ffffff'}}>Describe An Image</h1>
        </div>
  
      {/* image form */}
        <div className='row '>
          <form className='col-12 col-lg-6 col-md-8 mx-auto'>
          <div className="form-control mb-3">
              <input className='form-control' value={imageDesc?.prompt} autoComplete="off" type="text" id="prompt" 
              onChange={handleChange} placeholder="Enter Text" />
            </div>
            {/* Size */}
            <div className="form-control">
              <select className='form-control' value={imageDesc?.size} id="size" onChange={handleChange} required>
                <option >Select Size</option>
                <option value="small">Small</option>
                <option value="medium" >Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
  
            <button type="submit" style={{background:'#6666ff',outline:'none',color:'#fff'}} onClick={handleSubmit}
            onKeyPress={handleKeyPress}
              className={`btn  my-4 ${showspinner && 'disabled'}`}>Generate</button>
            {displayImage &&
                      <button type="submit" onClick={handleReset}  className="btn btn-dark my-4 ms-5 ">Reset</button>
            }
          </form>
        </div>
  
        {error && (
          <>
          <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
          <div class="alert alert-danger text-center col-lg-4 col-12" role="alert">
          {error}
        </div>
          </div>
        </>
        )
        }
  
        <div className="row image mb-5">
          <div className="image-container">
            {/* <h2 className="msg"></h2> */}
            <img src={displayImage} alt="" id="image" className='img-fluid mx-auto d-block' />
          </div>
        </div>
  
        {showspinner &&
        <div className="d-flex justify-content-center ">
        <div className={`spinner-grow text-primary`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
  }
      </div>
    )
}

export default ImageGinie
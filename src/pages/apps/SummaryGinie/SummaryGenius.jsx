import React from 'react'
import "./SummaryGenius.css"
import { useClipboard } from 'use-clipboard-copy';
import { useState } from 'react'


const SummaryGenius = () => {
    const [summary, setSummary] = useState()
    const [url, setUrl] = useState()
    const [text, setText] = useState()
    const [showspinner, setSpinner] = useState(false)
    const [error, setError] = useState()
  
    const [isCopied, setIsCopied] = useState(false);
    const { copy } = useClipboard();
  
  
    const handleCopy = () => {
      copy(summary);
      setIsCopied(true);
    };
  
  
    const handleKeyPress = (e)=>{
      if(e.key === "Enter"){
        handleSubmit(e)
      }
    }
  
  
    const handleChange = e => {
      if(e.target.id === "url"){
        setUrl(
  e.target.value
        );
      }
      else if(e.target.id === "text"){
        setText(
          e.target.value
                );
      }
  
    };
  
  
    const handleReset = (e)=>{
       setSummary("")
       setText("")
       setUrl("")
    }
  
    
    const handleSubmit = async (e)=>{
      e.preventDefault()
  
      if(!url && !text ){
        setError("Input field cannot be empty")
        setTimeout(() => {
          setError(false)
        }, 3000)
        // alert("Input field cannot be empty")
        return
      }
  
      try {
        setSpinner(true)
        const response = await fetch('https://real-jade-snail-veil.cyclic.app/summarize', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              url,
              text 
          })
      })
        //  console.log(response);    
         const data = await response.json()  
         
         setSummary(data.summary)
       
         setSpinner(false)
      
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
        <div className='row mb-4 text-center py-5' style={{background:' #4B9CD3' }}>
          <h2 style={{color:'#ffffff'}}>Effortlessly Summarize Any Article, Blog, or Paper with One Click</h2>
        </div>
  
      {/* article input form */}
        <div className='row '>
        {error && (
          <>
          <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
          <div className="alert alert-danger text-center col-lg-4 col-12" role="alert">
          {error}
        </div>
          </div>
        </>
        )
        }
          <form className='col-12 col-lg-6 col-md-8 mx-auto'>
          <div className="form-control mb-3">
            {/* url */}
              <input className='form-control' value={url} name='url' autoComplete="off" type="url" id="url" 
              onChange={handleChange} placeholder="Enter url of article https://..." />
            </div>
  
            <h4 className='text-center mb-4'>OR</h4>
  
            {/* text */}
            <div className="form-floating">
            <textarea className="form-control" 
            value={text}
            onChange={handleChange}
            placeholder="" id="text" name='text' style={{height:"100px"}}></textarea>
            <label htmlFor="floatingTextarea2" className='text-capatilize'>Paste the article text</label>
          </div>
  
            <button type="submit" style={{background:'#6666ff',outline:'none',color:'#fff'}} onClick={handleSubmit}
            onKeyPress={handleKeyPress}
              className={`btn  my-4 ${showspinner && 'disabled'}`}>Summarize</button>
            {summary && (
  
              <button type="submit" onClick={handleReset}  className="btn btn-dark my-4 ms-5 ">Reset</button>
            )
            }
          </form>
        </div>
  
  
  
  {showspinner &&
        <div className="d-flex justify-content-center ">
        <div className={`spinner-grow text-primary`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
  }
  
        {summary && (
  
          <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 my-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Summary</h5>
                  <p className="card-text">{summary}</p>
                  <button className="btn btn-primary" onClick={handleCopy}>
            {isCopied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
        
      </div>
    )
}

export default SummaryGenius
import React, { useState } from 'react'
import "./Form.css"

const Form = ({inputTypes, onSubmit,onClick}) => {
  // state to store the inputs of the form
  const [inputs, setInputs] = useState(inputTypes?.map((type) => ({ type, value: '' })));

  // function to handle changes made to input fields
  const handleInputChange = (e, index) => {

    const values = [...inputs];
    values[index].value = e.target.value;
    setInputs(values);

    onSubmit(inputs)
  };

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // call the onSubmit prop function passing the form data
    onClick()
  };

  return (
    <div className='col-lg-4 col-md-8 col-10'>
      <form onSubmit={handleSubmit}>
      {inputs?.map((input, index) => (
        <div key={index}>
          <input
          className='form-control my-2'
            type={input.type}
            value={input.value}
            placeholder={input.type === 'text' ? 'name' : input.type}
            autoComplete="off"
            onChange={(e) => handleInputChange(e, index)}
          />
        </div>
      ))}
      <button type="submit" className='btn rounded'>Submit</button>
    </form>
    </div>
  );
}


export default Form
import { useState } from 'react'
// import react from './assets/react.svg'
import bot from "../../../assets/bot.svg"
import user from "../../../assets/user.svg"
import "./SmartAssist.css"


const SmartAssist = () => {

    const chatContainer = document.querySelector("#chat_container")
    const txtarea = document.querySelector("#txtarea")
  
    const [input_txt, setinput_txt] = useState('')
  
  
    let loadInterval;
  
  // load messages
  function loader(element){
    element.textContent = '';
  
    loadInterval = setInterval(()=>{
      element.textContent += ".";
  
      if(element.textContent === "...."){
        element.textContent = '';
      }
    },300)
  }
  
  // display text word by word 
  function typeText(element,text){
    let index = 0;
  
    let interval = setInterval(()=>{
      if(index < text.length){
        element.innerHTML += text.charAt(index)
        index++;
      }else{
        clearInterval(interval)
      }
    },20)
  }
  
  // unique id for every single message
  function generateUniqueId(){
    const timestamp = Date.now()
    const randomNumber = Math.random()
    const hexadecimalString = randomNumber.toString(16)
  
    return `id-${timestamp}-${hexadecimalString}`
  }
  
  function chatStripe (isAI,value,uniqueId){
    return (
      `
      <div class="wrapper ${isAI && 'ai'} ">
        <div class="chat">
          <div class="profile">
            <img
              src=${isAI ? bot : user}
              alt=${isAI ? 'bot' : 'user'}
            />
          </div>
          <div class="message ${isAI && 'bot-msg'}" id=${uniqueId}>
            ${value}
          </div>
        </div>
      </div>
      `
    )
  }
  
  
    const handleChange = (e)=>{
      // setinput_txt((prev) => ({ ...prev, [e.target.id]: e.target.value }))
      console.log(e.target.value);
      setinput_txt(e.target.value)
    }
  
  
    const handleKeyPress = (e)=>{
      if(e.key === "Enter"){
        handleSubmit(e)
      }
    }
  
    const handleSubmit = async (e)=>{
      e.preventDefault()
  
      if(!input_txt){
        alert("Kindly enter something.")
        return;
      }
      
      chatContainer.innerHTML += chatStripe(false,input_txt)
  
       // bot's chatstripe
    const uniqueId = generateUniqueId()
    chatContainer.innerHTML += chatStripe(true, " ", uniqueId)
  
    
    // to focus scroll to the bottom 
     chatContainer.scrollTop = chatContainer.scrollHeight;
  
     // Set up an interval to continually scroll down
     const scroll_interval = setInterval(() => {
     // Check if the scroll position is near the bottom of the container
     const isNearBottom = chatContainer.scrollHeight - chatContainer.scrollTop <= chatContainer.clientHeight + 50;
  
     // If the scroll position is near the bottom, increase the scroll position by 10 pixels
     if (isNearBottom) {
       chatContainer.scrollTop += 10;
     }
    }, 100);
  
  
      // specific message div 
      const messageDiv = document.getElementById(uniqueId)
  
      // messageDiv.innerHTML = "..."
      loader(messageDiv)
  
      try {
        
    const response = await fetch('https://real-jade-snail-veil.cyclic.app/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          prompt: input_txt
      })
  })
  
        clearInterval(loadInterval)
        messageDiv.innerHTML = " "
  
        const data = await response.json();
  
        const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 
  
        
        setinput_txt("")
  
        typeText(messageDiv, parsedData)
        clearInterval(scroll_interval)
  
      } catch (error) {
        clearInterval(loadInterval)
        messageDiv.innerHTML = " "
        messageDiv.innerHTML = "Something went wrong"
        alert(error)
        console.log(error);
      }
  
  
    }
  
    return (
   <>
        {/* <div id="chat_container" ></div>
        <form className='chat_form'>
          <textarea
            id="txtarea"
            rows="1"
            cols="1"
            value={input_txt}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder="Ask Something.."
          ></textarea>
          <button type="submit" onClick={handleSubmit}><img src="assets/send.svg" /></button>
        </form> */}

<div className="container-fluid" >
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-headertext-white" style={{background:" #343541"}}>
              <h4 className='text-white text-center my-3'>Smart Assist</h4>
            </div>
            <div className="card-body" id="chat_container" style={{background:"#343541", overflowY: "scroll", height: "300px"}}>
              {/* Chat messages go here */}
            </div>
            <div className="card-footer fixed-bottom" style={{background:"#343541"}}>
              <div className="form-group">
                <textarea
                  className="form-control chat-input mt-3"
                  rows="1"
                  cols="2"
                  placeholder="Ask Something"
                  value={input_txt}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  style={{background:"#40414F",color:"#fff",height:"50px"}}
                ></textarea>
                <button
                  type="button"
                  className="btn btn-primary send-btn my-4"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </>
    )
}

export default SmartAssist
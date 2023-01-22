import React from 'react'
import "./Home.css"
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import imageginie from "../../assets/images/app-img/imageginie.png"
import assist from "../../assets/images/app-img/assist.png"


const Home = () => {

  const appData = [
    {
      id:1,
      heading:"Image Ginie",
      desc : "Here is the quick description of the card to check it's styling.",
      img:imageginie,
      link: "https://imageginie.netlify.app/"
    },
    {
      id:2,
      heading:"Smart Assist",
      desc : "Here is the quick description of the card to check it's styling.",
      img:assist,
      link:"https://smart-assist-1.netlify.app/"
    }
  ]
  return (

      <section id='app_list' className='my-5'>
        <div className='row d-flex justify-content-center container'>
          {
            appData?.map((app,index)=>(
              <div className='app card-group col-lg-3 col-md-4 col-12 text-center mx-4 my-4'>
          <div className="card mx-auto" style={{width:"18rem"}}>

            <img src={app?.img} className="card-img-top img-fluid  border-bottom border-dark" alt="app image" style={{height:"300px",width:"300px"}}
  />

  <div className="card-body">
    <h5 className="card-title">Smart Assist</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <div className='card-footer d-flex justify-content-between'>
   <a href={app.link} className="btn btn-dark btn-sm me-2" target="_blank">
    <BsFillArrowUpRightCircleFill className='me-1'/>Visit</a>
    <a href="https://nimble-quokka-88683e.netlify.app/" className="btn btn-primary btn-sm" target="_blank"><IoLogoGooglePlaystore className="me-1"/>Get App</a>
   </div>
  </div>
</div>
          </div>
            ))
          }
        </div>
      </section>

  )
}

export default Home
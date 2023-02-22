import React from 'react'
import "./Home.css"
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import imageginie from "../../assets/images/app-img/imageginie.png"
import assist from "../../assets/images/app-img/assist.png"
import summarizer from "../../assets/images/app-img/summarizer.png"
import "../../components/GlobalCss.css"
import { Header } from '../../components';


const Home = () => {
  
  const appData = [
    {
      id:1,
      heading:"Image Ginie",
      desc : "Transform Your Ideas into Stunning Images with Ease.",
      img:imageginie,
      link: "app/imageGinie"
      // link: "https://imageginie.netlify.app/"
    },
    {
      id:2,
      heading:"Smart Assist",
      desc : "Get Instant and Accurate Answers powered by GPT-3.",
      img:assist,
      link:"app/smartAssist",
      // link:"https://smart-assist-1.netlify.app/",
      appLink:"https://play.google.com/store/apps/details?id=io.ionic.smartassist"
    },
    {
      id:3,
      heading:"Summary Genius",
      desc : "Get a quick summary of long articles.",
      img:summarizer,
      // link:"https://summary-genius.netlify.app/"
      link:"app/summaryGenius"
    }
  ]
  return (
    <>

      <section id='app_list' className='my-5'>
             <div className='row d-flex justify-content-center container'>
          {
            appData?.map((app,index)=>(
              <div className='app card-group col-lg-3 col-md-4 col-12 text-center mx-4 my-4'>
          <div key={appData?.id} className="card mx-auto" style={{width:"18rem"}}>

            <img src={app?.img} className="card-img-top img-fluid  border-bottom border-dark" alt="app image" style={{height:"300px",width:"300px"}}
  />

{/* apps list */}
  <div className="card-body">
    <h5 className="card-title mb-3">{app?.heading}</h5>
    <p className="card-text">{app?.desc}</p>
   <div className='card-footer d-flex justify-content-between'>
   <a href={app.link} className="btn btn-sm me-2" >
    <BsFillArrowUpRightCircleFill className='me-1'/>Use</a>
    {app?.appLink &&(
       <a href={app?.appLink} className="btn btn-sm" target="_blank"><IoLogoGooglePlaystore className="me-1"/>Get App</a>

    )
    }
   </div>
  </div>
</div>
          </div>
            ))
          }
        </div>
      </section>
</>
  )
}

export default Home
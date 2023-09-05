import React from 'react'
import "./Home.css"
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import imageginie from "../../assets/images/app-img/imageginie.png"
import assist from "../../assets/images/app-img/assist.png"
import summarizer from "../../assets/images/app-img/summarizer.png"
import "../../components/GlobalCss.css"
import { Header } from '../../components';
import { Link } from 'react-router-dom';


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
    },
    {
      id:4,
      heading:"Write Genius",
      desc : "High quality content made easy with our ai content generator.",
      img:summarizer,
      // link:"https://summary-genius.netlify.app/"
      link:"app/writeGenius"
    },
  
  ]
  return (
    <>

<section id='app_list' className='my-5'>
  <div className='container'>
    <div className='row justify-content-center'>
      {appData?.map((app, index) => (
        <div className='col-lg-3 col-md-4 col-12 text-center my-4' key={index}>
          <div className="card mx-auto" style={{ width: "18rem" }}>
            <img src={app?.img} className="card-img-top img-fluid border-bottom border-dark" alt="app image" style={{ height: "300px", width: "300px" }} />

            <div className="card-body">
              <h5 className="card-title mb-3">{app?.heading}</h5>
              <p className="card-text">{app?.desc}</p>
              <div className='card-footer d-flex justify-content-between'>
                <Link href={app.link} className="btn btn-sm me-2">
                  <BsFillArrowUpRightCircleFill className='me-1' />Use
                </Link>
                {app?.appLink && (
                  <a href={app?.appLink} className="btn btn-sm" target="_blank">
                    <IoLogoGooglePlaystore className="me-1" />Get App
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


</>
  )
}

export default Home
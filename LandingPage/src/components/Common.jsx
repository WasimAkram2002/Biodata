import React from 'react'
import {NavLink} from 'react-router-dom'
function Common(props) {
  return (
    <>
      <section id="header" className='d-flex'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className='brand-name'> Wasim Akram</strong></h1>
                  <h2 className='my-3'>I Am a Web Developer.I Like Coding and Travelling.</h2>
                  <div className="mt-3">
                    {/* <NavLink to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </NavLink> */}
                    <a href={props.visit} className="btn-get-started" target="_blank" rel="noopener noreferrer">
                      {props.btnname}
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} alt="" className="img-fluid animated" style={{ height: "277px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common
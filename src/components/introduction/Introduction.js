import React from 'react'
import './introduction.scss'

const Introduction = () => {
  return (
    <div className="introContainer">
      <div className="intro">
        <div data-scroll data-scroll-speed="0" className="subTitle">
          <span>Hi, I'm Ping Song,</span>
        </div>
        <div className="title" data-scroll data-scroll-speed="0">
          <h1>Who loves </h1>
        </div>
        <div className="title" data-scroll data-scroll-speed="0">
          <div className="designContainer">
            <h1 className="design reverse">Design,</h1>
            <div className="bubble uxui">
              <span>UX/UI</span>
            </div>
          </div>
          <div className="programmingContainer">
            <h1 className="program reverse">Programming,</h1>
            <div className="bubble frontend">
              <span>Front</span> <span>-end</span>
            </div>
            <div className="description">
              <span>
                I solve complex problems through Empathy, Curiosity and Passion.
              </span>
            </div>
            <h1 className="croissant reverse">
              and Croissants <span className="emoji">🥐</span> !
            </h1>
          </div>
          {/* <div className="croissantContainer"></div> */}
        </div>
        {/* <div data-scroll data-scroll-speed="-5" className="footer">
          
        </div> */}
      </div>
    </div>
  )
}
export default Introduction

import React from 'react'
import './about.scss'

const About = () => {
  return (
    <div className="aboutContainer">
      <div data-scroll data-scroll-speed={-7}>
        <div className="about">
          <span className="subTitle">A bit more about me,</span>
          <span className="title">
            I’m a UX UI designer / Front-end developer in Melbourne, Australia.
          </span>
          <span className="description">
            I collaborate with cross-functional teams throughout the
            user-centered design process to optimize product life-cycle and
            elevate user experience. I am passionate about discovering insights,
            creativity, solving problems, interaction and motion design.{' '}
          </span>
          <span className="description">
            If you are interested in my experience, you can pay a visit to my
            Linkedin profile. Thank you for stopping by!
          </span>
        </div>
      </div>
    </div>
  )
}
export default About

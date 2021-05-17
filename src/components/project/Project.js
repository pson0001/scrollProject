import React, { useContext } from 'react'
import './project.scss'
import { CurrentTheme } from './../ThemeWrapper'
import { Link } from 'react-router-dom'

// import { ArrowRight } from '../../assets/Icon.js'
import peerView from '../../assets/peerview.png'

const Project = () => {
  const { currentTheme, setCurrentTheme } = useContext(CurrentTheme)
  return (
    <div
      className={
        currentTheme === 'uxui'
          ? 'uxui projects'
          : currentTheme === 'frontend'
          ? 'frontend projects'
          : 'projects'
      }
    >
      <div className="projectContainer">
        <h1>Selected Projects</h1>
        <div className="number">
          <span>01</span>
        </div>
        <div className="project">
          <Link to={`/project/peerview`}>
            <div className="projecImg">
              <img src={peerView} alt="peerView" className="image" />
            </div>
          </Link>
          <div className="projectDescription">
            <p>PeerView</p>
            <span className="detail">
              This product is designed and developed for academic staff to
              request reviews from their peers.It digitizes the experience of
              the review process.
            </span>
          </div>
        </div>
      </div>
      <div className="projectContainer">
        <div className="number">
          <span>02</span>
        </div>
        <div className="project">
          <div className="projecImg">
            <img src={peerView} alt="peerView" className="image" />
          </div>
          <div className="projectDescription">
            <p>PeerView</p>
            <span className="detail">
              This product is designed and developed for academic staff to
              request reviews from their peers.It digitizes the experience of
              the review process.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project

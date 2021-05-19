import React, { useContext } from 'react'
import './project.scss'
import { CurrentTheme } from './../ThemeWrapper'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// import { ArrowRight } from '../../assets/Icon.js'
import peerView from '../../assets/peerview.png'
import ProgressiveImage from 'react-progressive-image'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

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
              <div className="projecBox">
                <ProgressiveImage src={peerView}>
                  {(src) => (
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={transition}
                      src={src}
                      alt="peerView"
                      // className="image"
                    />
                  )}
                </ProgressiveImage>
              </div>
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
    </div>
  )
}
export default Project

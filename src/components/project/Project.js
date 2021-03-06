import React, { useContext } from 'react'
import './project.scss'
import { CurrentTheme } from './../ThemeWrapper'
import { ImgPosition } from './../ImgWrapper'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// import { ArrowRight } from '../../assets/Icon.js'
import peerView from '../../assets/peerview.png'
import ProgressiveImage from 'react-progressive-image'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const Project = () => {
  const { currentTheme } = useContext(CurrentTheme)
  const { setPosition } = useContext(ImgPosition)
  return (
    <div
      className={
        currentTheme === 'uxui'
          ? 'uxui projects grain'
          : currentTheme === 'frontend'
          ? 'frontend projects grain'
          : 'projects grain'
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
                      transition={transition}
                      src={src}
                      alt="peerView"
                      onClick={(e) => {
                        setPosition({
                          x: e.target.getBoundingClientRect().x,
                          y: e.target.getBoundingClientRect().y,
                        })
                      }}
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

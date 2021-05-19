import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import peerView from '../assets/peerview.png'
import './singleProject.scss'
const Peerview = ({ imageDetails }) => {
  console.log(imageDetails)
  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      {/* <div className="bottom">
      <motion.div
        initial={{ width: imageDetails.width, height: imageDetails.height }}
        className="signleProjectImg"
      >
        <img
          src={peerView}
          alt="peerView"
          // className="image"
        />
      </motion.div>
    </div> */}

      <div className="singleProjecImg">
        <motion.div
          initial={{
            width: imageDetails.width,
            height: imageDetails.height,
          }}
          className="singleProjecBox"
        >
          <motion.img
            src={peerView}
            alt="peerView"
            // className="image"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Peerview

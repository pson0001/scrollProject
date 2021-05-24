import React, { useContext, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import peerView from '../assets/peerview.png'
import './singleProject.scss'
import { ImgPosition } from './../components/ImgWrapper'
import locomotiveScroll from 'locomotive-scroll'

const transition = { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }

const Peerview = ({ imageDetails }) => {
  const { position } = useContext(ImgPosition)
  const scrollRef = useRef(null)
  useEffect(() => {
    if (scrollRef) {
      new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        direction: 'vertical',
      })
    }
  }, [])

  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <div className="singleProjecContainer grain" ref={scrollRef}>
        <motion.div className="singleProjecBox">
          <motion.img
            initial={{
              x: position.x + 'px',
              y: position.y + 'px',
              width: imageDetails.width,
              height: imageDetails.height,
            }}
            animate={{
              x: '10vw',
              y: '50vh',
              width: '80vw',
              height: '50vw',
            }}
            transition={transition}
            src={peerView}
            alt="peerView"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Peerview

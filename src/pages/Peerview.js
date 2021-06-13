import React, { useContext, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import peerView from '../assets/peerview.png'
import myprocess from '../assets/peerview/myprocess.png'
import dls from '../assets/peerview/dls.png'
import ui from '../assets/peerview/ui.png'

import sitemap from '../assets/peerview/sitemap.png'
import userflow from '../assets/peerview/userflow.png'
import wireframe from '../assets/peerview/wireframe.png'
import './singleProject.scss'
import { ImgPosition } from './../components/ImgWrapper'
import locomotiveScroll from 'locomotive-scroll'
import {
  Print,
  Timer,
  People,
  Computer,
  Path,
  Sign,
  Layout,
  Dots,
  Page,
  Color,
} from '../assets/Icon.js'

const transition = { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }

const Peerview = ({ imageDetails }) => {
  const { position } = useContext(ImgPosition)
  const projectScrollRef = useRef(null)
  useEffect(() => {
    if (projectScrollRef) {
      new locomotiveScroll({
        el: projectScrollRef.current,
        smooth: true,
        direction: 'vertical',
      })
    }
  }, [])

  const projectNameText = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,

      transition: {
        delayChildren: 0.2,
        // staggerChildren: 0.04,
        // staggerDirection: -1,
      },
    },
  }
  const letter = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,

      transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
    },
  }

  return (
    <div ref={projectScrollRef}>
      <motion.div initial="initial" animate="animate" exit="exit">
        <div className="singleProjecContainer grain">
          <motion.div className="projectIntroduction">
            <motion.div className="projectName">
              <motion.div className="name" variants={projectNameText}>
                <motion.span className="up" variants={letter}>
                  PROJECT NAME
                </motion.span>
                <motion.span className="down title" variants={letter}>
                  PeerView
                </motion.span>
              </motion.div>
              <motion.div className="name" variants={projectNameText}>
                <motion.span className="up" variants={letter}>
                  RESPONSIBILITY
                </motion.span>
                <motion.span className="down secondTitle" variants={letter}>
                  UX/UI Design, User Testing
                </motion.span>
              </motion.div>
            </motion.div>
            <motion.div
              className="projectDescription"
              variants={projectNameText}
            >
              <motion.span className="paragraph" variants={letter}>
                Monash University is one of Australia's leading universities and
                ranks among the world's top 100. We help change lives through
                research and education.
              </motion.span>
              <motion.span className="paragraph" variants={letter}>
                This product designed and developed for academic staff to
                request review from their peers. It digitalise the experience
                and process.
              </motion.span>
              <motion.span className="paragraph" variants={letter}>
                I am happy to say that my design direction was approved for
                implementation. It was very exciting to see how the product
                evolved and improved with each update during a short time. The
                final application has been implemented and delivered.
              </motion.span>
            </motion.div>
          </motion.div>
          <motion.div className="singleProjecBox">
            <motion.img
              initial={{
                x: position.x + 'px',
                y: position.y + 'px',
                width: imageDetails.width + 'px',
                height: imageDetails.height + 'px',
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
      </motion.div>{' '}
      <div className="projectContent grain">
        {/* Background */}
        <div className="detailedSection">
          <div className="sectionTitleContainer">
            <span className="sectionTitle">Background</span>

            <span className="sectionDescription">
              Peer review of teaching is one of a number of methods or
              techniques that can be used to gather evidence about one's
              teaching. It is recognised as an important contributor to the
              ongoing evaluation and enhancement of learning and teaching, as
              well as a process to recognise excellence.
            </span>
          </div>
          <div className="sectionContentContainer">
            <div className="sectionContentItem">
              <div className="icon">
                <Print></Print>
              </div>
              <span className="itemTitle">
                Paper based process, hard to mantain and retrieve
              </span>
              <span>
                The review process is entirely paper-based. The paper-based
                process made the information harder to process, maintain and
                retrieve when academics needed.
              </span>
            </div>
            <div className="sectionContentItem">
              <div className="icon">
                <Timer></Timer>
              </div>
              <span className="itemTitle">Long turn around time</span>
              <span>
                There are many tasks involved in the process(eg, request review,
                book a review session, gather the feedback, evaluate the
                feedback). Without the help of a digital platform, one review
                process takes longer than it should be.
              </span>
            </div>
          </div>
        </div>
        {/* My Process */}
        <div className="detailedSection">
          <div className="sectionTitleContainer">
            <span className="sectionTitle">My Process</span>

            <div>
              <img src={myprocess}></img>
            </div>
          </div>
        </div>
        {/* Research */}
        <div className="detailedSection">
          <div className="sectionTitleContainer">
            <span className="sectionTitle">Research</span>
          </div>
          <div className="sectionContentContainer">
            <div className="sectionContentItem">
              <div className="icon">
                <People></People>
              </div>
              <span className="itemTitle">User and stakeholder Interviews</span>
              <span>
                I conducted many interviews with end-users and stakeholder to
                understand the current review process, pain points,
                opportunities and their expectations about the app.
              </span>
            </div>
            <div className="sectionContentItem">
              <div className="icon">
                <Computer></Computer>
              </div>
              <span className="itemTitle">Competitor Research</span>
              <span>
                By understanding that the users will not compare the new review
                app to other universities’ apps but the apps that they commonly
                use (eg, Netflix, Facebook). I simply treat this university
                exclusive app as any modern review app that can compete with any
                of the review apps that are accessible to the public.
              </span>
            </div>
          </div>
        </div>
        {/* Analyse */}
        <div className="detailedSection">
          <div className="sectionTitleContainer">
            <span className="sectionTitle">Analyse</span>
          </div>
          <div className="sectionContentContainer">
            <div className="sectionContentItem">
              <div className="icon">
                <Path></Path>
              </div>
              <span className="itemTitle">User Journey Mapping</span>
              <span>
                Through interviews, I mapped out the current user journey that
                identified gaps and painpoints between each steps of the
                process.
              </span>
            </div>
            <div className="sectionContentItem">
              <div className="icon">
                <Sign></Sign>
              </div>
              <span className="itemTitle">Problem Statement</span>
              <span>
                I created a few key problem statement that guide me throughout
                the creation journey.
              </span>
            </div>
          </div>
        </div>
        {/* Prototype */}
        <div className="detailedSection">
          <div className="sectionTitleContainer">
            <span className="sectionTitle">Prototype</span>
          </div>
          <div className="sectionContentContainer">
            <div className="sectionContentItem">
              <div className="icon">
                <Layout></Layout>
              </div>
              <span className="itemTitle">Project Sitemap</span>
              <span>
                Working on a sitemap allowed me to understand the goal(s) of
                every page
              </span>
              <div>
                <img src={sitemap}></img>
              </div>
            </div>
            <div className="sectionContentItem">
              <div className="icon">
                <Dots></Dots>
              </div>
              <span className="itemTitle">User Flow</span>
              <span>
                Building user flow helps the whole process of creating new
                features
              </span>
              <div>
                <img src={userflow}></img>
              </div>
            </div>
          </div>
          <div className="sectionContentContainer">
            <div className="sectionContentItem sectionContentItemFull">
              <div className="icon">
                <Page></Page>
              </div>
              <span className="itemTitle">Wireframe</span>
              <span>
                The review process is entirely paper-based. It is hard to
                process the review and keep historical data.
              </span>
              <div>
                <img src={wireframe}></img>
              </div>
            </div>
          </div>
          <div className="sectionContentContainer">
            <div className="sectionContentItem sectionContentItemFull">
              <div className="icon">
                <Color></Color>
              </div>
              <span className="itemTitle">UI Design</span>
              <span>
                Create user interface components that consistently throughout
                the application
              </span>
              <div>
                <img src={ui}></img>
              </div>
            </div>
          </div>
        </div>
        {/* DLS */}
        <div className="detailedSection">
          <div className="sectionTitleContainer">
            <span className="sectionTitle">Design System</span>
            <span className="sectionDescription">
              With the unique feature of this app, I proposed a design style
              that may not be seen very often in a university project. I am
              happy to say that my design direction was approved for
              implementation.
            </span>
            <div>
              <img src={dls}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Peerview

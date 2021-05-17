import React, { useRef, useEffect, useContext } from 'react'
import locomotiveScroll from 'locomotive-scroll'
import Project from '../components/project/Project'
import Introduction from '../components/introduction/Introduction'
import About from '../components/about/About'

const Home = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef) {
      new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        direction: 'horizontal',
      })
    }
  })
  return (
    <div className="scroll" ref={scrollRef} data-scroll-container>
      <div className="contentContainer">
        <Introduction />
        <Project />
        <About />
      </div>
    </div>
  )
}

export default Home

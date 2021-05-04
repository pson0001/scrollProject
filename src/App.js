import React, { useRef, useEffect } from 'react'
import locomotiveScroll from 'locomotive-scroll'
import Project from './components/project/Project'
import Introduction from './components/introduction/Introduction'
import gsap from 'gsap'
import Navigation from './components/navigation/Navigation'
import './App.scss'
import './styles/base.scss'
import About from './components/about/About'

function App() {
  gsap.to('body', 0, { css: { visibility: 'visible' } })

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
    <div className="App">
      <Navigation />
      <div className="scroll" ref={scrollRef} data-scroll-container>
        <div className="contentContainer">
          <Introduction />
          <Project />
          <About />
        </div>
      </div>
    </div>
  )
}

export default App

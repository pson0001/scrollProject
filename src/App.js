import React, { useRef, useEffect, useContext } from 'react'
import locomotiveScroll from 'locomotive-scroll'
import Project from './components/project/Project'
import Introduction from './components/introduction/Introduction'
import gsap from 'gsap'
import Navigation from './components/navigation/Navigation'
import './App.scss'
import './styles/base.scss'
import About from './components/about/About'
import ThemeWrapper from './components/ThemeWrapper'
import { CurrentTheme } from './components/ThemeWrapper'

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
    <div>
      <ThemeWrapper>
        <Navigation />
        <div className="scroll" ref={scrollRef} data-scroll-container>
          <div className="contentContainer">
            <Introduction />
            <Project />
            <About />
          </div>
        </div>
      </ThemeWrapper>
    </div>
  )
}

export default App

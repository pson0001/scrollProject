import React, { useContext } from 'react'
// import locomotiveScroll from 'locomotive-scroll'

import gsap from 'gsap'
import Navigation from './components/navigation/Navigation'
import './App.scss'
import './styles/base.scss'
import ThemeWrapper from './components/ThemeWrapper'
import ImgWrapper from './components/ImgWrapper'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { CurrentTheme } from './components/ThemeWrapper'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Peerview from './pages/Peerview'

function App() {
  gsap.to('body', 0, { css: { visibility: 'visible' } })
  const imageDetails = {
    width: 600,
    height: 350,
  }
  const ImgContext = React.createContext()
  return (
    <ImgWrapper>
      <ThemeWrapper>
        <Navigation />
        <Router>
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path="/"
                    render={() => <Home imageDetails={imageDetails} />}
                  />
                  <Route
                    exact
                    path="/project/:id"
                    render={() => <Peerview imageDetails={imageDetails} />}
                  />
                </Switch>
              </AnimatePresence>
            )}
          />
        </Router>
      </ThemeWrapper>
    </ImgWrapper>
  )
}

export default App

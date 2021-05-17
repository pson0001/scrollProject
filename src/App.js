import React, { useRef, useEffect, useContext } from 'react'
import locomotiveScroll from 'locomotive-scroll'

import gsap from 'gsap'
import Navigation from './components/navigation/Navigation'
import './App.scss'
import './styles/base.scss'
import ThemeWrapper from './components/ThemeWrapper'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CurrentTheme } from './components/ThemeWrapper'
import Home from './pages/Home'
import Peerview from './pages/Peerview'

function App() {
  gsap.to('body', 0, { css: { visibility: 'visible' } })

  return (
    <div>
      <ThemeWrapper>
        <Navigation />
        <Router>
          <Route
            render={({ location }) => (
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/project/:id" render={() => <Peerview />} />
              </Switch>
            )}
          />
        </Router>
      </ThemeWrapper>
    </div>
  )
}

export default App

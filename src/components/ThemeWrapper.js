import React, { useState } from 'react'

// const themes = {
//   default: {
//     foreground: '#000000',
//     background: '#eeeeee',
//     active: true,
//   },
//   uxui: {
//     foreground: '#000000',
//     background: '#eeeeee',
//     active: false,
//   },
//   frontend: {
//     foreground: '#ffffff',
//     background: '#222222',
//     active: false,
//   },
// }

export const CurrentTheme = React.createContext()

const ThemeWrapper = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default')

  return (
    <CurrentTheme.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </CurrentTheme.Provider>
  )
}
export default ThemeWrapper

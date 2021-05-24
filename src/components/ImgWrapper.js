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

export const ImgPosition = React.createContext('')

const ImgWrapper = ({ children }) => {
  const [position, setPosition] = useState('')

  return (
    <ImgPosition.Provider value={{ position, setPosition }}>
      {children}
    </ImgPosition.Provider>
  )
}
export default ImgWrapper

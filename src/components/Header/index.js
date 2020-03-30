import React, { useContext } from 'react'
import { ThemeContext } from '../../context'

function Header () {
  const theme = useContext(ThemeContext)
  return (
    <header style={{ background: theme.darkMode ? 'black' : 'white' }}>
      <h1 style={{ color: theme.darkMode ? 'white' : 'black' }}>
        Angry Task Master
      </h1>
    </header>
  )
}

export default Header

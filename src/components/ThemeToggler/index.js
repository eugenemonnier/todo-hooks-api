import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'

import { ThemeContext } from '../../context/'

function ThemeToggler () {
  const theme = useContext(ThemeContext)
  return (
    <Button onClick={theme.toggleTheme}>
      Switch to {theme.darkMode ? 'LIGHT' : 'DARK'} mode
    </Button>
  )
}

export default ThemeToggler

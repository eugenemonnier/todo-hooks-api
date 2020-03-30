import React, { createContext } from 'react'

export const ThemeContext = createContext(null)

class Theme extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      darkMode: false,
      toggleTheme: this.toggleTheme
    }
  }

  toggleTheme = () => {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  render () {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default Theme

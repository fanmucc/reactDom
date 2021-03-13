import React, { useState, useContext } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  }, 
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

// 创建 context
const ThemeContext = React.createContext({
  theme: themes.light,
  toggle: () => {}
})


const ToolBar = () => {
  return <ThemeBtn />
}

const ThemeBtn = () => {
  const context = useContext(ThemeContext)
  return <button style={{color: context.theme.foreground, background: context.theme.background}}
    onClick={() => {context.toggle()}}>Click Me!</button>
}

export default () => {
  const [theme, setTheme] = useState(themes.light)
  return <ThemeContext.Provider value={{
    theme,
    toggle: () => {
      // setTheme(theme => {
        setTheme(theme === themes.light ? themes.dark : themes.light)
      // })
    }
  }}>
      <ToolBar />
    </ThemeContext.Provider>
}
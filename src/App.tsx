import { ThemeProvider } from 'styled-components'
import Router from './containers/Router/router'
import theme from './styles/theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  )
}

export default App

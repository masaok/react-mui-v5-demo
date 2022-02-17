import './App.css'

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import HelloWorld from './pages/HelloWorld'

const theme = createTheme({})

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MUI v5 Demo</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="//*" element={<HelloWorld />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App

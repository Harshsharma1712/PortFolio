import React from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import About from './components/About'
import Projects from './components/Projects'
import Connect from './components/Connect'

function App() {

  return (
   <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <About />
    <Projects />
    <Connect />

    </ThemeProvider>
   
   </>
  )
}

export default App

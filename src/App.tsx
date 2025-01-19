import React from 'react'
// import { ThemeProvider } from "@/components/theme-provider"
import { ThemeProvider } from './context/ThemeContext';
import DarkThemeToggle from './components/DarkThemeToggle';
import About from './components/About'
import Projects from './components/Projects'
import Connect from './components/Connect'

function App() {

  return (
   <>
    <ThemeProvider>

      <div className='App'>
        <header className='p-4'>
          <DarkThemeToggle />
        </header>
      </div>

    <About />
    <Projects />
    <Connect />

    </ThemeProvider>
   
   </>
  )
}

export default App

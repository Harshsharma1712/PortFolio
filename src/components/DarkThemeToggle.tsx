import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon } from 'lucide-react'
import { SunMoon } from 'lucide-react';

const DarkThemeToggle: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('DarkThemeToggle must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = context;

  return (
    <>
      <div className='fixed'>
        <Button onClick={toggleTheme} variant="outline">
          {theme === 'dark' ? <SunMoon /> : <Moon />}
        </Button>
      </div>
     
    </>

   
  );
};

export default DarkThemeToggle;

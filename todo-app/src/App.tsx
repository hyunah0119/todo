import AppLayout from './components/layout/AppLayout'
import Intro from './pages/Intro'
import Home from './pages/Home'
import './App.css'
import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleSetDarkMode = () => {
    console.log(isDark)
    !isDark ? setIsDark(true) : setIsDark(false)
  }

  return (
    <div className={`${!isDark ? '' : 'dark'} font-pretendard font-light`}>
      <AppLayout
        onThemeToggle={handleSetDarkMode} 
        isDark={isDark}
      >
        {/* <Intro /> */}
        <Home />
      </AppLayout>
    </div>
  )
}

export default App

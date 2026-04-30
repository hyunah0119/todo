import AppLayout from './components/layout/AppLayout'
import Intro from './pages/Intro'
import Home from './pages/Home'
import './App.css'
import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleSetDarkMode = () => {
    !isDark ? setIsDark(true) : setIsDark(false)
  }

  const [inputValue, setInputValue] = useState('');
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || '';
  });

  const handleGetUserName = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleStart = () => {
    localStorage.setItem('userName', inputValue);
    setUserName(inputValue)
  }

  return (
    <div className={`${!isDark ? '' : 'dark'} font-pretendard font-light`}>
      <AppLayout
        onThemeToggle={handleSetDarkMode} 
        isDark={isDark}
        userName={userName}
      >
        {userName ? 
          <Home /> : 
          <Intro
            value={inputValue}
            onChange={handleGetUserName}
            onClick={handleStart}
          />
        }

        
      </AppLayout>
    </div>
  )
}

export default App

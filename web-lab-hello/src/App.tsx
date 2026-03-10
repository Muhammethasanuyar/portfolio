import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import UIKit from './pages/UIKit'

function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={() => document.documentElement.classList.toggle('dark')}
      className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Tema degistir"
    >
      <span className="dark:hidden" aria-hidden="true">
        &#9790;
      </span>
      <span className="hidden dark:inline" aria-hidden="true">
        &#9728;
      </span>
    </button>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ui-kit" element={<UIKit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

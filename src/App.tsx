import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Background from './components/Background'

function App() {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Background />
          <Navbar onLanguageChange={changeLanguage} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  )
}

export default App 
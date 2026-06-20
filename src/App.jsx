import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LandingPage from './components/landing/LandingPage'
import ResumeBuilder from './components/builder/ResumeBuilder'
import ResumeAnalyzer from './components/analyzer/ResumeAnalyzer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="builder" element={<ResumeBuilder />} />
          <Route path="analyzer" element={<ResumeAnalyzer />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

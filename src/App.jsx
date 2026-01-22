import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import Home from './pages/Home'
import BuildBox from './pages/BuildBox'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="build" element={<BuildBox />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

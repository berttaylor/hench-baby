import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/layout'
import Home from './pages/Home'
import MealPlans from './pages/MealPlans'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="plans" element={<MealPlans />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="about" element={<About />} />
        {/* Redirect old build route for backwards compatibility */}
        <Route path="build" element={<Navigate to="/plans" replace />} />
      </Route>
    </Routes>
  )
}

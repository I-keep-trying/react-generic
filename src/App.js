import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Test from './components/Test'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>{`There's nothing here!`}</p>
            </main>
          }
        />
      </Routes>
    </Router>
  )
}

export default App

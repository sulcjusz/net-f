import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import BaseLayout from './components/layouts/BaseLayout'

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BaseLayout>
    </Router>
  )
}

export default App

import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BaseLayout from './components/layouts/BaseLayout'

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route
            path="/"
            element={<div className="min-h-[1000px] bg-grey-600 "></div>}
          />
        </Routes>
      </BaseLayout>
    </Router>
  )
}

export default App

import Landing from './components/Landing'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (

    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App

import Header from './Componenets/Header'
import Sidebar from './Componenets/Sidebar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
    </Router>
  )
}

export default App

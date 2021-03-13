import HomeScreen from './Screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
    </Router>
  )
}

export default App

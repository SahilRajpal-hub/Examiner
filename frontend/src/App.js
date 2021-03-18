import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/login' component={LoginScreen} exact />
      <Route path='/register' component={RegisterScreen} exact />
    </Router>
  )
}

export default App

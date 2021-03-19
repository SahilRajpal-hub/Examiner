import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import LandingScreen from './Screens/LandingScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route path='/' component={LandingScreen} exact />
      <Route path='/home' component={HomeScreen} exact />
      <Route path='/login' component={LoginScreen} exact />
      <Route path='/register' component={RegisterScreen} exact />
    </Router>
  )
}

export default App

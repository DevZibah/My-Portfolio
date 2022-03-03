import { Switch, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'
import './style/All.css'

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/Projects' component={Projects} />
        <Route exact path='/About' component={About} />
      </Switch>
    </div>
  )
}

export default App

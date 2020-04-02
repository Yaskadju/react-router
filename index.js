import React, {Component} from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import { render } from 'react-dom';
import About from './components/About'
import Contact from './components/Contact'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
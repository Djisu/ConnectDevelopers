import React from 'react'
// import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Alert from './components/layout/Alert'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing}></Route>
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  </Provider>
)

export default App

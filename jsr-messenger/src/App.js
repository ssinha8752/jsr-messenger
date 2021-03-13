import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Router>
    </div>
  );
}

export default App;

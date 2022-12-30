import React from 'react';
import { BrowserRouter as Router, Route , } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    
    <div>
      <Login />
    </div>
    // <Router>
    //   <Route>
      
    //     <Route exact path="/login" component={Login} />
    //     <Route exact path="/register" component={Register} />
    //   </Route>
    // </Router>
  );
}

export default App;

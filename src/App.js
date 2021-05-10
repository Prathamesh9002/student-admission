import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateNewStudentAccount from './components/newStudent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Prathmesh</h2>
        <Route path="/newStudent" exact component={CreateNewStudentAccount}/>
      </div>
      </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import './viewComponent/table'
import Table from './viewComponent/table';
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch , useNavigate, Routes} from 'react-router-dom';

import Employee from './viewComponent/employee';

function App() {
  return (
    
    // <Router>
    //   <Switch>
    //   <Route path="/" component={Table} />
    //    <Route path="employee" component={Employee} />
    //   </Switch>
    // </Router>
    <Router>
      <Routes>
        <Route path="/" element={<Table />}> </Route>
        <Route path="employee" element={<Employee />}></Route> 
      </Routes>
    </Router>

    // <div>Test</div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

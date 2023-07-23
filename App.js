// import React, { components } from 'react';
// import logo from './logo.svg';
// import Greet from './components/greets.js'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link 
 } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <div className="container my-2">
            <Navbar title="PageBlend" mode={mode} toggleMode={toggleMode} key={new Date()}/>
         {/* <Navbar />  */}
    
        <Alert alert={alert} />
        <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/">
              <TextForm heading='Convert text' showAlert={showAlert} mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;



// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import About from './components/About';
// import React, { useState } from 'react';
// import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type)=>{
//       setAlert({
//         msg: message,
//         type: type
//       })
//       setTimeout(() => {
//           setAlert(null);
//       }, 1500);
//   }

//   const toggleMode = ()=>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       showAlert("Dark mode has been enabled", "success");
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode has been enabled", "success");
//     }
//   }
//   return (
//     <>
//     <Router>
//     <Navbar title="PB" mode={mode} toggleMode={toggleMode} key={new Date()} />
//     <Alert alert={alert}/>
//     <div className="container my-3">
//     <Switch>
//     {/* /users --> Component 1
//         /users/home --> Component 2 */}
//           <Route exact path="/about">
//             <About showAlert={showAlert} mode={mode} />
//           </Route>
//           <Route exact path="/">
//             <TextForm showAlert={showAlert} heading="Text formation" mode={mode}/>
//           </Route>
//     </Switch>
//     </div>
//     </Router>
//     </> 
//   );
// }

// export default App;
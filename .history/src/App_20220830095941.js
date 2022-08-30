import logo from './logo.svg';
import './App.css';
import Form from './form'
import React, {useState} from 'react'

function App() {
  const [values, setValues]= useState({name:"", email:"", role:""})
  const[members, setMembers]= useState([]);

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({name: '', email: '', role: ''});
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Form values={values} change={onChange} submit={onSubmit} /> 
          console.log(members)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

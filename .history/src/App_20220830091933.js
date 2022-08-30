import logo from './logo.svg';
import './App.css';
import Form from './form'
import React, {useState} from 'react'

function App() {
  const {formValues, setFormVaules}= useState({name:"", email:"", role:""})
  const{members, setMembers}= useState([])

  const onSubmit = () => {
    setMembers([values, ...members]);
  }

  const onChange = (name, value) => {
    setFormVaules({...values, [name]: value})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Form values={formValues} onChange={onChange} submit={onSubmit} /> 
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

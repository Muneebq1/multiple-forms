import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [toggle, setToggle] = useState(true)
  const [toggle2, setToggle2] = useState(true)
  const [toggle3, setToggle3] = useState(true)
  const [toggle4, setToggle4] = useState(true)
  const [name, setName] = useState({ name: "ali" })
  const [email, setEmail] = useState({ email: "abc@gmail.com" })
  const [pass, setPass] = useState({ pass: "123" })


  const clickHandler = (e) => {
    setToggle(!toggle)
    setToggle2(!toggle2)
    e.preventDefault()
  }

  const Back = () => {
    setToggle(!toggle)
    setToggle2(!toggle2)
  }
  const Back2 = () => {
    setToggle3(!toggle3)
    setToggle2(!toggle2)
  }
  const clickHandler2 = (e) => {
    setToggle2(!toggle2)
    setToggle3(!toggle3)
    e.preventDefault()
  }
  const submit = (e) => {
    setToggle3(!toggle3)
    setToggle4(!toggle4)
    e.preventDefault()

  }

  return (

    <div className="App">
      <form onSubmit={clickHandler}>
        <div className={`${(toggle) ? "container" : "hidden"}`}>
          <span>Your name</span> <br />
          <input className='input' type="text" required onChange={(e) => { setName({ name: e.target.value }) }} /><br />
          <button type='submit'>Next</button>
        </div>
      </form>

      <form onSubmit={clickHandler2}>
        <div className={`${(toggle2) ? "hidden" : "container"}`}>
          <h2 onClick={Back}>Back </h2>
          <span>Email</span> <br />
          <input className='input' type="email" required onChange={(e) => { setEmail({ email: e.target.value }) }} /><br />
          <button type='submit'>Next</button>
        </div>
      </form>

      <form onSubmit={submit}>
        <div className={`${(toggle3) ? "hidden" : "container"}`}>
          <h2 onClick={Back2}>Back</h2>
          <span>Password</span> <br />
          <input className='input' type="password" required onChange={(e) => { setPass({ pass: e.target.value }) }} /><br />
          <button type='submit'>submit</button>
        </div>
      </form>
      <div className={`${(toggle4) ? "hidden" : "container"}`}>
        <h1>Login complete</h1>
        <span>Name: </span>{name.name} <br />
        <span>Email: </span> {email.email} <br />
        <span>Password: </span> {pass.pass}
      </div>




    </div>
  )
}
export default App;

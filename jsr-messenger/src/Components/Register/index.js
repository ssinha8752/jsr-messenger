import React, { useState } from 'react'
import Layout from '../Layout'
import Card from '../Card'
import './style.css'

/**
* @author
* @function Register
**/

const Register = (props) => {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <Layout>
    <div className="registerContainer">
    <Card>
    <form>
    <h2>Sign Up</h2>
    <input name="firstname" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="First Name"/>
    <input name="lastname" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Last Name"/>
    <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
    <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
    <div><button>Login</button></div>
    </form>
    </Card>
    </div>
    </Layout>
   )

 }

export default Register
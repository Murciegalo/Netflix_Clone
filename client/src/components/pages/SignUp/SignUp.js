import React, {useState, useContext} from 'react'
import {FirebaseCntx} from '../../../context/firebase'
import {useHistory} from 'react-router-dom'
import HeaderCont from '../../header/HeaderCont'
import Form from '../../form/Form'
import FooterCont from '../../footer/FooterCont'
import * as Routes from '../../../routes/constants'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const { firebase } = useContext(FirebaseCntx)
  const {history} = useHistory()
  
  const errorDisplay = error && <Form.Error>{error}</Form.Error>
  // BASIC validations
  const isInvalid = password === '' || email === ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('test');
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      if(user){
        history.push(Routes.BROWSE)
      }
    } 
    catch (err) {
      setError(err.message)
      setEmail('')
      setPassword('')
      setTimeout(() => setError(''), 2000)
    }
  }

  return <>
    <HeaderCont>
      <Form>
        <Form.Title>Sign Up</Form.Title>
        {errorDisplay}
        <Form.Base>
          <Form.Input
            placeholder = 'Firstname'
            value = {name}
            onChange = {({target}) => setName(target.value)}
          />
          <Form.Input
            placeholder = 'Email address'
            value = {email}
            onChange = {({target}) => setEmail(target.value)}
          />
          <Form.Input
            type = 'password'
            placeholder = 'Password'
            autoComplete = 'off'
            value = {password}
            onChange = {({target}) => setPassword(target.value)}
          />
          <Form.Submit 
            disabled={isInvalid}
            onClick = {handleSubmit}
          >
            Sign In
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          Already an user? <Form.Link to='signIn'>Sign in now.</Form.Link>
        </Form.Text>
        <Form.SmallText>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span> </span> 
          <Form.LinkII to='#'>Learn More</Form.LinkII>
        </Form.SmallText>
      </Form>
    <FooterCont />
    </HeaderCont>
  </>
}
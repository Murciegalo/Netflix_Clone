import React, {useState, useContext} from 'react'
import {FirebaseCntx} from '../../../context/firebase'
import {useHistory} from 'react-router-dom'
import HeaderCont from '../../header/HeaderCont'
import Form from '../../form/Form'
import FooterCont from '../../footer/FooterCont'
import * as Routes from '../../../routes/constants'

export default function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const { firebase } = useContext(FirebaseCntx)
  const history = useHistory()
  
  const errorDisplay = error && <Form.Error>{error}</Form.Error>
  // BASIC validations
  const isInvalid = password === '' || email === ''

  const handleSubmit = e => {
    e.preventDefault()
    console.log('FIRSTNAME', firstName);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( 
      result => result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        })
        .then( () => history.push(Routes.BROWSE) )
    )
    .catch( 
      err =>{
        setError(err.message)
        setFirstName('')
        setEmail('')
        setPassword('')
        setTimeout(() => setError(''), 2000)
    })
  }

  return <>
    <HeaderCont>
      <Form>
        <Form.Title>Sign Up</Form.Title>
        {errorDisplay}
        <Form.Base>
          <Form.Input
            placeholder = 'Firstname'
            value = {firstName}
            onChange = {({target}) => setFirstName(target.value)}
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
            Sign Up
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
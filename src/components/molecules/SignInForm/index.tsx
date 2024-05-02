import type { FC } from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { onLogin } from '../../../feature/auth/authSlice';
import InputField from '../../atom/input';
import { LoginContainer } from './styles';
import Button from '../../atom/button';

const SignInForm: FC = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const dispatch = useDispatch()
  const handleLogin = async (evt) => {
    evt.preventDefault();
    try {
      dispatch(onLogin(email, password));
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <LoginContainer>
      <h5 className='title'>Login For Access</h5>
      <InputField
        type='text'
        value={email}
        name='email'
        placeholder='Your Email'
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <InputField
        type='password'
        value={password}
        name='password'
        placeholder='Your Password'
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <Button size='small' label='Sign In' onClick={handleLogin} />
      <hr className='line-separator' />
      <Button size='small' label='Join Now' />
    </LoginContainer>
  )
}

export default SignInForm;
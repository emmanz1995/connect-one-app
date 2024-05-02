import axios from 'axios';

async function onSignIn(email: string, password: string) {
  let response
  try {
    const payload = {
      email,
      password
    }
    response = await axios({
      url: `${import.meta.env.VITE_API_URL}/api/auth`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: payload,
    })
    console.log('...email2', email)
    console.log('...password2', password)
  } catch(err) {
    console.error(err)
    throw err
  }

  return response.data;
}

export const authService = {
  onSignIn
}
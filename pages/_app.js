import React from 'react';
import { GlobalStyle } from '../styles/global.style'
import Notification from '../components/Notification'
import axios from 'axios'

// check if production or local

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://batchelor-thesis-testing.vercel.app/api/'
} else{
  axios.defaults.baseURL = 'https://localhost:3000/api/'
}

// basic component of react and nextjs
function MyApp({ Component, pageProps }) {
  const [data, setData] = React.useState();
  const [notification, setNotification] = React.useState("")

  return (
    <>
      <GlobalStyle />
      <Notification notification={notification} setNotification={setNotification} />
      <Component {...pageProps} data={data} setData={setData} setNotification={setNotification} />
    </>
  )
}

export default MyApp

import React from 'react'
import { useLoginMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const DemoUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  const { search } = useLocation()
  const sp = new URLSearchParams(search) // pass search into the constructor
  // redirect = /shipping
  const redirect = sp.get('redirect') || '/'

  const handleClick = async () => {
    const email = 'admin@email.com'
    const password = '123456'
    try {
      const res = await login({ email, password }).unwrap()
      //   once we get data back
      dispatch(setCredentials({ ...res }))
      navigate(redirect)
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }
  return (
    <div className='demo-btn-container'>
      <button onClick={handleClick} type='button' className='demo-btn'>
        test drive app
      </button>
    </div>
  )
}

export default DemoUser

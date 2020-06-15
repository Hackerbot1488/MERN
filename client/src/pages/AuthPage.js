import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const {loading, error, request, clearError} = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const changeHandler = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value})
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
      setForm({
        ...form,
        email: '',
        password: ''
      })
    } catch (e) { }
  }
  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      setForm({
        ...form,
        email: '',
        password: ''
      })
      auth.login(data.token, data.userId)
    } catch (e) { }
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1 className="center white-text">Cut link</h1>
        <div className="card green darken-2">
          <div className="card-content white-text green darken-1">
            <span className="card-title">Authorization</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Write your email"
                  id="email" type="text"
                  className="green-input"
                  name="email"
                  onChange={changeHandler}
                  value={form.email}
                />
                <label className="white-text" htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Write your password"
                  id="password" type="password"
                  className="green-input"
                  name="password"
                  onChange={changeHandler}
                  value={form.password}
                />
                <label className="white-text" htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn green lighten-1"
              onClick={loginHandler}
              disabled={loading}
            >Sign in</button>
            <button
              className="btn green lighten-1 ml-1"
              onClick={registerHandler}
              disabled={loading}
            >Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}
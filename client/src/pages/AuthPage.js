import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { loading, error, request, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })

      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })

      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>
          Shorten the link
        </h1>
        <div className="card pink accent-2">
          <div className="card-content white-text">
            <span className="card-title">
              Authorization
            </span>
            <div>

              <div className="input-field">
                <input
                  placeholder="Email"
                  id="email"
                  type="text"
                  name="email"
                  className="auth__input"
                  value={form.email}
                  onChange={changeHandler}
                />
                <label htmlFor="email">
                  Email
                </label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Password"
                  id="password"
                  type="password"
                  name="password"
                  className="auth__input"
                  value={form.password}
                  onChange={changeHandler}
                />
                <label htmlFor="password">
                  Password
                </label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <button
              className="btn"
              onClick={loginHandler}
              disabled={loading}
            >
              Sign in
            </button>
            <button
              className="btn"
              onClick={registerHandler}
              disabled={loading}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage

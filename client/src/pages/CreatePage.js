import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
export const CreatePage = () => {
  useEffect(() => {
    window.M.updateTextFields()
  }, [])
  const history = useHistory()
  const auth = useContext(AuthContext)
  const { request } = useHttp()
  const [link, setLink] = useState('')
  const pressHandler = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request(
          '/api/link/generate',
          'POST',
          { from: link },
          {
            authorization: `Bearer ${auth.token}`
          }
        )
        history.push(`/detail/${data.link._id}`)
      } catch (e) {}
    }
  }
  return (
    <div className="row">
      <div className="col s8 offset-s2 pt-2">
        <h1>Create Page</h1>
        <div className="input-field">
          <input
            placeholder="Write your link"
            id="link" type="text"
            className="green-input"
            value={link}
            onChange={e => setLink(e.target.value)}
            onKeyPress={pressHandler}
          />
          <label className="white-text" htmlFor="link">Write your link</label>
        </div>
      </div>
    </div>
  )
}
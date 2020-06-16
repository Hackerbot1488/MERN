import React from 'react'
import {Link} from 'react-router-dom'
export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center white-text">There are no links bro.</p>
  }
  return (
    <table>
      <thead>
        <tr>
            <th>№</th>
            <th>Original</th>
            <th>Cut</th>
            <th>Show</th>
        </tr>
      </thead>

      <tbody>
      { links.map((link, idx) => {
        return (
          <tr key={link._id}>
            <td>{idx + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link className="g-t" to={`/detail/${link._id}`}>Show</Link>
            </td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}
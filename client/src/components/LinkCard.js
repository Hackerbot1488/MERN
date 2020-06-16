import React, { Fragment } from 'react'
export const LinkCard = ({link}) => {
  return (
    <Fragment>
      <h2>Link</h2>
      <p>Your link: <a href={link.to} className="g-t" target="_blank" rel="noopener noreferrer">{link.to}</a></p>
      <p>From: <a href={link.from} className="g-t" target="_blank" rel="noopener noreferrer">{link.from}</a></p>
      <p>Count of clicks: <strong>{link.click}</strong></p>
      <p>Date of creating: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </Fragment>
  )
}
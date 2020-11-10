import React from 'react'

const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>

      <p>
        Your link:&nbsp;
        <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a>
      </p>
      <p>
        From:&nbsp;
        <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a>
      </p>
      <p>
        Clicks:&nbsp;
        <strong>{link.clicks}</strong>
      </p>
      <p>
        Date:&nbsp;
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  )
}

export default LinkCard

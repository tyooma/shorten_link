import React from 'react'
import { Link } from 'react-router-dom'

const LinksList = ({ links }) => {
  if (!links.length) {
    return ( 
      <p className="center">
        There is no links yet
      </p>
    )
  }
  return (
    <table className="highlight">
      <thead>
        <tr>
            <th>Num of link</th>
            <th>Original</th>
            <th>Shortened</th>
            <th>Details</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => (
          <tr key={link._id}>
            <td>{index + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link to={`/detail/${link._id}`}>
                Open
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default LinksList

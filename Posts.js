import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({po}) => {
  return (
    <div>
        <Link to={`New/${po.id}`}>
        <h2>{po.title}</h2>
        <h4>{po.date}</h4>
        <p>{po.content}</p>
        </Link>
    </div>
  )
}

export default Posts
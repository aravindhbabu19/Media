import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Postlayout = () => {
  return (
    <div>
        <Link to='/post/1'>post1</Link>
        <Link to='/post/2'>post2</Link>
        <Link to='/post/3'>post3</Link>
        <Outlet />
    </div>
  )
}

export default Postlayout
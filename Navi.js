import React from 'react'
import { Link } from 'react-router-dom'

const Navi = ({search,setSearch}) => {
  return (
    <div>
        <label htmlFor="nam">search</label>
        <input type="text" id="nam" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/New'>Post</Link></li>
            <li><Link to='/Abo'>About</Link></li>
        </ul>
    </div>
  )
}

export default Navi
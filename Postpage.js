import React from 'react'
import { useParams } from 'react-router-dom'

const Postpage = ({post,handleDelete}) => {
    const {id}=useParams();
    const posts=post.find(post=>(post.id).toString()===id);
  return (
    <div>
     {
        posts&&
        <>
        <h2>{posts.title}</h2>
        <h4>{posts.date}</h4>
        <p>{posts.content}</p>
        <button onClick={()=>handleDelete(posts.id)}>Delete post</button>
        </>
     }
     {
        !posts &&
        <>
        <h2>post not found</h2>
        <p>please visit homepage</p>
        </>
     }
    </div>
  )
}

export default Postpage
import React from 'react'
import Feed from './Feed'

const Home = ({post}) => {
  return (
    <div>
        {
            post.length ?(
                <Feed post={post} />
            ):(
                <h2>No Post Found</h2>
            )
        }
    </div>
  )
}

export default Home
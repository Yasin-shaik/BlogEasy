import React from 'react'
import Blog from "./Blog"
const Feed = (props) => {
  const posts=props.posts;
  return (
    <div className='container p-3'>
      <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3 p-3'>
      {posts.map(post => (
        <Blog key={post.id} post={post} />
      ))}
    </div>
    </div>
  )
}

export default Feed

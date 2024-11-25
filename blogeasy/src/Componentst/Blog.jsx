import React from 'react'
import {Link} from 'react-router-dom'
import blog from "../Assets/blog.png"
const Blog = (props) => {
  return (
    <>
      <div class="card m-2" style={{width: "18rem"}}>
        <img src={blog} class="card-img-top" alt="Blog_Image"/>
        <div class="card-body">
          <h5 class="card-title">{props.post.title}</h5>
          <p className="fs-6">{props.post.datetime}</p>
          <p class="card-text">{
                (props.post.body).length <= 80
                    ? props.post.body
                    : `${(props.post.body).slice(0, 80)}...`
            }</p>
          <Link href="/" to={`/post/${props.post.id}`} class="btn btn-primary">Read more</Link>
        </div>
      </div>
    </>
  )
}

export default Blog

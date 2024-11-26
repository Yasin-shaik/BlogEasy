import React from 'react'
import {Link} from 'react-router-dom'
const Blog = (props) => {
  return (
    <>
      <div className="card m-2 p-2" style={{width: "18rem"}}>
        <img src={props.post.postImg} className="card-img-top" alt="Blog_Image"/>
        <div className="card-body">
          <h5 className="card-title">{
                (props.post.title).length <= 40
                    ? props.post.title
                    : `${(props.post.title).slice(0, 40)}...`
            }</h5>
          <p className="fs-6">{props.post.datetime}</p>
          <p className="card-text">{
                (props.post.body).length <= 80
                    ? props.post.body
                    : `${(props.post.body).slice(0, 80)}...`
            }</p>
          <Link href="/" to={`/post/${props.post.id}`} className="btn btn-primary">Read more</Link>
        </div>
      </div>
    </>
  )
}

export default Blog

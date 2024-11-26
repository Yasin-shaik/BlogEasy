import React from 'react'
import { useParams, Link } from "react-router-dom";
const Postpage = (props) => {
  const { id } = useParams();
  const post = props.posts.find(post => (post.id).toString() === id);
  return (
      <div className="container my-3 p-3" style={{border:"solid black"}}>
                {post &&
                    <>
                        <h2 style={{color:"blue"}}>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="text-break" style={{width: "80rem"}}>{post.body}</p>
                        <Link to={`/edit/${post.id}`}><button type="button" className="btn btn-primary m-3">Edit Post</button></Link>
                        <Link to="/"><button type="button" onClick={() => props.handleDelete(post.id)} className="btn btn-primary">Delete Post</button></Link>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Back to Homepage</Link>
                        </p>
                    </>
                }
        </div>
  )
}

export default Postpage

import React from 'react'
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const Editpost = (props) => {
  const { id } = useParams();
    const post = props.posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
          props.setEditTitle(post.title);
          props.setEditBody(post.body);
        }
    }, [post, props.setEditTitle, props.setEditBody])
  return (
    <div>
      <div className="container my-3">
            {props.editTitle &&
                <>
                    <h2 style={{color:"blue"}}>Edit Post</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <label htmlFor="postTitle" className="form-label">Title:</label>
                      <input type="text" required className="form-control" id="postTitle" value={props.editTitle} onChange={(e) => props.setEditTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="postBody" className="form-label">Post:</label>
                      <textarea className="form-control" d="postBody" required value={props.editBody} onChange={(e) => props.setEditBody(e.target.value)}></textarea>
                    </div>
                    <Link to="/"><button type="submit" className="btn btn-primary" onClick={() => props.handleEdit(post.id)}>Submit</button></Link>
                    </form>
                </>
            }
            {!props.editTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
        </div>
    </div>
  )
}

export default Editpost

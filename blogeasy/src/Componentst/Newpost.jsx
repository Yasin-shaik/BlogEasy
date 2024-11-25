import React from "react";
import { Link } from "react-router-dom";
const Newpost = (props) => {
  return (
    <div className="container my-3 p-3">
      <h2 style={{color:"blue"}}>Post A New Blog</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Title:
          </label>
          <input
            id="postTitle"
            type="text"
            className="form-control"
            required
            value={props.postTitle}
            onChange={(e) => props.setPostTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postBody" className="form-label">
            Post:
          </label>
          <textarea
            className="form-control"
            id="postBody"
            required
            value={props.postBody}
            onChange={(e) => props.setPostBody(e.target.value)}
          ></textarea>
        </div>
        <Link to="/"><button type="submit" className="btn btn-primary" onClick={() => props.handleSubmit()}>Submit</button></Link>
      </form>
    </div>
  );
};

export default Newpost;

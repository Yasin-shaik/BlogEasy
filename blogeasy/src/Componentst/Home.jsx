import React from 'react'
import Feed from "./Feed"
const Home = (props) => {
  console.log(props.posts);
  return (
    <div>
        <div className="Home">
            {props.posts.length ? (
                <Feed posts={props.posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </div>
    </div>
  )
}

export default Home

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Componentst/Navbar"
import Home from "./Componentst/Home";
import Newpost from "./Componentst/Newpost"
import Editpost from "./Componentst/Editpost"
import Postpage from "./Componentst/Postpage"
import api from "./Api/Posts"
import { format } from 'date-fns';
function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [postImg, setPostImg] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const [editURL, setEditURL] = useState('');

  const fetchPosts = async () => {
    try {
      const response = await api.get('/posts');
      setPosts(response.data);
    } catch (err) {
      if (err.response) { 
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
    console.log(filteredResults);
  }, [posts, search]);

  const handleSubmit = async (e) => {
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody, postImg: postImg };
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      setPostImg('');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody, postImg: editURL };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
      // setEditTitle('');
      // setEditBody('');
      // setEditURL('');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);  
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  return(
  <>
    <BrowserRouter>
    <Navbar search={search} setSearch={setSearch}/>
    <Routes>
      <Route exact path="/" element={<Home posts={searchResults}/>}/>
      <Route exact path="/post/:id" element={<Postpage posts={posts} handleDelete={handleDelete}/>}/>
      <Route exact path="/edit/:id" element={<Editpost posts={posts} handleEdit={handleEdit} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody} editURL={editURL} setEditURL={setEditURL}/>}/>
      <Route exact path="/new_post" element={<Newpost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} postImg={postImg} setPostImg={setPostImg}/>}/>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

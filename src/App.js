import React,{ useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

import Post from "./components/Post";
import Pagination from "./components/Pagination";



function App() {

  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(7);


  useEffect(()=>{
    const fetchPosts=async()=>{
      setLoading(true);
      const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
      
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts();
  },[])


  const indexOfLastPost=currentPage*postsPerPage;
  const indexOfFirstPost=indexOfLastPost-postsPerPage;
  const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);


  const paginateHandle=(pageNumber)=>setCurrentPage(pageNumber);


  return (
    <div className="container mt-4 mb-3">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Post posts={currentPosts} loading={loading}/>
      <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} paginate={paginateHandle}/>
    </div>
  );
}

export default App;

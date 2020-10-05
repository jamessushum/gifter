import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [userProfiles, setUserProfiles] = useState([]);
  const [searchedPosts, setSearchedPosts] = useState([]);

  const getAllPosts = async () => {
    const res = await fetch("/api/post/getwithcomments");
    const value = await res.json();
    return setPosts(value);
  };

  const getAllUserProfiles = async () => {
    const res = await fetch("/api/userprofile");
    const value = await res.json();
    return setUserProfiles(value);
  }

  const getSearchPosts = async (searchTerm) => {
    const res = await fetch(`/api/post/search?q=${searchTerm}`);
    const value = await res.json();
    return setSearchedPosts(value);
  }

  const addPost = (post) => {
    return fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  return (
    <PostContext.Provider value={{ posts, getAllPosts, addPost, userProfiles, getAllUserProfiles, searchedPosts, getSearchPosts }}>
      {props.children}
    </PostContext.Provider>
  )
}
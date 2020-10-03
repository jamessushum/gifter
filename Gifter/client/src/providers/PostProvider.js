import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [userProfiles, setUserProfiles] = useState([]);

  const getAllPosts = async () => {
    const res = await fetch("/api/post");
    const value = await res.json();
    console.log(value);
    return setPosts(value);
  };

  const getAllUserProfiles = async () => {
    const res = await fetch("/api/userprofile");
    const value = await res.json();
    console.log(value);
    return setUserProfiles(value);
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
    <PostContext.Provider value={{ posts, getAllPosts, addPost, userProfiles, getAllUserProfiles }}>
      {props.children}
    </PostContext.Provider>
  )
}
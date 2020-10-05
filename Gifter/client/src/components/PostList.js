import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";
import PostSearch from "./PostSearch";

const PostList = () => {
  const { posts, getAllPosts, searchedPosts, getSearchPosts } = useContext(PostContext);

  // ALTERNATIVE: search using JS instead of using API search route
  // const [filteredPosts, setFilteredPosts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchFieldChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  useEffect(() => {
    getSearchPosts(searchTerm);
  }, [searchTerm])

  // ALTERNATIVE: search using JS instead of using API search route
  // Filters posts by search title or caption
  // useEffect(() => {
  //   setFilteredPosts(
  //     posts.filter(post => {
  //       return post.title.toLowerCase().includes(searchTerm.toLowerCase()) || (post.caption !== null ? post.caption.toLowerCase().includes(searchTerm.toLowerCase()) : null)
  //     })
  //   );
  // }, [searchTerm, posts]);

  return (
    <div className="container">
      <PostSearch handleSearchFieldChange={handleSearchFieldChange} />
      <div className="row justify-content-center">
        <div className="cards-column">
          {searchTerm === "" ? posts.map((post) => (
            <Post key={post.id} post={post} />
          )) : searchedPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
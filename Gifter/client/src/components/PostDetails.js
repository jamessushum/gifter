import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";

const PostDetails = () => {
  const [post, setPost] = useState();
  const { getPost } = useContext(PostContext);
  // Using useParams hook to access the route parameter
  const { id } = useParams();

  useEffect(() => {
    getPost(id).then(setPost);
  }, []);

  if (!post) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <Post post={post} />
          <ListGroup>
            {post.comments.map(comment => (
              <ListGroupItem key={comment.id}>{comment.message}</ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
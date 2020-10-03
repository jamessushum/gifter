import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";

const PostForm = () => {
  const { addPost, userProfiles, getAllUserProfiles, getAllPosts } = useContext(PostContext);

  const [formFeedback, setFormFeedback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState({
    Title: "",
    ImageUrl: "",
    Caption: "",
    DateCreated: "",
    UserProfileId: ""
  });

  const handleFieldChange = (e) => {
    const stateToChange = { ...post }
    stateToChange[e.target.id] = e.target.value
    setPost(stateToChange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      Title: post.Title,
      ImageUrl: post.ImageUrl,
      Caption: post.Caption,
      DateCreated: new Date(),
      UserProfileId: parseInt(post.UserProfileId)
    };

    if (post.Title === "" || post.ImageUrl === "" || post.UserProfileId === "") {
      setFormFeedback(true);
    } else {
      setIsLoading(true);
      addPost(newPost)
        .then(() => {
          document.getElementById("newPost-form").reset();
          getAllPosts();
          window.location.reload();
        })
    }
  }

  useEffect(() => {
    getAllUserProfiles();
  }, []);

  return (
    <div className="container border p-4">
      <h3 className="mb-4">Add a new post!</h3>
      <Form id="newPost-form">
        <FormGroup row>
          <Label for="Title" sm={2}>Title:</Label>
          <Col sm={10}>
            <Input type="text" name="Title" id="Title" invalid={formFeedback} onChange={handleFieldChange} />
            <FormFeedback>A title is required</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="ImageUrl" sm={2}>Image URL:</Label>
          <Col sm={10}>
            <Input type="url" name="ImageUrl" id="ImageUrl" invalid={formFeedback} onChange={handleFieldChange} />
            <FormFeedback>An image url is required</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Caption" sm={2}>Caption:</Label>
          <Col sm={10}>
            <Input type="text" name="Caption" id="Caption" onChange={handleFieldChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="UserProfileId" sm={2}>User Profile:</Label>
          <Col sm={10}>
            <Input type="select" name="UserProfileId" id="UserProfileId" defaultValue="" invalid={formFeedback} onChange={handleFieldChange}>
              <option value="" disabled>Select User</option>
              {userProfiles.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
            </Input>
            <FormFeedback>A user profile id is required</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 6 }}>
            <Button disabled={isLoading} onClick={handleSubmit}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
};

export default PostForm;
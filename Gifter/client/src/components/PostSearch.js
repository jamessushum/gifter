import React from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";

const PostSearch = ({ handleSearchFieldChange }) => {

  return (
    <div className="container mt-4 border p-4">
      <h3 className="mb-4">Search Posts</h3>
      <Form>
        <FormGroup row>
          <Label for="search-post" sm={2}>Title or Caption</Label>
          <Col sm={10}>
            <Input type="search" name="search-post" id="search-post" placeholder="Search for a post" onChange={handleSearchFieldChange} />
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
}

export default PostSearch;
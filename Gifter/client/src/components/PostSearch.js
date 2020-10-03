import React from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";

const PostSearch = () => {

  return (
    <div className="container">
      <Form>
        <FormGroup row>
          <Label for="search-post" sm={2}>Search</Label>
          <Col sm={10}>
            <Input type="search" name="search-post" id="search-post" placeholder="Search for a post" />
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
}

export default PostSearch;
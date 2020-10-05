import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";

const ApplicationViews = () => {
  return (
    // Switch component is going to look at the url and render the first route that is a match
    <Switch>
      <Route path="/" exact>
        <PostList />
      </Route>

      <Route path="/posts/add" exact>
        <PostForm />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;
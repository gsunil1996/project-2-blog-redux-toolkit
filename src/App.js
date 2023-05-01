import React from "react";
import "./App.css";
import BlogsList from "./features/blogs/BlogsList";
import AddBlogForm from "./features/blogs/AddBlogForm";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Blog Form</h2>
          <AddBlogForm />
        </div>
        <div className="col-md-6">
          <h2>Blog List</h2>
          <BlogsList />
        </div>
      </div>
    </div>
  );
}

export default App;

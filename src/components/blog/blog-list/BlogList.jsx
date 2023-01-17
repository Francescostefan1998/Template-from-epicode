import React from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useState, useEffect } from "react";

const BlogList = (props) => {
  const [blogspot, setBlogPost] = useState();
  const fetchBlogPost = async () => {
    const resp = await fetch("http://localhost:3001/blogs");
    const data = await resp.json();
    setBlogPost(data);
    console.log(data);
  };

  useEffect(() => {
    fetchBlogPost();
  }, []);

  return (
    <Row>
      {blogspot && (
        <div>
          {blogspot.map((post) => (
            <Col
              md={4}
              style={{
                marginBottom: 50,
              }}
            >
              <BlogItem key={post._id} {...post} />
            </Col>
          ))}
        </div>
      )}
    </Row>
  );
};

export default BlogList;

import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import { BsPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./styles.css";
const BlogItem = (props) => {
  const navigate = useNavigate();

  const { title, cover, author, _id } = props;
  console.log(_id);
  return (
    <Link to={`/blog/${_id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img
          variant="top"
          src="https://source.unsplash.com/random/200x200?sig=1"
          className="blog-cover"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Footer>{/*<BlogAuthor {...author} />*/}</Card.Footer>
        <div>
          <BsPencilFill />
        </div>
      </Card>
    </Link>
  );
};

export default BlogItem;

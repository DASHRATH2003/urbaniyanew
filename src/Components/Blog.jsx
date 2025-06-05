import React from 'react';
import '../styles/Blog.css';
import '../styles/animations.css';
import landing1 from '../assets/landing-1.webp';
import { initScrollReveal } from '../utils/scrollReveal';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Welcome to the Ultimate Urbania Travel Experience in Bangalore!",
      date: "April 29, 2024",
      author: "Urbania Team",
      image: landing1,
      excerpt: "Discover premium Force Urbania rental services in Bangalore for comfortable group trips, corporate events and luxury outings.",
    }
  ];

  return (
    <div className="blog-wrapper">
      <div className="blog-hero">
        <h1>Our Blog</h1>
        <p>Travel tips, weekend getaway ideas, and premium van rental insights</p>
      </div>

      <div className="blog-container">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <span className="post-author">{post.author}</span>
            </div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;

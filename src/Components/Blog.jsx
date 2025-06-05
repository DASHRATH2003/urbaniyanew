import React, { useState } from 'react';
import '../styles/Blog.css';
import '../styles/animations.css';
import landing1 from '../assets/landing-1.webp';
import { initScrollReveal } from '../utils/scrollReveal';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Welcome to the Ultimate Urbania Travel Experience in Bangalore!",
      date: "April 29, 2024",
      author: "Urbania Team",
      image: landing1,
      excerpt: "Discover premium Force Urbania rental services in Bangalore for comfortable group trips, corporate events and luxury outings.",
      fullContent: `
        Welcome to Urbania Rentals, your premier destination for luxury van rentals in Bangalore. We're excited to introduce you to our fleet of Force Urbania vehicles, designed to make your group travel experiences truly exceptional.

        Our Force Urbania vans come in various seating configurations to suit your needs:

        • Force Urbania 10+1: Perfect for small groups and corporate travels
        • Force Urbania 12+1: Ideal for medium-sized groups with extra luggage space
        • Force Urbania 16+1: Our largest option for big groups and special events

        Each vehicle is equipped with:
        - Individual AC vents
        - Comfortable reclining seats
        - Entertainment system
        - USB charging ports
        - Ample luggage space

        Whether you're planning a corporate event, family outing, wedding transportation, or any group travel, our Force Urbania fleet ensures comfort, style, and reliability.

        Book your premium Force Urbania experience today and elevate your group travel in Bangalore!
      `
    }
  ];

  const handleReadMore = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className="blog-wrapper">
        <div className="blog-hero">
          <h1>Our Blog</h1>
          <p>Travel tips, weekend getaway ideas, and premium van rental insights</p>
        </div>

        <div className="blog-post-detail">
          <button onClick={handleBack} className="back-button">
            <i className="fas fa-arrow-left"></i> Back to Posts
          </button>
          
          <article className="full-post">
            <img src={selectedPost.image} alt={selectedPost.title} className="full-post-image" />
            
            <div className="post-meta detail">
              <span className="post-date">{selectedPost.date}</span>
              <span className="post-author">{selectedPost.author}</span>
            </div>
            
            <h1 className="full-post-title">{selectedPost.title}</h1>
            
            <div className="full-post-content">
              {selectedPost.fullContent.split('\n').map((paragraph, index) => (
                paragraph.trim().startsWith('•') ? (
                  <ul key={index} className="post-list">
                    <li>{paragraph.substring(1).trim()}</li>
                  </ul>
                ) : paragraph.trim().startsWith('-') ? (
                  <ul key={index} className="post-list secondary">
                    <li>{paragraph.substring(1).trim()}</li>
                  </ul>
                ) : paragraph.trim() && (
                  <p key={index}>{paragraph}</p>
                )
              ))}
            </div>
          </article>
        </div>
      </div>
    );
  }

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
            <button onClick={() => handleReadMore(post)} className="read-more">
              Read more
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;

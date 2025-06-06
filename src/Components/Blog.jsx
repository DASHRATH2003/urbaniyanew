import React, { useState } from 'react';
import '../styles/Blog.css';
import '../styles/animations.css';
import landing1 from '../assets/landing-1.webp';
import { initScrollReveal } from '../utils/scrollReveal';
// Import images from assets
import blogImage1 from '../assets/12seater9.jpg';
import blogImage2 from '../assets/12seater8.jpeg';
import blogImage3 from '../assets/12seater2.jpeg';
import blogImage4 from '../assets/leading3.jpeg';
import blogImage5 from '../assets/seet44.webp';
import blogImage6 from '../assets/new4.webp';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Experience Luxury Travel with Force Urbania",
      date: "March 20, 2024",
      author: "Travel Expert",
      image: blogImage1,
      excerpt: "Discover the perfect blend of comfort and style with our Force Urbania fleet.",
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
    },
    {
      id: 2,
      title: "Your Guide to Group Travel in Bangalore",
      date: "March 18, 2024",
      author: "Travel Guide",
      image: blogImage2,
      excerpt: "Everything you need to know about group travel in and around Bangalore.",
      fullContent: `Planning a weekend escape from Bangalore? Our Force Urbania vans are perfect for group getaways. Here are our top recommended destinations:

• Coorg - The Scotland of India
- 5-6 hours drive from Bangalore
- Perfect for nature lovers and coffee enthusiasts
- Visit coffee plantations and waterfalls
- Ideal for 2-day trips

• Ooty - Queen of Hill Stations
- 7-8 hours scenic drive
- Famous for its tea gardens and botanical gardens
- Pleasant weather year-round
- Great for family trips

• Wayanad - Nature's Paradise
- 6-7 hours journey
- Wildlife sanctuaries and ancient caves
- Perfect for adventure seekers
- Comfortable 2-3 day trip

Our Force Urbania vans ensure comfortable travel with:
- Individual AC vents
- Reclining seats
- Ample luggage space
- Experienced drivers familiar with these routes

Book your weekend getaway with us for a memorable experience!`
    },
    {
      id: 3,
      title: "Why Force Urbania is Perfect for Corporate Travel",
      date: "March 16, 2024",
      author: "Business Travel Expert",
      image: blogImage3,
      excerpt: "Learn about our premium corporate travel solutions and fleet options.",
      fullContent: `Looking for reliable corporate transportation solutions? Here's why Force Urbania should be your top choice:

• Superior Comfort
- Individual AC vents for all passengers
- Ergonomic seating for long journeys
- USB charging points
- Smooth ride quality

• Professional Service
- Punctual and reliable
- Well-trained, experienced drivers
- 24/7 customer support
- Real-time tracking available

• Fleet Options
- 10+1 Luxury variant for executive travel
- 12+1 seater for team outings
- 16+1 seater for larger groups
- All vehicles regularly maintained

• Corporate Benefits
- Dedicated account manager
- Flexible billing options
- Bulk booking discounts
- GST compliant billing

Contact us to discuss your corporate travel requirements and get a customized solution for your organization.`
    },
    {
      id: 4,
      title: "Top Weekend Getaways from Bangalore in Force Urbania",
      date: "March 15, 2024",
      author: "Travel Expert",
      image: blogImage4,
      excerpt: "Discover the best weekend destinations around Bangalore perfect for group travel in our comfortable Force Urbania vans.",
      fullContent: `Planning a weekend escape from Bangalore? Our Force Urbania vans are perfect for group getaways. Here are our top recommended destinations:

• Coorg - The Scotland of India
- 5-6 hours drive from Bangalore
- Perfect for nature lovers and coffee enthusiasts
- Visit coffee plantations and waterfalls
- Ideal for 2-day trips

• Ooty - Queen of Hill Stations
- 7-8 hours scenic drive
- Famous for its tea gardens and botanical gardens
- Pleasant weather year-round
- Great for family trips

• Wayanad - Nature's Paradise
- 6-7 hours journey
- Wildlife sanctuaries and ancient caves
- Perfect for adventure seekers
- Comfortable 2-3 day trip

Our Force Urbania vans ensure comfortable travel with:
- Individual AC vents
- Reclining seats
- Ample luggage space
- Experienced drivers familiar with these routes

Book your weekend getaway with us for a memorable experience!`
    },
    {
      id: 5,
      title: "Corporate Travel Solutions: Why Choose Force Urbania",
      date: "March 10, 2024",
      author: "Business Travel Specialist",
      image: blogImage5,
      excerpt: "Learn why Force Urbania is the perfect choice for corporate travel and employee transportation needs.",
      fullContent: `Looking for reliable corporate transportation solutions? Here's why Force Urbania should be your top choice:

• Superior Comfort
- Individual AC vents for all passengers
- Ergonomic seating for long journeys
- USB charging points
- Smooth ride quality

• Professional Service
- Punctual and reliable
- Well-trained, experienced drivers
- 24/7 customer support
- Real-time tracking available

• Fleet Options
- 10+1 Luxury variant for executive travel
- 12+1 seater for team outings
- 16+1 seater for larger groups
- All vehicles regularly maintained

• Corporate Benefits
- Dedicated account manager
- Flexible billing options
- Bulk booking discounts
- GST compliant billing

Contact us to discuss your corporate travel requirements and get a customized solution for your organization.`
    },
    {
      id: 6,
      title: "Essential Tips for Long-Distance Travel in Force Urbania",
      date: "March 5, 2024",
      author: "Travel Safety Expert",
      image: blogImage6,
      excerpt: "Make your long-distance journey comfortable and safe with these essential travel tips.",
      fullContent: `Planning a long-distance trip in our Force Urbania? Here are essential tips to ensure a comfortable and safe journey:

• Before the Journey
- Book in advance for better rates
- Inform about luggage requirements
- Share passenger list for insurance
- Check weather conditions

• During Travel
- Take regular breaks every 2-3 hours
- Keep emergency contacts handy
- Use provided USB points for charging
- Follow safety guidelines

• Comfort Tips
- Carry neck pillows for comfort
- Pack light refreshments
- Wear comfortable clothing
- Bring entertainment options

• Safety Measures We Provide
- Regular vehicle maintenance
- 24/7 roadside assistance
- First aid kit onboard
- GPS tracking enabled

Our Force Urbania vans are equipped with all necessary amenities for long-distance travel. Book your journey with confidence!`
    }
  ];

  const handlePostClick = (post) => {
    setSelectedPost(post);
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

      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card" onClick={() => handlePostClick(post)}>
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-author">{post.author}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <button className="read-more">Read More →</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;

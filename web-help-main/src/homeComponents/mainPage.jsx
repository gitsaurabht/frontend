import React, { useState } from "react";
import { Link} from "react-router-dom";

const MainPage = () => {
  const [coinCount, setCoinCount] = useState(100);
  const posts = [
    {
      id: 1,
      user: "User 1",
      userPic: "/test/Business-Connectivity-Guide2.png",
      postImg: "/test/Business-Connectivity-Guide2.png",
      caption: "Had an amazing time at the beach today! 🌊",
      upvotes: 10,
    },
    {
      id: 2,
      user: "User 2",
      userPic: "/test/Business-Connectivity-Guide2.png",
      postImg: "/test/Business-Connectivity-Guide2.png",
      caption: "New coding setup! What do you think? 💻",
      upvotes: 25,
    },
  ];

  return (
    <div>
      <header className="navbar">
        <h2 className="logo">Web-Help</h2>
        <div className="nav-right">
          <div className="coin-section">💰 Coins: {coinCount}</div>
          <button className="search-icon">🔍</button>
          <img src="/test/user page/userImg.avif" alt="User" className="nav-user-pic" />
        </div>
        <div className="hamburger-menu">
          <button className="hamburger">☰</button>
          <div className="menu-content">
            <Link to="/UserPage">Profile</Link>
            <Link to="/">Community</Link>
            <Link to="/CoinHistory">Coin History</Link>
            <Link to="/DonationHistory">Donation</Link>
            <Link to="/LoginForm">Logout</Link>
          </div>
        </div>
      </header>
      <div className="container">
        <main className="feed">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-user">
                <img src={post.userPic} alt={post.user} className="user-pic" />
                <span>{post.user}</span>
              </div>
              <img src={post.postImg} alt={post.user} className="post-img" />
              <p className="caption">{post.caption}</p>
              <div className="post-actions">
                <button className="upvote">🔼 {post.upvotes}</button>
                <button className="share-btn">🔗 Share</button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default MainPage;

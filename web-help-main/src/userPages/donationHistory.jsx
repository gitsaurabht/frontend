import React, { useState, useEffect } from "react";

const DonationHistory = () => {
  const [coinCount, setCoinCount] = useState(100);
  const [totalFunds, setTotalFunds] = useState(0);
  
  const donations = [
    { date: "2024-02-25", post: "My latest artwork 🎨", donor: "@JohnDoe", amount: 200, status: "Received", statusClass: "status-success" },
    { date: "2024-02-20", post: "Helping a local shelter 🏠", donor: "@Alice", amount: 500, status: "Received", statusClass: "status-success" },
    { date: "2024-02-15", post: "Support my project 💡", donor: "@Bob", amount: 100, status: "Pending", statusClass: "status-pending" },
    { date: "2024-02-10", post: "Streaming live now 🎮", donor: "@Charlie", amount: 300, status: "Failed", statusClass: "status-failed" },
  ];

  useEffect(() => {
    const total = donations
      .filter(donation => donation.status === "Received")
      .reduce((sum, donation) => sum + donation.amount, 0);
    setTotalFunds(total);
  }, []);

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
            <a href="/test/user page/user.html">Profile</a>
            <a href="/test/mainpage/main.html">Community</a>
            <a href="#">Chat</a>
            <a href="/test/hisotory/history.html">Coin History</a>
            <a href="/test/donatoin/donation.html">Donation</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </header>
      <div className="container">
        <main className="donation-history">
          <h2>Donation History</h2>
          <div className="total-funds">
            <h3>Total Funds Received: <span>{totalFunds}</span> Coins</h3>
          </div>
          <div className="table-container">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Post</th>
                  <th>Donor</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation, index) => (
                  <tr key={index}>
                    <td>{donation.date}</td>
                    <td>{donation.post}</td>
                    <td>{donation.donor}</td>
                    <td className="amount">{donation.amount}</td>
                    <td className={donation.statusClass}>{donation.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <footer className="footer">
        <div className="footer-left">
          <a href="#">Facing a problem? Contact Us | Help</a>
        </div>
        <div className="footer-right">
          <a href="#">Want to withdraw money? Click here</a>
        </div>
      </footer>
    </div>
  );
};

export default DonationHistory;

import React, { useState } from "react";

const CoinHistory = () => {
  const [coinCount, setCoinCount] = useState(100);
  const history = [
    { date: "2024-02-25", amount: "500 Coins", method: "Credit Card", status: "Completed", statusClass: "status-success" },
    { date: "2024-02-20", amount: "1000 Coins", method: "PayPal", status: "Completed", statusClass: "status-success" },
    { date: "2024-02-15", amount: "200 Coins", method: "Google Pay", status: "Pending", statusClass: "status-pending" },
    { date: "2024-02-10", amount: "1500 Coins", method: "Debit Card", status: "Failed", statusClass: "status-failed" }
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
        <main className="coin-history">
          <h2>Coin Purchase History</h2>
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.amount}</td>
                  <td>{entry.method}</td>
                  <td className={entry.statusClass}>{entry.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default CoinHistory;
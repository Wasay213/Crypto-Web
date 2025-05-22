import React from 'react';
import './Exchange.css'; 

const Exchange = () => {
  return (
    <div className="exchange">
      {/* Hero Section */}
      <section className="exchange-hero">
        <h1>Welcome to the Exchange</h1>
        <p>Trade your favorite cryptocurrencies with confidence and ease.</p>
        <button className="cta-button">Start Trading</button>
      </section>

      {/* Market Trends Section */}
      <section className="market-trends">
        <h2>Live Market Trends</h2>
        <div className="market-table">
          <div className="table-row table-header">
            <div>Cryptocurrency</div>
            <div>Price</div>
            <div>24h Change</div>
            <div>Volume</div>
          </div>
          <div className="table-row">
            <div>Bitcoin (BTC)</div>
            <div>$34,560</div>
            <div className="positive">+4.2%</div>
            <div>$1.5B</div>
          </div>
          <div className="table-row">
            <div>Ethereum (ETH)</div>
            <div>$2,300</div>
            <div className="negative">-1.3%</div>
            <div>$900M</div>
          </div>
          <div className="table-row">
            <div>Ripple (XRP)</div>
            <div>$0.75</div>
            <div className="positive">+2.8%</div>
            <div>$450M</div>
          </div>
          <div className="table-row">
            <div>Dogecoin (DOGE)</div>
            <div>$0.07</div>
            <div className="positive">+1.1%</div>
            <div>$300M</div>
          </div>
        </div>
      </section>

      {/* Trading Tools Section */}
      <section className="trading-tools">
        <h2>Advanced Trading Tools</h2>
        <div className="tools">
          <div className="tool">
            <i className="fas fa-chart-line"></i>
            <h3>Real-Time Charts</h3>
            <p>Analyze market trends with customizable charts and indicators.</p>
          </div>
          <div className="tool">
            <i className="fas fa-bolt"></i>
            <h3>Instant Transactions</h3>
            <p>Enjoy seamless trading with lightning-fast transaction speeds.</p>
          </div>
          <div className="tool">
            <i className="fas fa-wallet"></i>
            <h3>Secure Wallet</h3>
            <p>Store your assets safely with our advanced security protocols.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="exchange-cta">
        <h2>Ready to Start Trading?</h2>
        <p>Create an account and dive into the world of cryptocurrency trading today!</p>
        <button className="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
};

export default Exchange;

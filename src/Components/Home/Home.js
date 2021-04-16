import React from 'react';
import "./Home.scss";

function Home() {
  return (
    <div>
      <div id="bg">
        <img className="page" src="home.bg" />
      </div>
      <img className="portrait" src="https://images.unsplash.com/photo-1607703899364-7d4b1f01d8e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
      <h1 className="name">Mohammed Alhaq</h1>
      <h4 className="name">Front-End Developer & Software Engineer</h4>
    </div>
  );
}

export default Home;

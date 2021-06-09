import React, { Component } from "react";
class Posts extends Component {
  state = {};
  render() {
    const Posts = ({ posts, loading }) => {
      if (loading) {
        return <h2>Loading...</h2>;
      }
    };
    return (
      <div className="EventObjects">
        <div className="EventObjectsEach">
          <a href="/">
            <h1></h1>
            <p></p>
          </a>
          <img src="" alt=""></img>
        </div>
        <div className="EventObjectsEach">
          <a href="/">
            <h1></h1>
          </a>
        </div>
      </div>
    );
  }
}

export default Posts;

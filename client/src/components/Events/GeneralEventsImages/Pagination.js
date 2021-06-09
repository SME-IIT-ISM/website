import React, { Component } from "react";
class Pagination extends Component {
  render() {
    const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
      const pageNumbers = [];

      for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }
    };
    return (
      <nav>
        <ul className="pagination">
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;

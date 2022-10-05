import Pagination from "react-bootstrap/Pagination";

import React from "react";

function Pagin({ charParPage, totalChar, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalChar / charParPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {" "}
      <Pagination>
        {pageNumbers.map((number) => (
          <Pagination.Item onClick={() => paginate(number)}>
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default Pagin;

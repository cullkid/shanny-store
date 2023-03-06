import React, { useState } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
// import Pagination from "../pagination/Pagination";

const CardProduct = ({ item }) => {
  console.log(item);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(3);

  // const indexOfLastPage = currentPage * postPerPage;
  // const indexOfFirstPage = indexOfLastPage - postPerPage;
  // const firstPage = data.slice(indexOfFirstPage, indexOfLastPage);

  // //change page function
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Link className="link" to={`/product/${item.id}`}>
        <div className="card">
          <div className="image">
            {item?.attributes.isNew && <span>New Season</span>}
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes?.img?.data?.attributes?.url
              }
              alt=""
              className="mainImg"
            />
            <img
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes?.img2?.data?.attributes?.url
              }
              alt=""
              className="secondImg"
            />
          </div>
          <h2>{item?.attributes.title}</h2>
          <div className="prices">
            <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
            <h3>${item?.attributes.price}</h3>
          </div>
        </div>
      </Link>
      {/* <Pagination
        postPerPage={postPerPage}
        totalPosts={data.length}
        paginate={paginate}
      /> */}
    </div>
  );
};

export default CardProduct;

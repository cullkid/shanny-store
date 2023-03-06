import React, { useState } from "react";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import CardProduct from "../card product/CardProduct";
// import Pagination from "../pagination/Pagination";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(3);

  // const indexOfLastPage = currentPage * postPerPage;
  // const indexOfFirstPage = indexOfLastPage - postPerPage;
  // const firstPage = data.slice(indexOfFirstPage, indexOfLastPage);

  // //change page function
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <CardProduct item={item} key={item.id} />)}
      </div>
      {/* <Pagination
        postPerPage={postPerPage}
        totalPosts={data.length}
        paginate={paginate}
      /> */}
    </div>
  );
};

export default FeaturedProducts;

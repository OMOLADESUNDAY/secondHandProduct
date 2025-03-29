import React, { useState } from "react";
import ProductCard from "../component/ProductCard";
import '../styles/product.css'
const Product = ({products}) => {
 
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Adjust as needed

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get current page products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="productcontainer text-center">
      <h2 className="product-txt">Our Products</h2>
      <section className="d-flex flex-wrap product-inner-container ">
        {currentProducts.map((singleproduct) => (
          <ProductCard key={singleproduct.id} singlefeaturedproduct={singleproduct} />
        ))}
      </section>

      {/* Pagination Controls */}
      <div className="mt-4">
        <button className="btn btn-primary me-2" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} className={`btn ${currentPage === i + 1 ? "btn-dark" : "btn-outline-dark"} mx-1`} onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </button>
        ))}

        <button className="btn btn-primary ms-2" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
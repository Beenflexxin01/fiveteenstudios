import { useEffect, useState } from "react";
import ProductOverviewContents from "./ProductOverviewContents";
import { NavLink } from "react-router-dom";
function ProductOverview() {
  const [productOverview, setProductOverview] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const productPage = productOverview.slice(firstIndex, lastIndex);
  const npages = Math.ceil(productOverview.length / productsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  function nextPage() {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function currentPageNumber(id) {
    setCurrentPage(id);
  }

  useEffect(function () {
    async function getProductOverview() {
      try {
        const res = await fetch("http://localhost:5000/api/productOverview");

        if (!res.ok)
          throw new Error(
            "Something went wrong while trying to fetch the data! Kindly check your internet! ❌❌"
          );

        const data = await res.json();
        if (data.Response === "fasle")
          throw new Error("Unable to load data from the API!❌❌");
        setProductOverview(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getProductOverview();
  }, []);
  return (
    <>
      <div className="containr">
        <div className="product--nav overvview-nav">
          <nav className="product-nav">
            <ul className="product-ul">
              <li className="product-li">Product Name</li>
              <li className="product-li">Product ID</li>
              <li className="product-li">Price</li>
              <li className="product-li">Quantity</li>
              <li className="product-li">Sale</li>
              <li className="product-li">Revenue</li>
              <li className="product-li ">Status</li>
            </ul>
          </nav>
          {productPage &&
            productPage.map((productOverview, key) => (
              <ProductOverviewContents
                productOverview={productOverview}
                key={key}
              />
            ))}
        </div>
        <nav className="pag-nav">
          <ul className="pagination-ul">
            <li className="pagination-li">
              <NavLink
                to="#"
                className="pagination-link"
                onClick={previousPage}>
                Prev
              </NavLink>
            </li>
            {numbers.map((n, index) => {
              return (
                <li
                  className={`pagination-li ${
                    currentPage === n ? "activePage" : ""
                  }`}
                  key={index}>
                  <NavLink
                    to="#"
                    className="pagination-link"
                    onClick={() => currentPageNumber(n)}>
                    {n}
                  </NavLink>
                </li>
              );
            })}

            <li className="pagination-li">
              <NavLink to="#" className="pagination-link" onClick={nextPage}>
                Next
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default ProductOverview;

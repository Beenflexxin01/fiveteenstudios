import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import FilterOperation from "./OperationFilter";
import OperationSort from "./OperationSort";
import BackendLink from "../../utils/BackendLink";
import { NavLink } from "react-router-dom";

function Products({ addProductToCart, products }) {
  const [product, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 7;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const productPage = product.slice(firstIndex, lastIndex);
  const npages = Math.ceil(product.length / productsPerPage);
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
    async function getProductList() {
      try {
        const res = await fetch(`${BackendLink}/api/products`);
        if (!res.ok)
          throw new Error(
            "Something went wrong while loading the products from the database."
          );
        const data = await res.json();
        if (data.Response === "False") throw new Error("Product not found");
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }
    getProductList();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="primary-header h1">Products</h1>
        <div className="filters">
          <div className="filter">
            <p className="filter-li">Filter:</p>
            <FilterOperation />
          </div>
          <div className="sort">
            <p className="filter-li">Sort By:</p>
            <OperationSort />
          </div>
        </div>
        <div className="grid-4">
          {productPage &&
            productPage.map(function (product) {
              return (
                <ProductList
                  key={product._id}
                  product={product}
                  products={products}
                  addProductToCart={addProductToCart}
                />
              );
            })}
        </div>

        <nav className="pag-nav">
          <ul className="pagination-ul">
            <li className="pagination-li">
              <NavLink to="#" className="pagination-link" onClick={previousPage}>
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
                  <NavLink to="#" className="pagination-link" onClick={() => currentPageNumber(n)}>
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

export default Products;

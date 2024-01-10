import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import ProductList from "./ProductList";

function Products() {
  const [product, setProducts] = useState([]);

  useEffect(function () {
    async function getProductList() {
      try {
        const res = await fetch("http://localhost:5000/api/products");
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
          <ul className="filter-ul">
            <div className="filter">
              <li className="filter-li">Filter:</li>
              <li className="filter-li">
                <Link to="" className="link">
                  <span>Availablity</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>
              <li className="filter-li">
                <Link to="" className="link">
                  <span>Price</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>
            </div>
            <div className="sort">
              <li className="filter-li">Sort By:</li>

              <li className="filter-li">
                <Link to="" className="link">
                  <span>Alphabetically, A - Z</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>

              <li className="filter-li">
                <Link to="" className="link">
                  <span>Price</span>
                  <HiOutlineChevronDown />
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="grid-4">
          {product &&
            product.map(function (product) {
              return <ProductList key={product._id} product={product} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Products;

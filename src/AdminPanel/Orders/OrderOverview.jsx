import { useEffect, useState } from "react";
import OrderContent from "./OrderContent";
import { NavLink } from "react-router-dom";

function OrderOverview() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const orderPage = orders.slice(firstIndex, lastIndex);
  const npages = Math.ceil(orders.length / productsPerPage);
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
    async function getOrderOverview() {
      try {
        const res = await fetch("http://localhost:5000/api/orders");

        if (!res.ok)
          throw new Error(
            "Something went wrong while trying to fetch data!! ❌❌❌"
          );

        const data = await res.json();
        if (data.Response === "false")
          throw new Error("Something went wrong while trying to fetch!! ❌❌");
        setOrders(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getOrderOverview();
  }, []);
  return (
    <>
      <div className="containr">
        <div className="product--nav overvview-nav">
          <nav className="product-nav">
            <ul className="product-ul order-ul">
              <li className="product-li">Product Name</li>
              <li className="product-li">Product ID</li>
              <li className="product-li">Amount</li>
              <li className="product-li ">Status</li>
            </ul>
          </nav>
          {orderPage &&
            orderPage.map((orderOverview, key) => (
              <OrderContent orderOverview={orderOverview} key={key} />
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

export default OrderOverview;

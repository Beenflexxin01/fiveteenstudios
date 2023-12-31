import { useEffect, useState } from "react";
import ProductList from "../Features/Products/ProductList";

function Search() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function getProductData() {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        if (!res.ok)
          throw new Error(
            "Something went wrong while loading the products from the database."
          );
        const data = await res.json();
        if (data.Response === "False") throw new Error("Product not found");
        setProducts(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getProductData();
  }, []);

  return (
    <>
      <div className="text-description">
        {products &&
          products.map(function (product) {
            return <ProductList key={product._id} product={product} />;
          })}
      </div>
    </>
  );
}

export default Search;

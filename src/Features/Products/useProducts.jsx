import { useEffect, useState } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function getProductDetails() {
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
    getProductDetails();
  }, []);

  return (
    <>
      <div className="text-description">
        {products.map(function (product) {
          return product.textDescription;
        })}
        {products.map(function (product) {
          return product.description;
        })}
        {products.map(function (product) {
          return product.image;
        })}
      </div>
    </>
  );
}

export default useProducts;

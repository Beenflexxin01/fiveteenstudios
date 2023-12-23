import { useEffect, useState } from "react";
// import Products from "../models/ProductModel";
function Search() {
  const [products, setProducts] = useState([]);

  // const { textDescription, title, description, price, shipPrice } = Products;

  useEffect(function () {
    async function getProductDetails() {
      try {
        const res = await fetch("http://localhost:3000/api/products");
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
    getProductDetails();

    // console.log(getProductDetails());
  }, []);

  return (
    <>
      {/* <h1>{textDescription}</h1> */}
      {/* <h1>{title}</h1> */}
      <h1>`${console.(products.description)}`</h1>
      {/* <h1>{price}</h1> */}
      {/* <h1>{shipPrice}</h1> */}
    </>
  );
}

export default Search;

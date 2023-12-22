import { useEffect, useState } from "react";
function Search() {
  const [products, setProducts] = useState([]);

  const { textDescription, title, description, price, shipPrice } = products;

  useEffect(function () {
    async function getProductDetails() {
      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getProductDetails();

    // console.log(getProductDetails());
  }, []);

  return (
    <>
      <h1>{textDescription}</h1>
      <h1>{title}</h1>
      <h1>{console.log(description)}</h1>
      <h1>{price}</h1>
      <h1>{shipPrice}</h1>
    </>
  );
}

export default Search;

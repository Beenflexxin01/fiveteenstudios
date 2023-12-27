import { useEffect, useState } from "react";
// import ProductDetails from "./ProductData";
import ProductList from "./ProductList";

function ProductPage() {
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
      } catch (err) {
        console.log(err);
      }
    }
    getProductDetails();
  }, []);
  return (
    <div className="grid-4">
      {products &&
        products.map(function (product) {
          return (
            <ProductList
              key={product._id}
              product={product}
              // onClick={() => console.log(navigate("/productPage"))}
            />
          );
        })}
    </div>
  );
}

export default ProductPage;

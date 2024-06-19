function ProductOverviewContents({ productOverview }) {
  const { title, price, image, productId, quantity, sale, revenue, status } =
    productOverview;

  return (
    <>
      <nav className="product-nav">
        <ul className="product-ul">
          <li className="product-li overview-li product">
            <img src={image} alt="" className="product--img" />
            {title}
          </li>
          <li className="product-li overview-li">#{productId}</li>
          <li className="product-li overview-li ">${price}.00</li>
          <li className="product-li overview-li">{quantity}</li>
          <li className="product-li overview-li">${sale}.00</li>
          <li className="product-li overview-li">${revenue}.00</li>
          <li className="product-li overview-li status">{status}</li>
        </ul>
      </nav>
    </>
  );
}

export default ProductOverviewContents;

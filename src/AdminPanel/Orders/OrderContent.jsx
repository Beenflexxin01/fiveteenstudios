function OrderContent({ orderOverview }) {
  const { title, productId, amount, image, status } = orderOverview;
  return (
    <>
      <nav className="product-nav">
        <ul className="product-ul order-ul">
          <li className="product-li overview-li">#{productId}</li>

          <li className="product-li overview-li product">
            <img src={image} alt="" className="product--img" />
            {title}
          </li>
          <li className="product-li overview-li">${amount}.00</li>
          <li className="product-li overview-li status">{status}</li>
        </ul>
      </nav>
    </>
  );
}

export default OrderContent;

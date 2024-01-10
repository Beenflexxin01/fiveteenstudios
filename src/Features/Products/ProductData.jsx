function ProductData({ productdatas }) {
  return (
    <>
      <div className="grid-2-cols checkout-grid product-grid">
        <span>{productdatas.textDescription}</span>
        <span>{productdatas.description}</span>
        <span>{productdatas.price}</span>
      </div>
    </>
  );
}

export default ProductData;

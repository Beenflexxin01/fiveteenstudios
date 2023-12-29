function ProductData({ productdatas }) {
  return (
    <>
      <div className="grid-2-cols checkout-grid product-grid">
        {/* <div>
          <img
            src={productdatas.image}
            alt={productdatas.title}
            className="grid-4-image"
          />
        </div>
        <div className="grid-2-cols checkout-grid product-grid">
          <p className="text-description">{productdatas.textDescripion}</p>
          <div className="text-align">
            <p className="text-description">{productdatas.title}</p>
            <p className="text-description">{productdatas.description}</p>

            <p className="text-description">${productdatas.price}.00</p>
          </div>
        </div> */}
        <span>{productdatas.textDescription}</span>
        <span>{productdatas.description}</span>
        <span>{productdatas.price}</span>
      </div>
    </>
  );
}

export default ProductData;

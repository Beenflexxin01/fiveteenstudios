import { useState } from "react";

function QtyComponent() {
  const [quantity, setQuantity] = useState(1);

  const handleIncreament = function () {
    if (quantity < 10) {
      setQuantity((product) => product + 1);
    }
  };
  const handleDecreament = function () {
    if (quantity > 1) {
      setQuantity((product) => product - 1);
    }
  };
  return (
    <div className="quantity">
      <button className="quantity-btn " onClick={handleDecreament}>
        -
      </button>
      <div className="form-control text-center">{quantity}</div>
      <button className="quantity-btn " onClick={handleIncreament}>
        +
      </button>
    </div>
  );
}

export default QtyComponent;

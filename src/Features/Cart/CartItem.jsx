import { useState } from "react";
import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
import MainNav from '../../UI/MainNav'

function CartItem() {
  const [productData, setProductData] = useState([]);
  const [count, setCoun] = useState(1);

  const { productId } = useParams();
  const [reloadNavBar, setReloadNavBar] = useState(false);
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("shopping-cart")) || [];

    if (cart) {
      let itemInCart = cart.find(
        (item) => item.prodctData.productId === productData.productId
      );

      if (itemInCart) {
        // eslint-disable-next-line array-callback-return
        cart = cart.map(function (item) {
          if (item.prodctData.productId === productData.productId) {
            return {
              ...item,
              quantity: item.quantity + count,
            };
          } else {
            cart = [
              ...cart,
              {
                productData,
                quantity: count,
              },
            ];
            localStorage.setItem("shopping-cart", JSON.stringify(cart));
          }
        });
      }
    } else {
      cart = [
        {
          productData,
          quantity: count,
        },
      ];
    }
    console.log(cart);

    setReloadNavBar(reloadNavBar);
      window.location.reload()
  };
  return (
    <>
      <div>
        <button onClick={addToCart()}>Add to cart</button>
      </div>
      <MainNav reloadNavBar={reloadNavBar} />
    </>
  );
}

export default CartItem;

import f22 from "/Images/f22.jpeg";
import f35 from "/Images/f33.jpeg";
import f42 from "/Images/f43.jpeg";
import f48 from "/Images/f48.jpeg";
import f47 from "/Images/f47.jpeg";
import f3 from "/Images/f3.jpeg";
import f9 from "/Images/f9.jpeg";
import f45 from "/Images/f45.jpeg";
function RecentOrders() {
  return (
    <>
      <div className="containr">
        <div className="product-grid-2">
          <div className="product-grid-2-cols">
            <h3 className="tertiary-header product-tertiary-header">
              Top selling Product
            </h3>
            <div className="product--nav">
              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li">Product</li>
                  <li className="product-li">Category</li>
                  <li className="product-li">Total Sales</li>
                  <li className="product-li">Stock</li>
                </ul>
              </nav>
              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li product--li product">
                    <img src={f22} alt="" className="product--img" />
                    Cozy Szn
                  </li>
                  <li className="product-li product--li">X1</li>
                  <li className="product-li product--li">$1,000</li>
                  <li className="product-li product--li in-stock">In Stock</li>
                </ul>
              </nav>
              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li product--li product">
                    <img src={f48} alt="" className="product--img" />
                    Palms Blanc
                  </li>
                  <li className="product-li product--li">X1</li>
                  <li className="product-li product--li">$800</li>
                  <li className="product-li product--li in-stock">In Stock</li>
                </ul>
              </nav>

              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li product--li product">
                    <img src={f42} alt="" className="product--img" />
                    XV Palms
                  </li>
                  <li className="product-li product--li">X1</li>
                  <li className="product-li product--li">$500</li>
                  <li className="product-li product--li out-of-stock">
                    Out of Stock
                  </li>
                </ul>
              </nav>

              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li product--li product">
                    <img src={f35} alt="" className="product--img" />
                    Freedom (Limited Edition)
                  </li>
                  <li className="product-li product--li">X1</li>
                  <li className="product-li product--li">$500</li>
                  <li className="product-li product--li in-stock">In Stock</li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="product-grid-2-cols">
            <h3 className="tertiary-header product-tertiary-header">
              Recent Orders
            </h3>
            <div className="product--nav product_nav">
              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li">Product</li>
                  <li className="product-li">Customer</li>
                  <li className="product-li">Price</li>
                  <li className="product-li">Delivery Date</li>
                </ul>
              </nav>

              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li product--li product">
                    <img src={f35} alt="" className="product--img" />
                    Freedom (Limited Edition)
                  </li>
                  <li className="product-li product--li">James Jones</li>
                  <li className="product-li product--li">$42.00</li>
                  <li className="product-li product--li">2024/25/06</li>
                </ul>
              </nav>

              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li product--li product">
                    <img src={f47} alt="" className="product--img" />
                    Pse Shorts Mini
                  </li>
                  <li className="product-li product--li">Matthew</li>
                  <li className="product-li product--li">$30.00</li>
                  <li className="product-li product--li ">2024/25/06</li>
                </ul>
              </nav>

              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li product--li product">
                    <img src={f3} alt="" className="product--img" />
                    Slpls Nights
                  </li>
                  <li className="product-li product--li">Paul Smith</li>
                  <li className="product-li product--li">$25.00</li>

                  <li className="product-li product--li">2024/25/06</li>
                </ul>
              </nav>

              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li product--li product">
                    <img src={f9} alt="" className="product--img" />
                    FVT Classic
                  </li>
                  <li className="product-li product--li">Bolaji Ologbon</li>
                  <li className="product-li product--li">$28.00</li>
                  <li className="product-li product--li">2024/28/06</li>
                </ul>
              </nav>

              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li product--li product">
                    <img src={f42} alt="" className="product--img" />
                    Xvarsity
                  </li>
                  <li className="product-li product--li">Queen McCall</li>
                  <li className="product-li product--li">$80.00</li>
                  <li className="product-li product--li">2024/23/06</li>
                </ul>
              </nav>
              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li product--li product">
                    <img src={f35} alt="" className="product--img" />
                    XV Sweatpants
                  </li>
                  <li className="product-li product--li">Ronnie Davies</li>
                  <li className="product-li product--li">$48.00</li>
                  <li className="product-li product--li ">2024/23/06</li>
                </ul>
              </nav>
              <nav className="product-nav">
                <ul className="product-ul">
                  <li className="product-li product--li product">
                    <img src={f45} alt="" className="product--img" />
                    Sac A Dos
                  </li>
                  <li className="product-li product--li">Omotayo A</li>
                  <li className="product-li product--li">$64.00</li>
                  <li className="product-li product--li"> 2024/20/06</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentOrders;

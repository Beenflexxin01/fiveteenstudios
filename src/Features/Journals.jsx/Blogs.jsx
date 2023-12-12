import { Link, NavLink } from "react-router-dom";
import f8 from "../../Images/f11.jpeg";
import f38 from "../../Images/f38.jpeg";
import f31 from "../../Images/f31.jpeg";
import f3 from "../../Images/f3.jpeg";
import f15 from "../../Images/f15.jpeg";
import f34 from "../../Images/f34.jpeg";
import f22 from "../../Images/f22.jpeg";
import Footer from "../../UI/Footer";
function Blogs() {
  return (
    <>
      <img src={f8} alt="" className="blog-image" />
      <div className=" blog">
        <h2 className="primary-header h2">PALMS BLANC</h2>
        <div className="design-div ">
          <p className="text-descriptions ">SEPTEMBER 22, 2023</p>
          <li className="text-descriptions  list">FEYI FAKOLADE</li>
        </div>
        <p className="text-description blog-text">
          Palms symbolize serenity, freedom, and unwavering strength, akin to
          nature's eternal witnesses.
        </p>
        <h2 className="secondary-header">The Design:</h2>
        <p className="text-description blog-text">
          Our design proudly displays the phrase "palms see everything" on the
          front, accompanied by a mesmerixing image of palms captured in the
          heart of Lagos. This design pays homage to our XV PALMS design with a
          darker hue for the image and a warm brownish tint, harmonizing
          seamlessly with a biege aesthetic.
        </p>
        <img src={f38} alt="" className="blog-img" />
        <h2 className="secondary-header">PALMS SEE EVERYTHING</h2>
        <p className="text-description blog-text">
          The phrase "Palms see everything" evokes a captivating idea: palm
          trees posses a unique ability to silently observe life's unfolding
          drama. When we envision relaxation, we picture travle, charming towns,
          sandy beaches, and, of course, iconic palm trees. These majestic
          sentinels symbolize peace, relaxation, freedom, and their enduring
          presence stands tall, silently chronicling the passage of countless
          years, seasons, people, and the ever-changing tapestry of life.
        </p>

        <h2 className="secondary-header">Inspiration:</h2>
        <p className="text-description blog-text">
          This design draws inspiration from the vibrant colors of summer,
          particulary the radiant shade of orange, while maintaining our
          consistent message of resilience and style.
        </p>
        <img src={f31} alt="" className="blog-img" />

        <h2 className="secondary-header">Significance & Meaning:</h2>
        <p className="text-description blog-text">
          This piece encapsulates the values of resilience, the art of
          navigating life one step at a time, and having faith in the natural
          process. It serves as a gentle reminder that there are forces beyod=nd
          our understanding at work, encouraging us to "Leave your worries under
          the palms."
        </p>

        <h2 className="secondary-header">Materials / Color:</h2>
        <p className="text-description blog-text">
          To enhance this design, we've chosen an elegant off-white color. This
          off-white hue beautifully compliments the vibrant orange text and the
          subtly brown-tinted image gracing the back.
        </p>
        <p className="text-description blog-text">
          <strong>Material:</strong> Fahioned from 100% cotton, our PALMS BLANC
          hoodie assures both comfort and durability, ensuring it becomes your
          trusted companion.
        </p>
        <p className="text-description blog-text">
          <strong>Printing:</strong> We employ direct-to-garment printing to
          ensure the highest quality, ensuring that your "PALMS SEE EVERYTHING"
          design stands out in all its glory.
        </p>
        <p className="text-description blog-text">
          Please{" "}
          <Link to="" className=" text-description">
            CLICK HERE
          </Link>{" "}
          to check out the product in our store.
        </p>
        <div className="blog-margin">
          <p className="text-description ">
            <Link to="/blog" className="text-description link">
              &larr; Back to blog
            </Link>
          </p>
        </div>
      </div>

      <div className="collections blog-collection">
        <div className="blog-form">
          <h2 className="secondary-header blog--margin">Leave a comment</h2>
          <form action="">
            <ul className="form-ul">
              <li className="form-li form-checkout">
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  className="input-contact-2 input-payment"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  className="input-contact-2 input-payment"
                />
              </li>
              <li className="form-li">
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Comment *"
                  required
                  className="input-contact-2 input-blog input-payment"></textarea>
              </li>
            </ul>
            <button className="btn btn-view btn-sign-in blog--margin">
              Post comment
            </button>
          </form>
        </div>
      </div>

      <div className="container">
        <h2 className="secondary-header">Featured Collection</h2>
        <div className="grid-4">
          <div className="grid-4-cols">
            <NavLink to="" className="nav-link">
              <img src={f22} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>COZY SZN</strong>
                </p>
                <p className="text-description">$60.00USD</p>
              </div>
            </NavLink>
          </div>

          <div className="grid-4-cols">
            <NavLink to="" className="nav-link">
              <img src={f34} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>FREEDOM (LIMITED EDITION)</strong>
                </p>
                <p className="text-description">$42.00USD</p>
              </div>
            </NavLink>
          </div>

          <div className="grid-4-cols">
            <NavLink to="" className="nav-link">
              <img src={f3} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description">
                  <strong>SLPLS NIGHTS</strong>
                </p>
                <p className="text-description">$25.00USD</p>
              </div>
            </NavLink>
          </div>

          <div className="grid-4-cols">
            <NavLink to="" className="nav-link">
              <img src={f15} alt="" className="grid-4-image" />

              <div className="text-align">
                <p className="text-description ">
                  <strong>TERRA ORANGE</strong>
                </p>
                <p className="text-description">$38.00USD</p>
              </div>
            </NavLink>
          </div>
        </div>
        <button className="btn btn-view ">View All</button>
      </div>

      <Footer />
    </>
  );
}

export default Blogs;

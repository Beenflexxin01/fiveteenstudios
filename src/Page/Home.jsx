import Arrivals from "../Features/Home/Arrivals/Arrivals";
import Content from "../Features/Home/Content";
import Footer from "../UI/Footer";
import Products from "../Features/Home/FeatureProducts/FeaturedProducts";
import Romans from "../Features/Home/Romans";

function Home() {
  return (
    <div>
      <Content />
      <Romans />
      <Arrivals />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;

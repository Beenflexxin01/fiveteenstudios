import Footer from "../../UI/Footer";
import SideBar from "../SideBar";
import DashboardAnalysis from "./DashboardAnalysis";
import ProductOverview from "./ProductOverview";
import RecentOrders from "./RecentOrders";

function Dashboard() {
  return (
    <>
      <SideBar />
      <DashboardAnalysis />
      <RecentOrders />
      <ProductOverview />
      <Footer />
    </>
  );
}

export default Dashboard;

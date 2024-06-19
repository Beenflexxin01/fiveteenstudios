import Footer from "../UI/Footer";
import Dashboard from "./Dashboard/Dashboard";
import SideBar from "./SideBar";

function AdminPanel() {
  return (
    <div>
      <SideBar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default AdminPanel;

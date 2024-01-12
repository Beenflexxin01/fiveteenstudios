import MainNav from "./MainNav";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />
      <MainNav reloader={false} />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;

import MainNav from "./MainNav";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout({cartCount, cart, setCart}) {
  return (
    <div>
      <Header />
      <MainNav cartCount={cartCount} cart={cart} setCart={setCart} />
      
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;

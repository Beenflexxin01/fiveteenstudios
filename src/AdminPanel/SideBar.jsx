import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="sidebar-ul">
            <li className="sidebar-l">
              <NavLink to="/admin" className="sidebar-link">
                Dashboard
              </NavLink>
            </li>
            <li className="sidebar-l">
              <NavLink to="/posting" className="sidebar-link">
                Add Products
              </NavLink>
            </li>
            <li className="sidebar-l">
              <NavLink to="/orders" className="sidebar-link">
                Orders
              </NavLink>
            </li>
            <li className="sidebar-l">
              <NavLink to="/settings" className="sidebar-link">
                Settings
              </NavLink>
            </li>
            <li className="sidebar-l">
              <NavLink to="/logout" className="sidebar-link">
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;

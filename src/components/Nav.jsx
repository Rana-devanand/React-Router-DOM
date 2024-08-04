import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-center gap-10 bg-zinc-200 p-3">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "#DC143B" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "#DC143B" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "#DC143B" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/service"
      >
        Service
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "#DC143B" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/post"
      >
        Post
      </NavLink>
    </nav>
  );
}

export default Nav;

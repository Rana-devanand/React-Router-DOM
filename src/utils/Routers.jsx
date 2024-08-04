import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import Service from "../components/Service";
import Post from "../components/Post";
import UserDetail from "../components/UserDetail";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/user/" element={<User />}>
        <Route path="/user/:name" element={<UserDetail />} />
      </Route>

      <Route path="/service" element={<Service />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}

export default Routers;

import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <div className=" mx-auto bg-green-300 h-screen p-2">
      <h1 className="text-2xl font-semibold">User</h1>

      <h4>List of users :</h4>

      <div className="p-2 flex flex-col ">
        <Link
          className="p-2 bg-red-400 w-32 rounded-lg text-white pl-4 mt-2"
          to="/user/raju"
        >
          Raju
        </Link>
        <Link
          className="p-2 bg-red-400 w-32 rounded-lg text-white pl-4 mt-2"
          to="/user/suresh"
        >
          Suresh
        </Link>
        <Link
          className="p-2 bg-red-400 w-32 rounded-lg text-white pl-4 mt-2"
          to="/user/kaliya"
        >
          Kaliya
        </Link>
        <Link
          className="p-2 bg-red-400 w-32 rounded-lg text-white pl-4 mt-2"
          to="/user/mahesh"
        >
          Mahesh
        </Link>
      </div>

      {/* <button className="px-4 py-1 bg-zinc-400 rounded-md">Go back</button> */}
      <hr />
      <Outlet />
    </div>
  );
}

export default User;

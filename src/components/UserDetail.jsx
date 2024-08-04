import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const backToUser = () => {
    // Navigate to the previous page using the navigate hook.
    // -1 represents the previous page in the history stack.
    // If there's no previous page, it will redirect to the root path.

    //     navigate(-1);
    navigate("/user");
  };

  return (
    <div className="bg-purple-400 h-screen px-3 p-2 mx-auto">
      <h1 className="text-2xl py-2">User Details</h1>
      <b>Hi {name}</b>
      <br />
      <button onClick={backToUser} className="px-2 py-1 rounded-md bg-zinc-100">
        Back to user
      </button>
    </div>
  );
}

export default UserDetail;

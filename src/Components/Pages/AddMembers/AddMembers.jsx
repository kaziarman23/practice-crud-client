import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddMembers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleAddMember = (e) => {
    e.preventDefault();

    // sending datas in the backend-server
    const member = { name, email, password };
    fetch("https://practice-crud-server-three.vercel.app/members", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(member),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "New Member Added",
            icon: "success",
            confirmButtonText: "Cool",
          });

          // clearing inputs
          setName("");
          setEmail("");
          setPassword("");
          navigate("/members");
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Add a Member</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleAddMember} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMembers;

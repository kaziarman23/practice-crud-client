import { useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Members = () => {
  const loadedData = useLoaderData();
  const [members, setMembers] = useState(loadedData);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://practice-crud-server-three.vercel.app/members/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingMembers = members.filter(
                (member) => member._id !== id
              );
              setMembers(remainingMembers);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-full h-screen">
      <div className="w-4/5 h-[550px] mx-auto border-2">
        <h1 className="p-3 font-bold text-center">
          Total Members: {members.length}
        </h1>
        <div className="h-auto">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className="border-y-2 ">
                <tr>
                  <th>SL:</th>
                  <th>Name:</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index}>
                    <th className="text-white">{index + 1}</th>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <Link to={`/update/${member._id}`}>
                          <button className="btn">Edit</button>
                        </Link>
                        <button
                          onClick={() => handleDelete(member._id)}
                          className="btn"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;

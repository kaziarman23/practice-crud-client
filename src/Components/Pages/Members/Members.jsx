import { useState } from "react";
import { useLoaderData } from "react-router";

const Members = () => {
  const loadedData = useLoaderData();
  const [members, setMembers] = useState(loadedData);
  console.log(loadedData);
  return (
    <div className="w-full h-screen">
      <div className="w-4/5 h-[550px] mx-auto border-2">
        <h1 className="p-3 font-bold text-center">
          Total Members: {loadedData.length}
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
                {loadedData.map((member, index) => (
                  <tr key={index}>
                    <th className="text-white">{index + 1}</th>
                    <td>{member.name}</td>
                    <td>{member.email}</td>
                    <td>
                      <div className="flex gap-2 items-center">
                        <button className="btn">Edit</button>
                        <button className="btn">Delete</button>
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

const Members = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-4/5 h-[550px] mx-auto border">
        <h1 className="p-3 font-bold text-center">Total Members: </h1>
        <div className="border-2 h-[500px] overflow-y-scroll">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>SL:</th>
                  <th>Name:</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td><button className="btn">Delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;

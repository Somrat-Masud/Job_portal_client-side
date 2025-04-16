import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const { applications } = useLoaderData();
  //   console.log(applications);
  console.log(useLoaderData());

  return (
    <div>
      <h2 className="text-3xl">
        Applications For The Jobs:{applications?.length || 0}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={app._id}>
                  <th>{index + 1}</th>
                  <td>{app.applicant_email}</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </h2>
    </div>
  );
};

export default ViewApplications;

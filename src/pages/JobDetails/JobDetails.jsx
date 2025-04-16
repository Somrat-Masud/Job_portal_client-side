import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, company, deadline } = useLoaderData();
  //   console.log(jobs);
  return (
    <div className="m-10">
      <h4 className="text-3xl">Jobs Details for {title}</h4>
      <p>apply for: {company}</p>
      <p>deadline: {deadline}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;

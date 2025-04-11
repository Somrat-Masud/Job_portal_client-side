import { FaMapMarkerAlt } from "react-icons/fa";
const HotJobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-2 m-2">
        <div>
          <figure>
            <img src={company_logo} />
          </figure>
        </div>
        <div className="text-2xl">
          <h4>{company}</h4>
          <p className="gap-2 flex items-center">
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill) => (
            <p className="border rounded-md text-center px-2 hover:text-purple-600 hover:bg-gray-400">
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end">
          <p>
            Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
          </p>

          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;

import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
const AddJobs = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          swal("Jobs Added Successfully");
        }
        navigate("/myPostedJobs");
      });
  };
  return (
    <div>
      <h2>Post A New Job</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleAddJob} className="card-body">
          {/* job title */}
          <fieldset className="fieldset">
            <label className="fieldset-label">Job Title</label>
            <input
              type="text"
              name="title"
              className="input"
              placeholder="Job Title"
            />
            {/* Job Location */}
            <label className="fieldset-label">Job Location</label>
            <input
              type="text"
              name="location"
              className="input"
              placeholder="Job Location"
            />
            {/* Job Type */}
            <label className="fieldset-label">Job Type</label>
            <select
              defaultValue="Server location"
              className="select select-neutral"
            >
              <option disabled={true}>Pik a Job Type</option>
              <option>Full-Time</option>
              <option>Intern</option>
              <option>Par-time</option>
            </select>
            {/* Job Field */}
            <label className="fieldset-label">Job Field</label>
            <select
              defaultValue="Server location"
              className="select select-neutral"
            >
              <option disabled={true}>Pik a Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
            {/* Salary Range */}
            <div className="grid grid-cols-1 lg:grid-cols-3 items-end gap-4">
              <div>
                <label className="fieldset-label">Salary Range</label>
                <input
                  type="text"
                  name="min"
                  className="input"
                  placeholder="Min"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="max"
                  className="input"
                  placeholder="max"
                />
              </div>
              {/* Job Currency */}
              <div>
                <select
                  defaultValue="Server location"
                  className="select select-neutral"
                  name="currency"
                >
                  <option disabled={true}>Pik a Job Currency</option>
                  <option>BDT</option>
                  <option>INR</option>
                  <option>USD</option>
                </select>
              </div>
            </div>
            {/* Job Description */}
            <label className="fieldset-label">Job Description</label>
            <textarea
              className="textarea textarea-ghost"
              type="text"
              name="description"
              placeholder="Job Description"
              required
            ></textarea>
            {/* Company Name */}
            <label className="fieldset-label">Company Name</label>
            <input
              type="text"
              name="company"
              className="input"
              placeholder="Company Name"
            />
            {/* Requirements */}
            <label className="fieldset-label">Requirements </label>
            <input
              type="text"
              name="requirements"
              className="input"
              placeholder="Requirements "
            />
            {/* Responsibilities */}
            <label className="fieldset-label">Responsibilities </label>
            <input
              type="text"
              name="responsibilities"
              className="input"
              placeholder="Responsibilities"
            />
            {/* HR_Name */}
            <label className="fieldset-label">HR_Name</label>
            <input
              type="text"
              name="hr_name"
              className="input"
              placeholder="HR_Name"
              required
            />
            {/* Application Deadline */}
            <label className="fieldset-label">Application Deadline</label>
            <input
              type="date"
              name="deadline"
              className="input"
              placeholder="Application Deadline"
            />
            {/* HR_Email */}
            <label className="fieldset-label">HR_Email</label>
            <input
              type="text"
              name="hr_email"
              className="input"
              placeholder="HR_Email"
              defaultValue={user?.email}
              required
            />
            {/* Company_Logo_url */}
            <label className="fieldset-label">Company_Logo_URL</label>
            <input
              type="text"
              name="company_logo_url"
              className="input"
              placeholder="Company_Logo_URL"
              required
            />
            <button className="btn btn-neutral mt-4">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;

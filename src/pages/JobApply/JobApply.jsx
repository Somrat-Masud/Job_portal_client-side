import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  console.log(id, user);
  const navigate = useNavigate();

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const LinkedIn = form.LinkedIn.value;
    const Github = form.Github.value;
    const Resume = form.Resume.value;
    console.log(LinkedIn, Github, Resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      LinkedIn,
      Github,
      Resume,
    };
    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Hello world!");
        }
        console.log(data);
      });
    navigate("/myApplications");
  };
  return (
    <div className="card bg-base-100 w-full  shadow-2xl">
      <h1 className="text-5xl font-bold text-center">
        Apply Job And Good Luck
      </h1>
      <form onSubmit={submitJobApplication} className="card-body ">
        <fieldset className="fieldset">
          <label className="fieldset-label">Linked In</label>
          <input
            type="url"
            name="LinkedIn"
            className="input"
            placeholder="LinkedIn Url"
          />
          <label className="fieldset-label">GitHub</label>
          <input
            type="url"
            name="Github"
            className="input"
            placeholder="GitHub Url"
          />

          <label className="fieldset-label">Resume </label>
          <input
            type="url"
            name="Resume"
            className="input"
            placeholder="Resume Url"
          />
          <button className="btn btn-neutral mt-4">Apply</button>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;

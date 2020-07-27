import React from "react";
import "./Job.css";

const Job = ({ job }) => {
  return (
    <div className="job-card">
      <div>
        <h3>
          {job.title} - <span>{new Date(job.created_at).toLocaleDateString()}</span>
        </h3>
        <span>{job.company}</span>
      </div>
      <div>
        <span>{job.type}</span>
        <span>{job.location}</span>
      </div>
      <div className="job-des">
        <p>{job.description}</p>
      </div>
    </div>
  );
};

export default Job;

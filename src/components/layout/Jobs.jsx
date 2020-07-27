import React, { useState } from "react";

import useFetchJobs from "./useFetchJobs";
import Spinner from "./Spinner";
import Job from "./Job";

function Jobs() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  return (
    <div>
      <h1>Jobs</h1>
      {loading && <Spinner />}
      {error && <h1>Error Try Refreshing</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job}></Job>;
      })}
    </div>
  );
}

export default Jobs;

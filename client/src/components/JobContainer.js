import React, { useEffect } from "react";
import Loading from "./Loading";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAppContext } from "../context/appContext";
const JobContainer = () => {
  const { getJobs, isLoading, jobs, totalJobs } = useAppContext();
  useEffect(() => {
    getJobs();
  }, []);
  if (isLoading) {
    return <Loading center={true} />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs to display</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job.__id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobContainer;

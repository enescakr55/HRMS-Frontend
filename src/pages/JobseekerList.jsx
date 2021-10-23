import React, { useState, useEffect } from "react";
import JobseekerService from "../services/jobseekerService";
import { Table, Button, Icon } from "semantic-ui-react";
import JobseekerListSchema from "./JobseekerListSchema";

export default function JobseekerList() {
  const [jobseekerDetails, setJobseekerDetails] = useState(null);
  useEffect(() => {
    let jobseekerService = new JobseekerService();
    jobseekerService.getAllJobseekerDetails().then((result) => {
      console.log(result.data.data);
      setJobseekerDetails(result.data.data);
    });
  }, []);
  return (
    <div>
        <p
          style={{
            fontFamily: "sans-serif",
            borderBottom: "2px solid #2185d0",
            fontSize: "20px",
            fontWeight: "bold",
            color:"#2185d0"
          }}
        >
         <Icon name="users" size="big"></Icon> İş Arayan Kişiler
        </p>
      {jobseekerDetails != null && (
        <JobseekerListSchema
          jobseekerDetails={jobseekerDetails}
        ></JobseekerListSchema>
      )}
      
    </div>
  );
}

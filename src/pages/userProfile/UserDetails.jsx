import React, { useEffect, useState } from "react";
import JobseekerService from "../../services/jobseekerService";
import UserDescription from "./UserDescription";
import UserProfilePicture from "./UserProfilePicture";

export default function UserDetails({ ...props }) {
  const [jobseeker, setJobseeker] = useState([]);

  let jobseekerService = new JobseekerService();
  useEffect(() => {
    jobseekerService.getJobseekerByUserId(props.userId).then((r) => {
      setJobseeker(r.data.data);
    });
  }, []);
  return (
    <div>
      <div>
        <div style={{ textAlign: "center", width: "200px" }}>
          <UserProfilePicture userId={props.userId}></UserProfilePicture>
          <div className="cvFullName fontMonospace">
            {jobseeker.firstName + " " + jobseeker.lastName}
          </div>
        </div>

        <UserDescription userId={props.userId}></UserDescription>
      </div>
    </div>
  );
}

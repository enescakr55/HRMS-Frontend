import React, { useEffect, useState } from "react";
import JobseekerService from "../../services/jobseekerService";
import UserService from "../../services/userService";
import UserDescription from "./UserDescription";
import UserLanguages from "./UserLanguages";
import UserProfilePicture from "./UserProfilePicture";
import UserSchools from "./UserSchools";
import { Icon } from "semantic-ui-react";
import UserExperiences from "./UserExperiences";
import UserPersonal from "./UserPersonal";
import UserSocials from "./UserSocials";

export default function UserDetails({ ...props }) {
  const [jobseeker, setJobseeker] = useState([]);
  const [user, setUser] = useState([]);
  let jobseekerService = new JobseekerService();
  let userService = new UserService();
  useEffect(() => {
    jobseekerService.getJobseekerByUserId(props.userId).then((r) => {
      setJobseeker(r.data.data);
    });
    userService.getUserById(props.userId).then(r=>{
      setUser(r.data.data);
    })
  }, []);
  return (
    <div>
      <div>
        <div style={{ width: "100%", background: "#e8e8e8", padding: "10px",borderRadius:"10px",boxShadow:"#d8d8d8 1px 1px 4px 2px",marginBottom:"10px" }}>
          <UserProfilePicture userId={props.userId}></UserProfilePicture>
          <div
            style={{
              display: "inline-block",
              width: "0px",
              height: "200px",
              verticalAlign: "top",
              marginLeft: "8px",
              marginRight: "8px",
              boxShadow:"0px 0px 3px 2px #868686"
            }}
          ></div>
        <UserPersonal userId={props.userId}></UserPersonal>
        </div>

        <UserDescription userId={props.userId}></UserDescription>
        <br></br>
        <UserSchools userId={props.userId}></UserSchools>
        <br></br>
        <UserLanguages userId={props.userId}></UserLanguages>
        <br></br>
        <UserExperiences userId={props.userId}></UserExperiences>
        <br></br>
        <UserSocials userId={props.userId}></UserSocials>
      </div>
    </div>
  );
}

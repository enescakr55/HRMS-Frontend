import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Grid, Image } from "semantic-ui-react";
import JobseekerService from "../services/jobseekerService";
import UserService from "../services/userService";

export default function JobseekerListSchema({ ...props }) {
    let say = 0;
  const [jobseekerDetails, setJobseekerDetails] = useState([]);
  useEffect(() => {
    setJobseekerDetails(props.jobseekerDetails);
  }, []);
  console.log("Jobseekers");
  console.log(jobseekerDetails);
  console.log("www");
  return (
    <div>
      <Grid>
        <Grid.Row style={{ justifyContent: "center" }}>
          {jobseekerDetails.map((detail) => (
            <div className="ListClass" key={say++} style={{textAlign:"center",position:"relative"}}>
              <div className="photoTopDiv"></div>
            <Image style={{objectFit:"contain",borderRadius:"50%",width:"100px",height:"100px",display:"inline-block",background:"black"}} src={detail.profileImage.imageUrl}></Image><br/>
            <font style={{marginTop:"10px",display:"inline-block"}} className="titleFont">{detail.jobseeker.firstName} {detail.jobseeker.lastName}</font><br/>
            <font><b>E-Posta Adresi</b> : {detail.user.email}</font>
            <Button color="youtube" style={{fontFamily:"sans-serif",marginTop:"10px"}} as={NavLink} to={"/user-profile/"+detail.user.id}>Profili Görüntüle</Button>
            </div>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

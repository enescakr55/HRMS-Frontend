import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Icon } from 'semantic-ui-react';
import JobseekerService from '../services/jobseekerService';
import JobseekerListSchema from './JobseekerListSchema';

export default function AdvertDetails() {
    let {advertId} = useParams();
    const [jobseekerDetails, setJobseekerDetails] = useState(null);
    let jobseekerService = new JobseekerService();
    useEffect(() => {
        jobseekerService.getJobseekerDetailsIfJobapply(advertId).then(result=>{
            setJobseekerDetails(result.data.data);
        })
    }, [])
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
         <Icon name="users" size="big"></Icon> Başvurular
         
        </p>
        <div style={{textAlign:"center"}}> 
        {jobseekerDetails != null && jobseekerDetails.length == 0 && <div style={{background:"rgb(81 119 199)",padding:"15px",fontSize:"20px",textAlign:"center",color:"white",borderRadius:"10px",maxWidth:"400px",width:"100%",display:"inline-block"}}><Icon name="info circle"></Icon>Bu ilan için bir başvuru yapılmamış</div>}
        {<br/>}
            {jobseekerDetails!=null &&(<JobseekerListSchema jobseekerDetails={jobseekerDetails}></JobseekerListSchema>)}
        </div></div>
    )
}

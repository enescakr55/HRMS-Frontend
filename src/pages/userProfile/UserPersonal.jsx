import React, { useEffect, useState } from 'react'
import { Icon } from 'semantic-ui-react';
import JobseekerService from '../../services/jobseekerService';
import UserService from '../../services/userService';

export default function UserPersonal({...props}) {
    
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
        <div style={{display:"inline-block"}}>
        {" "}
        <div style={{ display: "inline-block" }} className="cvTitleFont">
          Kişisel Bilgiler
        </div><br/>
        <div className="cvBlackFont" style={{marginTop:"10px"}}>
          {jobseeker != null && <div style={{marginBottom:"10px"}}><Icon name="user" color="red"></Icon><font className="cvDetailNameFont">Ad - Soyad :</font> <font>{jobseeker.firstName + " " + jobseeker.lastName}</font> </div>}
          {jobseeker != null && <div style={{marginBottom:"10px"}}><Icon name="phone" color="red"></Icon><font className="cvDetailNameFont">Telefon Numarası :</font> <font>{jobseeker.phoneNumber}</font> </div>}
          {jobseeker != null && <div><Icon name="mail" color="red"></Icon><font className="cvDetailNameFont">E Posta Adresi :</font> <font>{user.email}</font> </div>}
            
        </div>
      </div>
    )
}

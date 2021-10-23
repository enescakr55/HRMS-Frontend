import React, { useEffect, useState } from 'react'
import JobAdvertService from '../services/jobAdvertService'
import {
  Icon,
  Grid,
  Label,
  Popup,
  Button,
} from "semantic-ui-react";
import AdvertDetails from './AdvertDetails';
import { Link, NavLink } from 'react-router-dom';
export default function MyJobAdverts() {
    let jobAdvertService = new JobAdvertService;
    const [myJobAdverts, setMyJobAdverts] = useState([])
    const [jobAppliesCount, setJobAppliesCount] = useState([])
    function getMyJobAdvderts(){
        jobAdvertService.getMyJobAdverts().then(result=>{
            setMyJobAdverts(result.data.data);
        })
    }
    useEffect(() => {
        getMyJobAdvderts();
    },[])
    return (
        <div>
        <Grid>
        { myJobAdverts != null && <Grid.Row style={{ justifyContent: "center" }}>
          {myJobAdverts.map((j) => (
            <div className="ListClass" key={j.advertId}>
              <h3 style={{ margin: "0px" }}>
                <Icon name="building"></Icon>
                {j.employer.companyName}
                {!j.active &&  <Popup trigger={<Icon name="clock" style={{float:"right"}}></Icon>} position="right center" >Yetkili Onayı Bekleniyor</Popup>}
              </h3>
          
              <font style={{ color: "gray" }}>{j.role.roleName}</font>
              <br></br>
              <br></br>
              <p style={{ margin: "0px" }}>
                <strong>Şehir : </strong>
                {j.city.cityName}
              </p>
              <p style={{ margin: "0px" }}>
                <strong>Açıklama : </strong>
                {j.description}
              </p>
              <p>
                <strong>Maaş Aralığı :</strong>
                {j.minSalary} - {j.maxSalary}
              </p>
              <Label as="a" basic color="red">
                {j.jobTime.jobTimeName}
              </Label>
              <Label as="a" basic color="green">
                {j.jobType.jobTypeName}
              </Label><br/><br/>
              <Button as={NavLink} to={"/jobadvert-details/"+j.advertId} size="small" color="blue"> Başvurular </Button>
              <br></br>
            </div>
          ))}
        </Grid.Row> }
        </Grid>
        
        </div>
    )
}

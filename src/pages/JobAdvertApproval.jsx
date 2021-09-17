import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, Divider, Icon, Image } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdvertApproval() {
  let jobAdvertService = new JobAdvertService();
  const [jobAdverts, setJobAdverts] = useState([]);
  function jobAdvertApprove(jobadvert){
    jobAdvertService.jobAdvertApprove(jobadvert).then((p)=>{
      if(p.data.success){
        toast.success(p.data.message);
        getJobAdvertsIfNotActive();
      }else{
        toast.error(p.data.message);
      }
    },(p)=>{
      toast.error("İşlem başarısız");
    })
  }
  function getJobAdvertsIfNotActive(){
    jobAdvertService.getIfNotActive().then((p) => {
      if (p.data.success) {
        setJobAdverts(p.data.data);
      }
    },(error)=>{
      toast.error("İş ilanları alınırken bir hata oluştu");
    });
  }
  useEffect(
    () => {
      getJobAdvertsIfNotActive();
    },[]);

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
          Onay Bekleyen İlanlar
        </p>
        {jobAdverts.length == 0 && <div style={{textAlign:"center"}}><Icon name="info circle" size="big" color="blue"></Icon><p style={{position:"relative",top:"2px", color:"#2185d0",display:"inline-block",fontSize:"18px",fontWeight:"bold"}}>Onay bekleyen ilan yok</p></div> }
      <Card.Group>
        
      {jobAdverts.map((j) => (
                <Card key={j.advertId}>
                <Card.Content>
                  <Card.Header>{j.employer.companyName}</Card.Header>
                  <Card.Meta>{j.role.roleName}</Card.Meta>
                  <Card.Description>
                    <strong> Çalışma Zamanı : </strong> {j.jobTime.jobTimeName}
                    <br />
                    <strong> Çalışma Şekli : </strong> {j.jobType.jobTypeName}
                    <br />
                    <strong> Çalışma Yeri : </strong> {j.city.cityName}
                    <br />
                    <strong> Ücret Aralığı : </strong> {j.minSalary} - {j.maxSalary}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button color="green" color="green"onClick={()=>jobAdvertApprove(j)}>
                      <Icon name="check"></Icon> Onayla
                    </Button>
                    <Button color="red">
                    <Icon name="x"></Icon> Sil
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            
            ))}

      </Card.Group>
    </div>
  );
}

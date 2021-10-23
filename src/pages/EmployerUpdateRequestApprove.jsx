import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Grid, Icon, Segment } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function EmployerUpdateRequestApprove() {
  let employerService = new EmployerService();
  const [requests, setRequests] = useState([]);
  const [employers, setEmployers] = useState([]);
  useEffect(() => {
    employerService.getUpdateRequests().then((result) => {
      setRequests(result.data.data);
    });
  }, []);
  useEffect(() => {
    employerService.getEmployers().then((result) => {
      setEmployers(result.data.data);
    });
  }, []);
  function accept(req){
    employerService.applyUpdateRequest(req.id,1).then(result=>{
        result.data.success == true ? toast.success(result.data.message) : toast.error(result.data.message);
    })
  }
  function decline(req){
    employerService.applyUpdateRequest(req.id,0).then(result=>{
        result.data.success == true ? toast.dark(result.data.message) : toast.error(result.data.message);
    })
  }
  return (
    <div>
      <p
        style={{
          fontFamily: "sans-serif",
          borderBottom: "2px solid #2185d0",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#2185d0",
        }}
      >
        Onay Bekleyen Güncelleme Talepleri
      </p>
      
      {requests.length == 0 && <div style={{textAlign:"center"}}><Icon name="info circle" size="big" color="blue"></Icon><p style={{position:"relative",top:"2px", color:"#2185d0",display:"inline-block",fontSize:"18px",fontWeight:"bold"}}>Onay bekleyen güncelleme talebi yok</p></div>}
      {requests.map((request) => (
        <Segment key={request.id}>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <font className="titleFont">Şirket Bilgileri</font>
                <br />
                <font className="normalFont">Şirket Adı : </font>
                <font>
                  {employers.filter((p) => p.employerid == request.employerid).length > 0 &&
                    employers.filter(
                      (p) => p.employerid == request.employerid
                    )[0].companyName
                  }
                </font>
                <br />
                <font className="normalFont">Şirket Websitesi : </font>
                <font>
                  {employers.filter((p) => p.employerid == request.employerid).length > 0 &&
                    employers.filter(
                      (p) => p.employerid == request.employerid
                    )[0].website
                  }
                </font>
                <br />
                <font className="normalFont">Şirket Telefonu : </font>
                <font>
                  {employers.filter((p) => p.employerid == request.employerid).length > 0 && employers.filter((p) => p.employerid == request.employerid)[0].phoneNumber}
                </font>
                <br />
              </Grid.Column>
              <Grid.Column>
                <font className="titleFont">Yeni Bilgiler</font>
                <br />
                <font className="normalFont">Şirket Adı : </font>
                <font>{request.companyName}</font>
                <br />
                <font className="normalFont">Şirket Websitesi : </font>
                <font>{request.website}</font>
                <br />
                <font className="normalFont">Şirket Telefonu : </font>
                <font>{request.phoneNumber}</font>
                <br />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column>
                <Button fluid color="green" onClick={()=>accept(request)}>
                   Güncelleme talebini onayla
                </Button>
                </Grid.Column>
                <Grid.Column>
                <Button fluid color="red" onClick={()=>decline(request)}>
                    Güncelleme talebini reddet
                </Button>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      ))}
    </div>
  );
}

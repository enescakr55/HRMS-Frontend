import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Card, Container, Button, Icon } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

export default function FavoriteJobAdverts() {
  let jobAdvertService = new JobAdvertService();
  const [favoriteJobAdverts, setFavoriteJobAdverts] = useState([]);
  function getFavoriteJobAdverts() {
    jobAdvertService.getFavorites().then((result) => {
      setFavoriteJobAdverts(result.data.data);
    });
  }

  useEffect(() => {
    getFavoriteJobAdverts();
  }, []);
  function removeFavorite(id){
    jobAdvertService.removeFavorite(id).then((result)=>{
      if(result.data.success){
        toast.success("İlan favorilerinizden kaldırıldı");
        getFavoriteJobAdverts();
      }
    })
  }
  return (
    <div>
      <Container>
      <p
          style={{
            fontFamily: "sans-serif",
            borderBottom: "2px solid #2185d0",
            fontSize: "20px",
            fontWeight: "bold",
            color:"#2185d0"
          }}
        >
          Favori İlanlarınız
        </p>
        <Card.Group>
          {favoriteJobAdverts.map((j) => (
            <Card key={j.jobAdvert.advertId}>
              <Card.Content>
                <Card.Header>{j.jobAdvert.employer.companyName}</Card.Header>
                <Card.Meta>{j.jobAdvert.role.roleName}</Card.Meta>
                <Card.Description>
                  <strong> Çalışma Zamanı : </strong> {j.jobAdvert.jobTime.jobTimeName}
                  <br />
                  <strong> Çalışma Şekli : </strong> {j.jobAdvert.jobType.jobTypeName}
                  <br />
                  <strong> Çalışma Yeri : </strong> {j.jobAdvert.city.cityName}
                  <br />
                  <strong> Ücret Aralığı : </strong> {j.jobAdvert.minSalary} -{j.jobAdvert.maxSalary}
                  {j.maxSalary}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button
                    color="blue"
                    onClick={() => removeFavorite(j.jobAdvert.advertId)}
                  >
                    <Icon name="star outline" color="yellow"></Icon> Favorilerden Kaldır
                  </Button>
                  <Button color="green">
                    <Icon name="mouse pointer"></Icon> Başvur
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    </div>
  );
}

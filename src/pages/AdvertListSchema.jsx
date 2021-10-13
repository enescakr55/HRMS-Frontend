import { setIn } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import {
  Table,
  Button,
  Icon,
  Pagination,
  Dropdown,
  Grid,
  Segment,
  Label,
  Divider,
  Container,
} from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";
import JobApplyService from "../services/jobApplyService";
export default function AdvertListSchema({ ...props }) {
  console.log(props);

  const account = useSelector((state) => state.account);
  const [jobadverts, setJobadverts] = useState([]);
  const [filteredJobAdverts, setfilteredJobAdverts] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [perPageObject, setPerPageObject] = useState(10);
  const [favorites, setFavorites] = useState([]);
  let jobAdvertService = new JobAdvertService();

  useEffect(() => {
    if (props.listType === "all") {
      var getDatas = jobAdvertService.getJobAdverts();
      getDatas.then((result) => {
        setJobadverts(result.data.data);
        setpageCount(Math.ceil(result.data.data.length / perPageObject));
        setfilteredJobAdverts(result.data.data.slice(0, perPageObject));
        console.log(result.data.data);
      });
    } else if (props.listType === "favorites") {
      var getDatas = jobAdvertService.getFavorites();
      getDatas.then((result) => {
        let xjobAdverts = new Array();
        for (let index = 0; index < result.data.data.length; index++) {
        xjobAdverts[index] = result.data.data[index].jobAdvert;
        }
        setJobadverts(xjobAdverts);
        setpageCount(Math.ceil(xjobAdverts.length / perPageObject));
        setfilteredJobAdverts(xjobAdverts.slice(0, perPageObject));
      });
    }
  }, []);

  function favGuncelle() {
    var fav = jobAdvertService.getFavorites();
    fav.then((result) => {
      setFavorites(result.data.data);
      console.log("Favoriler");
      console.log(result.data.data);
    });
  }
  useEffect(() => {
    favGuncelle();
  }, []);
  function addFavorites(advertid) {
    jobAdvertService.addFavorite(advertid).then((result) => {
      if (result.data.success) {
        toast.success(result.data.message);
        favGuncelle();
      } else {
        toast.error("İşlem başarısız");
      }
    });
  }
  function removeFavorites(advertid) {
    jobAdvertService.removeFavorite(advertid).then((result) => {
      if (result.data.success) {
        toast.success(result.data.message);
        favGuncelle();
      } else {
        toast.error("İşlem başarısız");
      }
    });
  }
  const options = [
    { key: 1, text: "10", value: 10 },
    { key: 2, text: "20", value: 20 },
    { key: 3, text: "50", value: 50 },
    { key: 4, text: "100", value: 100 },
  ];
  function findPageCount() {
    setpageCount(Math.ceil(jobadverts.length / perPageObject));
  }
  function perPageChange(p) {
    if (p == 10 || p == 20 || p == 50 || p == 100) {
      setPerPageObject(p);
      var getDatas = jobAdvertService.getJobAdverts();
      getDatas.then((result) => {
        setJobadverts(result.data.data);
        setpageCount(Math.ceil(result.data.data.length / p));
        setfilteredJobAdverts(result.data.data.slice(0, p));
        setActivePage(1);
      });
    }
  }

  function changeActivePage(page) {
    setActivePage(page);
    if (jobadverts.length > 0) {
      setfilteredJobAdverts(
        jobadverts.slice(
          (page - 1) * perPageObject,
          (page - 1) * perPageObject + perPageObject
        )
      );
    }
  }
  function filter() {}
  function show() {
    console.log(jobadverts);
    console.log(activePage);
    console.log(pageCount);
  }
  function applyJob(jobAdvert) {
    let jobApplyService = new JobApplyService();
    jobApplyService.applyJob(jobAdvert).then(
      (p) => {
        if (p.data.success) {
          toast.success(p.data.message);
        } else {
          toast.error(p.data.message);
        }
      },
      (error) => {
        toast.error("Başvuru yapılamadı");
      }
    );
  }
  return (
    <div>
      <h2 style={{ borderBottom: "red 3px solid", color: "red" }}>
        İş İlanları
      </h2>
      <Grid>
        <Grid.Row style={{ justifyContent: "center" }}>
          {filteredJobAdverts.map((j) => (
            <div className="ListClass" key={j.advertId}>
              {account.logged && (
                <div>
                  {favorites.filter((p) => p.jobAdvert.advertId == j.advertId)
                    .length > 0 ? (
                    <Label
                      onClick={() => removeFavorites(j.advertId)}
                      color="black"
                      style={{ float: "right", cursor: "pointer" }}
                    >
                      <Icon name="star"></Icon>Favorilerden kaldır
                    </Label>
                  ) : (
                    <Label
                      onClick={() => addFavorites(j.advertId)}
                      color="black"
                      style={{ float: "right", cursor: "pointer" }}
                    >
                      <Icon name="star"></Icon>Favorilere Ekle
                    </Label>
                  )}
                </div>
              )}
              <h3 style={{ margin: "0px" }}>
                <Icon name="building"></Icon>
                {j.employer.companyName}
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
                {j.minSalary > 0 && j.maxSalary > 0 ? (
                  <font>
                    <strong>Maaş Aralığı : </strong>
                    {j.minSalary} - {j.maxSalary}
                  </font>
                ) : (
                  ""
                )}
                {j.minSalary > 0 && j.maxSalary == 0 ? (
                  <font>
                    <strong>Minimum Ücret : </strong>
                    {j.minSalary}
                  </font>
                ) : (
                  ""
                )}
                {j.minSalary == 0 && j.maxSalary > 0 ? (
                  <font>
                    <strong>Maksimum Ücret : </strong>
                    {j.maxSalary}
                  </font>
                ) : (
                  ""
                )}
              </p>
              <Label as="a" basic color="red">
                {j.jobTime.jobTimeName}
              </Label>
              <Label as="a" basic color="green">
                {j.jobType.jobTypeName}
              </Label>
              <br></br>

              {account.logged && (
                <Button
                  color="facebook"
                  style={{ marginTop: "10px", height: "37px" }}
                  onClick={() => applyJob(j)}
                >
                  <Icon name="mouse pointer"></Icon>Başvur
                </Button>
              )}
            </div>
          ))}
        </Grid.Row>
        <Grid.Row>
          {" "}
          <div
            style={{
              fontWeight: "bold",
              padding: "8px",
              boxShadow: "#a4a4a4 0px 0px 2px 1px",
              display: "inline-block",
              marginRight: "10px",
            }}
          >
            <Icon name="info"></Icon>
            Toplam {jobadverts.length} iş ilanı mevcut.
          </div>
          <div style={{ verticalAlign: "middle" }}>
            <b> Kaç Öğe Görüntülensin </b>
            <Dropdown
              style={{ marginRight: "10px", padding: "8px" }}
              item
              options={options}
              defaultValue={10}
              onChange={(e, data) => perPageChange(data.value)}
            />
            <Pagination
              totalPages={pageCount}
              activePage={activePage}
              onPageChange={(e, data) => changeActivePage(data.activePage)}
            />
          </div>
        </Grid.Row>
      </Grid>
    </div>
  );
}

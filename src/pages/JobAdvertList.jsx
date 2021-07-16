import { setIn } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { Table, Button, Icon, Pagination, Dropdown } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdvertList() {
  const [jobadverts, setJobadverts] = useState([]);
  const [filteredJobAdverts, setfilteredJobAdverts] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [perPageObject, setPerPageObject] = useState(10);
  let jobAdvertService = new JobAdvertService();
  useEffect(() => {
    var getDatas = jobAdvertService.getJobAdverts();
    getDatas.then((result) => {
      setJobadverts(result.data.data);
      setpageCount(Math.ceil(result.data.data.length / perPageObject));
      setfilteredJobAdverts(result.data.data.slice(0, perPageObject));
    });
  }, []);
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
    if (p == 10 || p == 20 || p == 50) {
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

  return (
    <div>
      <div className="employersMainDiv" style={{}}>
        <p
          style={{
            fontFamily: "sans-serif",
            borderBottom: "2px solid #2185d0",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#2185d0",
          }}
        >
          İş İlanları
        </p>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <Icon name="building outline" size="big" />
                Şirket Adı
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Icon name="home" size="big" />
                Şehir
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Icon name="question circle outline" size="big" />
                Pozisyon
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Icon name="money" size="big" />
                Minimum Ücret
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Icon name="money" size="big" />
                Maksimum Ücret
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Icon name="users" size="big" />
                Açık Pozisyon Sayısı
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filteredJobAdverts.map((jobadvert) => (
              <Table.Row key={jobadvert.advertId}>
                <Table.Cell>{jobadvert.employer.companyName}</Table.Cell>
                <Table.Cell>{jobadvert.city.cityName}</Table.Cell>
                <Table.Cell>{jobadvert.role.roleName}</Table.Cell>
                <Table.Cell>{jobadvert.minSalary}</Table.Cell>
                <Table.Cell>{jobadvert.maxSalary}</Table.Cell>
                <Table.Cell>{jobadvert.openPositionNumber}</Table.Cell>
              </Table.Row>
            ))}
            <Table.Row>
              <Table.Cell colSpan="4">
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
                <b> Kaç Öğe Görüntülensin </b>
                <Dropdown
                  style={{ marginRight: "10px",padding:"8px"}}
                  item
                  options={options}
                  defaultValue={10}
                  
                  onChange={(e, data) => perPageChange(data.value)}
                />
              </Table.Cell>
              <Table.Cell colSpan="6">
                <Pagination
                  totalPages={pageCount}
                  activePage={activePage}
                  onPageChange={(e, data) => changeActivePage(data.activePage)}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

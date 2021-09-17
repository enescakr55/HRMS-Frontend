import React, { useEffect } from "react";
import { useState } from "react";
import EmployerService from "../services/employerService";
import { Table, Button, Icon } from "semantic-ui-react";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);
  console.log(employers);

  return (
    <div>
      <div className="employersMainDiv" style={{}}>
        <p
          style={{
            fontFamily: "sans-serif",
            borderBottom: "2px solid #2185d0",
            fontSize: "20px",
            fontWeight: "bold",
            color:"#2185d0"
          }}
        >
          Şirketler
        </p>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <Icon name="building outline" size="big" />
                Şirket Adı
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Icon name="world" size="big" />
                Websitesi
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Icon name="phone" size="big" />
                Telefon Numarası
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {employers.map((employer) => (
              <Table.Row key={employer.employerid}>
                <Table.Cell>{employer.companyName}</Table.Cell>
                <Table.Cell>{employer.website}</Table.Cell>
                <Table.Cell>{employer.phoneNumber}</Table.Cell>
              </Table.Row>
            ))}
            <Table.Row >
              <Table.Cell colSpan="2"><div style={{fontWeight:"bold",padding:"8px",boxShadow:"#a4a4a4 0px 0px 2px 1px",display:"inline-block"}}><Icon name="info"></Icon>{employers.length} şirket listelendi</div></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

import React, { useState,useEffect } from 'react'
import JobseekerService from '../services/jobseekerService'
import { Table, Button, Icon } from "semantic-ui-react";

export default function JobseekerList() {
    const [jobseekers, setjobseekers] = useState([]);
    useEffect(() => {
        let jobseekerService = new JobseekerService();
        jobseekerService.getJobseekers().then((result)=>setjobseekers(result.data.data));
    },[])
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
         <Icon name="users" size="big"></Icon> İş Arayan Kişiler
        </p>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                
                Adı
              </Table.HeaderCell>
              <Table.HeaderCell>
              
                Soyadı
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {jobseekers.map((jobseeker) => (
              <Table.Row key={jobseeker.jobseekerId}>
                <Table.Cell>{jobseeker.firstName}</Table.Cell>
                <Table.Cell>{jobseeker.lastName}</Table.Cell>
              </Table.Row>
            ))}
            <Table.Row >
              <Table.Cell colSpan="2"><div style={{fontWeight:"bold",padding:"8px",boxShadow:"#a4a4a4 0px 0px 2px 1px",display:"inline-block"}}><Icon name="info"></Icon>{jobseekers.length} iş arayan listelendi</div></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
        </div>
    )
}

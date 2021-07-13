import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormField,Table,Icon, TableCell } from "semantic-ui-react";
import * as Yup from "yup";
import JobRoleService from "../services/jobRoleService";
import FrmTextInput from "../utilities/customFormControls/FrmTextInput";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function JobRoleManagement() {
    const [JobRoles, setJobRoles] = useState([])
  const initialValues = { roleName: "" };
  const schema = Yup.object({
    roleName: Yup.string().required("Rol adı boş bırakılamaz"),
  });
  let jobRoleService = new JobRoleService();
  function rolSil(roleid) {
      jobRoleService.deleteRole(roleid).then((result) => result.data.success ? toast.success(result.data.message) && rolleriGuncelle() : toast.error(result.data.message),(result)=>toast.error("Bir hata oluştu"));
  }
  function rolleriGuncelle(){
    jobRoleService.getRoles().then((result) => setJobRoles(result.data.data));
  }
  useEffect(() => {
    jobRoleService.getRoles().then((result) => setJobRoles(result.data.data));
  },[])
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
          Çalışma Pozisyonlarını Düzenle
        </p>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          jobRoleService.addRole(values).then((p) => 
          {
              rolleriGuncelle();
            p.data.success
              ? toast.success(p.data.message)
              : toast.error(p.data.message);
          });
        }}
      >
        <Form className="ui form">
          <FrmTextInput name="roleName" placeholder="Rol Adı"></FrmTextInput>
          <br />
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
      <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <Icon name="building outline" size="big" />
                Mevcut Çalışma Pozisyonları
              </Table.HeaderCell>
              <Table.HeaderCell>
              <Icon name="trash alternate outline" size="big" />
                Sil
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {JobRoles.map((role) => (
              <Table.Row key={role.roleId}>
                <Table.Cell>{role.roleName}</Table.Cell>
                <Table.Cell>{<Button color="red" onClick={()=>rolSil(role.id)}>Sil</Button>}</Table.Cell>
              </Table.Row>
            ))}
            <Table.Row >
              <Table.Cell colSpan="2"><div style={{fontWeight:"bold",padding:"8px",boxShadow:"#a4a4a4 0px 0px 2px 1px",display:"inline-block"}}><Icon name="info"></Icon>{JobRoles.length} adet çalışma pozisyonu mevcut</div></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    </div>
  );
}

import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import CvService from "../../services/cvService";
import JobRoleService from "../../services/jobRoleService";
import SelectboxService from "../../services/SelectboxService";
import FrmDateInput from "../../utilities/customFormControls/FrmDateInput";
import FrmSelectInput from "../../utilities/customFormControls/FrmSelectInput";
import FrmTextInput from "../../utilities/customFormControls/FrmTextInput";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Button } from "semantic-ui-react";
export default function UserExperienceEdit() {
  let cvService = new CvService();
  let selbox = new SelectboxService();
  const [roles, setRoles] = useState([]);
  let roleService = new JobRoleService();
  useEffect(() => {
    roleService.getRoles().then((result) => {
      setRoles(selbox.setValueAndText(result.data.data, "id", "roleName"));
    });
  }, []);
  let initialValues = {
    jobseekerId: "0",
    companyName: "",
    roleId: "",
    description: "",
    endDate: "",
    startDate: "",
  };
  let schema = Yup.object({
    companyName: Yup.string().required(),
    startDate: Yup.date().required(),
    endDate: Yup.date(),
    roleId: Yup.number()
  });
  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={(values) => {
          cvService.addMyExperience(values).then(
            (res) => {
                console.log(values);
              res.data.success
                ? toast.success("Başarıyla Eklendi")
                : toast.error("Bir hata oluştu");
            },
            () => {
              toast.error("Bir hata oluştu");
            }
          );
        }}
      >
        <Form className="form ui">
          <label>Şirket Adı</label>
          <FrmTextInput name="companyName"></FrmTextInput>
          <label>Pozisyon</label>
          <FrmSelectInput name="roleId" opt={roles}></FrmSelectInput>
          <label>Başlangıç Tarihi</label>
          <FrmDateInput type="date" name="startDate"></FrmDateInput>
          <label>Ayrılma Tarihi (Devam ediyorsanız boş bırakabilirsiniz)</label>
          <FrmDateInput type="date" name="endDate"></FrmDateInput>
          <br />
          <Button type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}

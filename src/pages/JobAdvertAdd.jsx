import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CityService from "../services/cityService";
import EmployerService from "../services/employerService";
import JobAdvertService from "../services/jobAdvertService";
import JobRoleService from "../services/jobRoleService";
import JobTimeService from "../services/jobTimeService";
import JobTypeService from "../services/jobTypeService";
import SelectboxService from "../services/SelectboxService";
import FrmDateInput from "../utilities/customFormControls/FrmDateInput";
import FrmSelectInput from "../utilities/customFormControls/FrmSelectInput";
import FrmTextInput from "../utilities/customFormControls/FrmTextInput";

export default function JobAdvertAdd() {
  let selbox = new SelectboxService();
  const [jobTimes, setJobTimes] = useState([]);
  let jobTimeService = new JobTimeService();
  useEffect(() => {
    jobTimeService.getAll().then((result) => {
      setJobTimes(
        selbox.setValueAndText(result.data.data, "jobTimeId", "jobTimeName")
      );
    });
  }, []);
  const [jobTypes, setjobTypes] = useState([]);
  let jobTypeService = new JobTypeService();
  useEffect(() => {
    jobTypeService.getAll().then((result) => {
      setjobTypes(
        selbox.setValueAndText(result.data.data, "jobTypeId", "jobTypeName")
      );
    });
  }, []);
  const [cities, setCities] = useState([]);
  let cityService = new CityService();
  useEffect(() => {
    cityService.getAll().then((result) => {
      console.log("sehirler");
      console.log(result.data.data);
      setCities(selbox.setValueAndText(result.data.data, "cityId", "cityName"));
    });
  }, []);
  const [roles, setRoles] = useState([]);
  let roleService = new JobRoleService();
  useEffect(() => {
    roleService.getRoles().then((result) => {
      setRoles(selbox.setValueAndText(result.data.data, "id", "roleName"));
    });
  }, []);
  const [employers, setEmployers] = useState([]);
  let employerService = new EmployerService();
  useEffect(() => {
    employerService.getEmployers().then((result) => {
      setEmployers(
        selbox.setValueAndText(result.data.data, "employerid", "companyName")
      );
    });
  }, []);
  let jobAdvertService = new JobAdvertService();
  let initialValues = {
    employerid: "",
    roleId: "",
    cityId: "",
    maxSalary: "",
    minSalary: "",
    description: "",
    openPositionNumber: "",
    lastDate: "",
    active: false,
    jobTimeId: "",
    jobTypeId: "",
    lastDate: "",
  };
  let schema = Yup.object({
    maxSalary: Yup.number(),
    minSalary: Yup.number(),
    openPositionNumber: Yup.number().required("Bu öğe boş bırakılamaz"),
    description: Yup.string().required("Bu öğe boş bırakılamaz"),
    lastDate: Yup.date().required("Bu öğe boş bırakılamaz"),
  });
  return (
    <div>
      <h2>İş İlanı Ekle</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          console.log("result");
          jobAdvertService.addJobAdvert(values).then((result, q) => {
            result.data.success == true
              ? toast.success("İş ilanı eklendi")
              : toast.error("İş ilanı eklenemedi");
          });
        }}
      >
        <Form className="form ui">
          <label>Çalışma Zamanı</label>
          <FrmSelectInput name="jobTimeId" opt={jobTimes}></FrmSelectInput>
          <br />
          <label>Çalışma Yeri</label>
          <FrmSelectInput name="jobTypeId" opt={jobTypes}></FrmSelectInput>
          <br />
          <label>Şehir</label>
          <FrmSelectInput name="cityId" opt={cities}></FrmSelectInput>
          <br />
          <label>Pozisyon</label>
          <FrmSelectInput name="roleId" opt={roles}></FrmSelectInput>
          <br />
          <label>Çalışma Şirket</label>
          <FrmSelectInput name="employerid" opt={employers}></FrmSelectInput>
          <br />
          <label>Pozisyona alınacak kişi sayısı</label>
          <FrmTextInput name="openPositionNumber"></FrmTextInput>
          <br />
          <label>Açıklama</label>
          <FrmTextInput name="description"></FrmTextInput>
          <br />
          <label>Minimum Ücret</label>
          <FrmTextInput name="minSalary"></FrmTextInput>
          <br />
          <label>Maksimum Ücret</label>
          <FrmTextInput name="maxSalary"></FrmTextInput>
          <br />
          <label>Son Başvuru Tarihi</label>
          <FrmDateInput name="lastDate" type="date"></FrmDateInput>
          <br />
          <button type="submit">İlanı Ekle</button>
        </Form>
      </Formik>
    </div>
  );
}

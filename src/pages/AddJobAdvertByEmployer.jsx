import { Form, Formik } from "formik";
import React,{useEffect,useState} from "react";
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

export default function AddJobAdvertByEmployer() {
  let selbox =  new SelectboxService;
  const [jobTimes, setJobTimes] = useState([]);
  let jobTimeService = new JobTimeService;
  useEffect(() => {
    jobTimeService.getAll().then(result=>{
      setJobTimes(selbox.setValueAndText(result.data.data,"jobTimeId","jobTimeName"));
    })
  }, []);
  const [jobTypes, setjobTypes] = useState([]);
  let jobTypeService = new JobTypeService;
  useEffect(() => {
    jobTypeService.getAll().then(result=>{
      setjobTypes(selbox.setValueAndText(result.data.data,"jobTypeId","jobTypeName"));
    })
  }, []);
  const [cities, setCities] = useState([]);
  let cityService = new CityService;
  useEffect(() => {
    cityService.getAll().then(result=>{
      console.log("sehirler");
      console.log(result.data.data);
      setCities(selbox.setValueAndText(result.data.data,"cityId","cityName"));
    })
  }, []);
  const [roles, setRoles] = useState([]);
  let roleService = new JobRoleService;
  useEffect(() => {
    roleService.getRoles().then(result=>{
      setRoles(selbox.setValueAndText(result.data.data,"id","roleName"));
    })
  }, [])
  let jobAdvertService = new JobAdvertService();
  let initialValues = {
    employerId:"0",
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
    lastDate:"",
    closed:false,
  };
  let schema = Yup.object({
    maxSalary: Yup.number(),
    minSalary: Yup.number(),
    openPositionNumber: Yup.number().required("Bu ????e bo?? b??rak??lamaz"),
    description: Yup.string().required("Bu ????e bo?? b??rak??lamaz"),
    lastDate:Yup.date().required("Son ba??vuru tarihi bo?? olamaz")
  });
  return (
    <div>
      <h2>???? ??lan?? Ekle</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          jobAdvertService.addJobAdvertByEmployer(values).then((result,q)=>{
            result.data.success == true ? toast.success("???? ilan?? eklendi.Yetkili onay??ndan sonra listelenecektir.") : toast.error("???? ilan?? eklenemedi");
        });
        }}
      >
        <Form className="form ui">
          <label>??al????ma Zaman??</label>
            <FrmSelectInput name="jobTimeId" opt={jobTimes}></FrmSelectInput><br/>
            <label>??al????ma Yeri</label>
            <FrmSelectInput name="jobTypeId" opt={jobTypes}></FrmSelectInput><br/>
            <label>??ehir</label>
            <FrmSelectInput name="cityId" opt={cities}></FrmSelectInput><br/>
            <label>Pozisyon</label>
            <FrmSelectInput name="roleId" opt={roles}></FrmSelectInput><br/>
            <label>Pozisyona al??nacak ki??i say??s??</label>
            <FrmTextInput name="openPositionNumber"></FrmTextInput><br/>
            <label>A????klama</label>
            <FrmTextInput name="description"></FrmTextInput><br/>
            <label>Minimum ??cret</label>
            <FrmTextInput name="minSalary"></FrmTextInput><br/>
            <label>Maksimum ??cret</label>
            <FrmTextInput name="maxSalary"></FrmTextInput><br/>
            <label>Son Ba??vuru Tarihi</label>
            <FrmDateInput name="lastDate" type="date"></FrmDateInput><br/>
            <button type="submit">??lan?? Ekle</button>
        </Form>
      </Formik>
    </div>
  );
}

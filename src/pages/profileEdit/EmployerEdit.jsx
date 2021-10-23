import React, { useEffect, useState } from "react";
import EmployerService from "../../services/employerService";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FrmTextInput from "../../utilities/customFormControls/FrmTextInput";
import { Button } from "semantic-ui-react";
import { toast } from "react-toastify";
export default function EmployerEdit() {
  const [currentEmployer, setCurrentEmployer] = useState([]);
  const [loaded, setLoaded] = useState(false)
  let employerService = new EmployerService();
  useEffect(() => {
    employerService.me().then((result) => {
      setCurrentEmployer(result.data.data);
      setLoaded(true);
    });
  }, []);
  let initialValues = {
    companyName: currentEmployer.companyName,
    website: currentEmployer.website,
    phoneNumber: currentEmployer.phoneNumber,
  };
  let schema = Yup.object({
    companyName: Yup.string().required(),
    website: Yup.string().required(),
    phoneNumber: Yup.string().required(),
  });
  function editProfile(employerInfo) {
      let changed = 0;
      if(employerInfo.companyName.toLowerCase() !== currentEmployer.companyName.toLowerCase()){
        changed = 1;
      }
      if(employerInfo.website.toLowerCase() !== currentEmployer.website.toLowerCase()){
        changed = 1;
      }
      if(employerInfo.phoneNumber.toLowerCase() !== currentEmployer.phoneNumber.toLowerCase()){
        changed = 1;
      }
      if(changed == 1){
          employerService.update(employerInfo).then(result=>{
            if(result.data.success){
              return toast.success(result.data.message);
            }else{
              return toast.error(result.data.message);
            }
          })
      }else{
          toast.dark("Herhangi bir değişiklik tespit edilmedi")
      }
    console.log(employerInfo);
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
        Şirket Bilgilerini Güncelle
      </p>
      {loaded == true && <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          editProfile(values);
        }}
      >
        <Form className="ui form">
          <label>Şirket Adı</label>
          <FrmTextInput name="companyName"></FrmTextInput>
          <br />
          <label>İnternet Sitesi</label>
          <FrmTextInput name="website"></FrmTextInput>
          <br />
          <label>Telefon Numarası</label>
          <FrmTextInput name="phoneNumber"></FrmTextInput>
          <br />
          <Button type="submit">Düzenle</Button>
        </Form>
      </Formik>}
    </div>
  );
}

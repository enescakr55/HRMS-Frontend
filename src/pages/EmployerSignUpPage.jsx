import { Form, Formik } from "formik";
import React from "react";
import { Button, Label } from "semantic-ui-react";
import * as Yup from "yup";
import FrmTextInput from "../utilities/customFormControls/FrmTextInput";
import EmployerService from "../services/employerService";
import { toast } from "react-toastify";
export default function EmployerSignUpPage() {
  let employerService = new EmployerService();
  let initialValues = {
    email: "",
    password: "",
    isVerified: false,
    website: "",
    phoneNumber: "",
    companyName: "",
  };
  let schema = Yup.object({
    email: Yup.string()
      .email("Geçerli bir e-mail adresi girin")
      .required("Bu alan boş bırakılamaz"),
    password: Yup.string().required("Bu alan boş bırakılamaz"),
    website: Yup.string().required("Bu alan boş bırakılamaz"),
    phoneNumber: Yup.string().required("Bu alan boş bırakılamaz"),
    companyName: Yup.string().required("Bu alan boş bırakılamaz"),
  });
  return (
    <div>
      <div style={{ textAlign: "center" }}>
      <p
          style={{
            fontFamily: "sans-serif",
            borderBottom: "2px solid #2185d0",
            fontSize: "20px",
            fontWeight: "bold",
            color:"#2185d0"
          }}
        >
          Şirket Hesabı Oluştur
        </p>
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          onSubmit={(value) => {
            employerService.registerEmployer(value).then((p) => {
              p.data.success == true
                ? toast.success(p.data.message)
                : toast.error(p.data.message);
                console.log(p);
            });
          }}
        >
          <Form
            className="ui form"
            style={{
              maxWidth: "500px",
              display: "inline-block",
              width: "100%",
            }}
          >
            <FrmTextInput
              name="email"
              placeholder="E-Mail Adresi"
            ></FrmTextInput>
            <br />
            <FrmTextInput name="password" placeholder="Şifre"></FrmTextInput>
            <br />
            <FrmTextInput name="website" placeholder="Website"></FrmTextInput>
            <br />
            <FrmTextInput
              name="phoneNumber"
              placeholder="Telefon Numarası"
            ></FrmTextInput>
            <br />
            <FrmTextInput
              name="companyName"
              placeholder="Şirket Adı"
            ></FrmTextInput>
            <br />
            <Button type="submit">Üye Ol</Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

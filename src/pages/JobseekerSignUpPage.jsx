import React from "react";
import JobseekerService from "../services/jobseekerService";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import {Button} from "semantic-ui-react"
import FrmTextInput from "../utilities/customFormControls/FrmTextInput";

export default function JobseekerSignUpPage() {
  
  let initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    tcNo: "",
    birthYear: "",
    phoneNumber:"",
  };
  let schema = Yup.object({
    email: Yup.string()
      .email("Lütfen geçerli bir mail adresi girin")
      .required("Bu alanı boş bırakmayın"),
    password: Yup.string().required("Bu alanı boş bırakmayın"),
    firstName: Yup.string().required("Bu alanı boş bırakmayın"),
    lastName: Yup.string().required("Bu alanı boş bırakmayın"),
    tcNo: Yup.number().required("Bu alanı boş bırakmayın"),
    birthYear: Yup.number().required("Bu alanı boş bırakmayın"),
  });
  let jobseekerService = new JobseekerService();
  return (
      
    <div style={{textAlign:"center"}}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(value) => {
            jobseekerService.registerJobseeker(value).then((result)=>{
                if(result.data.success){
                    toast.success("Kayıt başarılı");
                }else{
                    toast.error(result.data.message);
                }
            },()=>{
                toast.error("Bir hata oluştu");
            })
            
        }}
      >
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
          İş Arayan Olarak Üye Ol
        </p>

                  <Form
            className="ui form"
            style={{
              maxWidth: "500px",
              display: "inline-block",
              width: "100%",
            }}
          >
              <FrmTextInput name="firstName" placeholder="Adınız"></FrmTextInput><br/>
              <FrmTextInput name="lastName" placeholder="Soyadınız"></FrmTextInput><br/>
              <FrmTextInput name="email" placeholder="E-Mail adresiniz"></FrmTextInput><br/>
              <FrmTextInput name="password" placeholder="Şifre" type="password"></FrmTextInput><br/>
              <FrmTextInput name="tcNo" placeholder="TC No"></FrmTextInput><br/>
              <FrmTextInput name="birthYear" placeholder="Doğum Yılınız"></FrmTextInput><br/>
              <FrmTextInput name="phoneNumber" placeholder="Telefon Numaranız"></FrmTextInput><br/>
              <Button type="submit">Üye Ol</Button>

        </Form>
        </div>
      </Formik>
      
    </div>
  );
}

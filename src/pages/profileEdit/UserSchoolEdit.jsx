import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import CvService from "../../services/cvService";
import * as Yup from "yup";
import { toast } from "react-toastify";
import FrmTextInput from "../../utilities/customFormControls/FrmTextInput";
import { Button } from "semantic-ui-react";

export default function UserSchoolEdit({ ...props }) {
  const [school, setSchool] = useState("");
  const [loaded, setLoaded] = useState(false);
  let cvService = new CvService();
  let initialValues = {
    schoolName:"",
    startYear:undefined,
    graduationYear:undefined,
    departmentName:undefined,
  };
  let schema = Yup.object({
    schoolName: Yup.string().required("Okul adı boş olamaz"),
    startYear: Yup.number().required("Başlangıç yılı boş olamaz"),
    graduationYear: Yup.number(),
    departmentName: Yup.string(),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          cvService.addOrUpdateMySchool(values).then((result) => {
            result.data.success == true
              ? toast.success("İşlem başarılı")
              : toast.error("İşlem başarısız");
          });
        }}
      >
        <Form className="form ui">
          <label>Okul Adı</label>
          <FrmTextInput name="schoolName"></FrmTextInput>
          <br/>
          <label>Bölüm (Yoksa boş bırakabilirsiniz)</label>
          <FrmTextInput name="departmentName"></FrmTextInput>
          <br/>
          <label>Başlangıç Yılı</label>
          <FrmTextInput name="startYear"></FrmTextInput>
          <br/>
          <label>
            Mezuniyet Yılı (Mezun olmadıysanız boş bırakabilirsiniz)
          </label>
          <FrmTextInput name="graduationYear"></FrmTextInput>
          <br/>
          <Button type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}

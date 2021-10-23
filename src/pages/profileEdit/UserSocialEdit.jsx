import React from "react";
import CvService from "../../services/cvService";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FrmTextInput from "../../utilities/customFormControls/FrmTextInput";
import { toast } from "react-toastify";
import { Button } from "semantic-ui-react";
export default function UserSocialEdit() {
  let cvService = new CvService();
  let initialValues = {
    socialMediaName: "",
    socialMediaLink: "",
  };
  let schema = Yup.object({
    socialMediaName: Yup.string().required(),
    socialMediaLink: Yup.string().required(),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) =>
          cvService.addMySocial(values).then((result) => {
            result.data.success == true
              ? toast.success("Başarıyla Eklendi")
              : toast.error("Bir hata oluştu");
          })
        }
      >
        <Form className="form ui">
          <label>Platform Adı</label>
          <FrmTextInput name="socialMediaName"></FrmTextInput><br/>
          <label>Kullanıcı Adı</label>
          <FrmTextInput name="socialMediaLink"></FrmTextInput><br/>
          <Button type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}

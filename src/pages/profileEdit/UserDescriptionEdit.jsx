import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AuthService from "../../services/authService";
import CvService from "../../services/cvService";
import FrmTextInput from "../../utilities/customFormControls/FrmTextInput";
import * as Yup from "yup";
import FrmTextareaInput from "../../utilities/customFormControls/FrmTextareaInput";
import { Button } from "semantic-ui-react";

export default function UserDescriptionEdit() {
  const [currentUser, setCurrentUser] = useState([]);
  const [currentDescription, setCurrentDescription] = useState([]);
  const [loaded, setLoaded] = useState(false)
  let authService = new AuthService();
  let cvService = new CvService();
  useEffect(() => {
    authService.me().then((r) => {
      setCurrentUser(r.data.data);
      cvService.getDescriptionByUserId(r.data.data.id).then((desc) => {
        setCurrentDescription(desc.data.data);
        console.log("q");
        console.log(desc.data.data);
        setLoaded(true);
      });
    });
  }, []);
  let schema = Yup.object({ userdescription:"" });
  let initialValues = {
    userdescription: currentDescription != null ? currentDescription.userdescription : "",
  };
  return (
    <div>
{loaded == true &&      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          cvService.updateMyDescription(values).then((r) => {
            r.data.success == true
              ? toast.success("Açıklama değiştirildi")
              : toast.error("Açıklama değiştirilirken bir hata oluştu");
          });
        }}
      >
        <Form className="form ui">
          <label>Kullanıcı Açıklaması</label>
          <FrmTextareaInput name="userdescription"></FrmTextareaInput><br/>
          
          <Button type="submit">Açıklamayı Düzenle</Button>
        </Form>
      </Formik>}
    </div>
  );
}

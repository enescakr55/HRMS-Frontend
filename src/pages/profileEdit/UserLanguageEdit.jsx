import { Form, Formik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'
import { Button } from 'semantic-ui-react'
import * as Yup from 'yup'
import CvService from '../../services/cvService'
import FrmTextInput from '../../utilities/customFormControls/FrmTextInput'
export default function UserLanguageEdit() {
    let cvService = new CvService();
    let initialValues = {
        languageName:"",
        languageLevel:"",
    }
    let schema = Yup.object({
        languageName: Yup.string().required("Dil adı boş olamaz"),
        languageLevel:Yup.number().required("Bu alanı boş bırakmayınız"),
    })
    return (
        <div>
            <Formik validationSchema={schema} initialValues={initialValues} onSubmit={(values)=>{
                cvService.addMyLanguage(values).then((result)=>{
                    result.data.success ? toast.success("Başarıyla Eklendi") : toast.error("Dil eklenemedi");
                },()=>{
                    toast.error("Bir hata oluştu");
                })
            }}>
                <Form className="form ui">
                    <label>Dil</label>
                    <FrmTextInput name="languageName"></FrmTextInput><br/>
                    <label>Dil seviyeniz (1-5 arasında)</label>
                    <FrmTextInput name="languageLevel"></FrmTextInput><br/>
                    <Button type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}

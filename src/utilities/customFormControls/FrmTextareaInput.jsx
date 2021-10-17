import {  Field, useField } from 'formik'
import React from 'react'
import { FormField,Label } from 'semantic-ui-react';

export default function FrmTextareaInput({...props}) {
    const [field,meta] = useField(props);
    return (
        
        <div>
            <FormField error={meta.touched && !!meta.error}></FormField>
            <Field component="textarea" {...field} {...props}>

            </Field>
            {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
        </div>
    )
}

import { useField,Field } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function FrmDateInput({...props}) {
  const [field, meta] = useField(props);
  return (
    <div>
      <FormField error={meta.touched && !!meta.error}>
        <label>{props.placeholder}</label>
        <input {...field} {...props} />
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </FormField>
    </div>
  );
}

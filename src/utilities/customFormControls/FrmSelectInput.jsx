import { useField,Field } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function FrmSelectInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <FormField error={meta.touched && !!meta.error}>
        <Field as="select" name={props.name}>
          <option value="" defaultValue="" selected disabled>Lütfen Seçiniz</option>
          {props.opt.map((q) => (<option key={q.value} value={q.value}>{q.text}</option>)
          )}
        </Field>
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </FormField>
    </div>
  );
}

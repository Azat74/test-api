import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form as FormStrap,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { login as loginAction, selectError } from "../../store/auth";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  return (
    <Form
      onSubmit={(e) => dispatch(loginAction(e))}
      render={({ handleSubmit, submitting }) => (
        <FormStrap onSubmit={handleSubmit}>
          <div>
            <Field name="login" defaultValue="eve.holt@reqres.in">
              {({ input, meta }) => (
                <div>
                  <Label>
                    <span>Email</span>
                    <Input {...input} type="text" placeholder="login" />
                  </Label>
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="password"
              defaultValue="pistol"
            />
          </div>
          {error && <div>{error}</div>}
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </FormStrap>
      )}
    />
  );
};

LoginForm.propTypes = {
  loginAction: PropTypes.func,
};

"use client";

import { useState } from "react";

// Libraries
import { Formik, Field, Form, FormikHelpers } from "formik";
import Link from "next/link";

// Components
import ToggleSwitch from "@/components/ui/toggleSwitch/ToggleSwitch";

// Styles
import Style from "./SignupView.module.css";

// Types
interface Values {
  name: string;
  email: string;
  password: string;
}

const SignupView: React.FC = () => {
  // Hooks
  const [isChecked, setChecked] = useState(false);

  // Functions
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={Style.signin}>
      <div className={Style.titles}>
        <h3>Welcome!</h3>
        <h6>
          Use these awesome forms to login or create new account in your project
          for free.
        </h6>
      </div>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <div className={Style.fieldWrapper}>
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              name="name"
              placeholder="Your full name "
              type="text"
            />
          </div>
          <div className={Style.fieldWrapper}>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Your email address"
              type="email"
            />
          </div>
          <div className={Style.fieldWrapper}>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="Your password"
            />
          </div>

          <div className={Style.switchWrapper}>
            <ToggleSwitch
              checked={isChecked}
              onChange={handleChange}
              label="Enable Feature"
            />
            <p>Remember me </p>
          </div>

          <button className={Style.submitBtn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
      <div className={Style.signupWrapper}>
        Already have an account?
        <span>
          <Link href="/signin">Sign in</Link>
        </span>
      </div>
    </div>
  );
};
export default SignupView;

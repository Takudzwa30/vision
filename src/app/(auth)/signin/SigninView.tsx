"use client";

import { useState } from "react";

// Libraries
import { Formik, Field, Form, FormikHelpers } from "formik";
import Link from "next/link";

// Components
import ToggleSwitch from "@/components/ui/toggleSwitch/ToggleSwitch";

// Styles
import Style from "./SigninView.module.css";

// Types
interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const SigninView: React.FC = () => {
  // Hooks
  const [isChecked, setChecked] = useState(false);

  // Functions
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={Style.signin}>
      <div className={Style.titles}>
        <h3>Nice to see you!</h3>
        <h6>Enter your email and password to sign in</h6>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
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
        Don&apos;t have an account?{" "}
        <span>
          <Link href="/signup">Sign up</Link>
        </span>
      </div>
    </div>
  );
};
export default SigninView;

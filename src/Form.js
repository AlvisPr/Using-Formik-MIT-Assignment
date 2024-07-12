import React from "react";
import { useFormik } from "formik";

const Form = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: values => {
            const errors = {};

            
            if (!values.email) {
                errors.email = "Field required";
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = "Username should be an email";
            }

            if (!values.password) {
                errors.password = "Field required";
            }

            return errors;
        },
        onSubmit: values => {
            alert("Login Successful");
        }
    });

    console.log(formik);
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="emailField">Email:</label><br />
                <input
                    type="text"
                    id="emailField"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? (
                    <div  id="emailError" style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="pswField">Password:</label><br />
                <input
                    type="password"
                    id="pswField"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? (
                    <div id=" pswError" style={{ color: "red" }}>{formik.errors.password}</div>
                ) : null}
            </div>

            <br />
            <button id="submitBtn" type="submit">Submit</button>
        </form>
    );
};

export default Form;

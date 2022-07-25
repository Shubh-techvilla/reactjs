import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as yup from 'yup';


const FormCom = () => {


    const formInitialSchema = {
        name: '',
        email: '',
        password: '',
        confirm_pass: ''
    }

    const handleFormSubmit = (values) => {
        console.log("Submitted values", values);
    }

    const formValidationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: yup.string().min(6).max(255).required('Password is required'),
        confirm_pass: yup.string().min(6).max(255).required('confirm_pass is required')
    });

    return (
        <>
            <div className="container">
                <div className="col-md-12 m-3 text-center">
                    <h1>formik form</h1>
                </div>

                <div className="col-md-8 offset-md-2">
                    <Formik initialValues={formInitialSchema}
                        validationSchema={formValidationSchema}

                        onSubmit={(values) => handleFormSubmit(values)}>
                        <Form>
                            <div className="col-md-8 mt-4 m-auto">
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="enter the name"
                                    className="form-control" />

                                <p className="text-danger">
                                    <ErrorMessage name="name" />
                                </p>
                            </div>

                            <div className="col-md-8 mt-4 m-auto">
                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="enter the email"
                                    className="form-control" />

                                <p className="text-danger">
                                    <ErrorMessage name="email" />
                                </p>
                            </div>

                            <div className="col-md-8 mt-4 m-auto">
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="enter the password"
                                    className="form-control" />

                                <p className="text-danger">
                                    <ErrorMessage name="password" />
                                </p>
                            </div>

                            <div className="col-md-8 mt-4 m-auto">
                                <Field
                                    type="password"
                                    name="confirm_pass"
                                    placeholder="enter the confirm_pass"
                                    className="form-control" />

                                <p className="text-danger">
                                    <ErrorMessage name="confirm_pass" />
                                </p>
                            </div>

                            <div className="col-md-8 mt-4 m-auto">
                                <button type="submit" className="btn btn-primary btn-block form-control">Submit</button>
                            </div>
                        </Form>

                    </Formik>
                </div>
            </div>
        </>
    );
}

export default FormCom;
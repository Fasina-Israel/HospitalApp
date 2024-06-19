"use client"
import React from 'react'
import styles from './register.module.scss'
import { useState, useCallback } from 'react';
import { Button, Box } from '@mui/material';
import { Formik, Field } from 'formik';
// import validator from 'validator';
import { useRouter } from 'next/navigation';
import axios from 'axios';


const Register = () => {
    // const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    // const togglePasswordVisibility = () => {
    //     setVisible(!visible);
    // };
    const router = useRouter();
    const [checked, setChecked] = useState(false);
    const [isDoctor, setIsDoctor] = useState(false)
    // const handleTermsChange = () => {
    //     setChecked(!checked);
    // };
    const [loading, setLoading] = useState(false);

    const handleRoute = () => {

    }

    const handleDoctor = () => {
        setIsDoctor(true);
        console.log(isDoctor, 'isdoctor');
    }

    const submit = useCallback(async (values) => {
        const details = {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            password: values.password,
            role: values.role,
            specialization: values.specialization,
            mfaEnabled: values.mfaEnabled,
            availability: values.availability



        };


        try {
            setLoading(true);
            console.log(details, 'details');
            const response = await axios.post('https://telemedicine-oiyv.onrender.com/api/v1/auth/register', details, {
                "Content-Type": "application/json",
                // withCredentials: false
            },

            );
            console.log(response, 'response');
            setLoading(false);
            if (response.status === 200 || response.status === 201 || response.status === 202) {
                router.push('/login');
            } else {
                const data = await response.json();
                // notify(data.message, true);
                // setLoading(false);
            }
        } catch (err) {
            console.log(err, 'err');
            // notify(err.message, true);
            // setLoading(false);
        }
    }, []);

    return (<Formik
        initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            // "mfaEnabled": "false",
            role: "DOCTOR",
            specialization: "",
            availability: {
                "Monday": "9:10-17:00"
            }
        }}

        validate={(values) => {
            const errors = {};
            if (!values.firstname) {
                errors.firstname = 'Company Name cannot be empty !';
            }
            if (!values.email) {
                errors.email = 'Email cannot be empty !';
            }
            // } else if (!validator.isEmail(values.email)) {
            //     errors.email = 'Please enter a valid email !';
            // }
            if (!values.password) {
                errors.password = 'Password cannot be empty !';
            }
            if (!values.password) {
                errors.password = 'Password cannot be empty !';
            }
            if (!values.password) {
                errors.password = 'Password cannot be empty !';
            }
            if (!values.password) {
                errors.password = 'Password cannot !';
            }
            return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            console.log('mounted');
            submit(values);
            setSubmitting(false);
        }}
    >
        {({ isValid, values, errors, dirty, touched, handleSubmit, handleBlur }) => (

            <div className={styles.register_container}>
                <div className={styles.container2}>
                    <div className={styles.formContainer}>
                        <div className={styles.header}>
                            <h2>Register</h2>
                        </div>
                        <form onSubmit={handleSubmit} className={styles.form}>

                            <div className={styles.formField}>
                                <div className={styles.text}>
                                    <h4>
                                        FirstName:
                                    </h4>
                                </div>
                                <div className={styles.input}>
                                    <Field
                                        className={styles.input_field}
                                        id="firstname"
                                        type="text"
                                        name="firstname"
                                        value={values.firstname}
                                        onBlur={handleBlur}
                                        placeholder="Enter your First name"
                                    />
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <div className={styles.text}>
                                    <h4>
                                        LastName:
                                    </h4>
                                </div>
                                <div className={styles.input}>
                                    <Field
                                        className={styles.input_field}
                                        id="lastname"
                                        type="text"
                                        name="lastname"
                                        value={values.lastname}
                                        onBlur={handleBlur}
                                        placeholder="Enter your Last name"
                                    />
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <div className={styles.text}>
                                    <h4>
                                        Email:
                                    </h4>
                                </div>
                                <div className={styles.input}>
                                    <Field
                                        className={styles.input_field}
                                        id="email"
                                        type="text"
                                        name="email"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <div className={styles.text}>
                                    <h4>
                                        Password:
                                    </h4>
                                </div>
                                <div className={styles.input}>
                                    <Field
                                        className={styles.input_field}
                                        id="password"
                                        type="text"
                                        name="password"
                                        value={values.password}
                                        onBlur={handleBlur}
                                        placeholder="Enter your password"
                                    />
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <div className={styles.text}>
                                    <h4>
                                        Role:
                                    </h4>
                                </div>
                                <div className={styles.dropDown}>
                                    <Field as="select" name="role" className={styles.dropDown}>

                                        <option value="DOCTOR" onClick={() => {
                                            handleDoctor();
                                        }}>Doctor</option>
                                        <option value="PATIENT">Patient</option>

                                    </Field>
                                </div>
                            </div>

                            <div className={styles.formField}>
                                <div className={styles.text}>
                                    <h4>
                                        Specialization(for doctors only):
                                    </h4>
                                </div>
                                <div className={styles.input}>
                                    <Field
                                        className={styles.input_field}
                                        id="specialization"
                                        type="text"
                                        name="specialization"
                                        value={values.specialization}
                                        onBlur={handleBlur}
                                        placeholder="Enter your role"
                                    />
                                </div>
                            </div>

                            {/* <div className={styles.formField}>
                                <div className={styles.text}>
                                    <h4>
                                        Availaibility:
                                    </h4>
                                </div> */}
                            {/* <div className={styles.input}>
                                    <Field
                                        className={styles.input}
                                        id="availability"
                                        type="text"
                                        name="availability"
                                        // value={values.availability.}
                                        onBlur={handleBlur}
                                        placeholder="Enter your role"
                                    />
                                </div> */}
                            {/* </div> */}
                            {/* <div className={styles.formField}>
                                <div className={styles.text}>
                                    <h4>
                                        Role:
                                    </h4>
                                </div>
                                <select

                                    name="role"
                                    value={values.role}
                                    id="role"
                                    // onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.input}
                                >
                                    <option value="" label="Select a role">
                                        Select your role{" "}
                                    </option>
                                    <option value="doctor" label="doctor">
                                        {" "}
                                        Doctor
                                    </option>
                                    <option value="patent" label="patent">
                                        Patent
                                    </option>

                                    <option value="admin" label="admin">
                                        Admin
                                    </option>
                                </select>
                            </div> */}
                            {/* <div className={styles.formField}>
                        <div className={styles.text}>
                            <h4>
                                Specialization:
                            </h4>
                        </div>
                        <div className={styles.input}>
                            <input>
                            </input>
                        </div>
                    </div> */}

                            <div className={styles.button}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    // disabled={!isValid || !dirty || !checked}
                                    sx={{
                                        backgroundColor: '#2D6CDF',
                                        paddingLeft: '3rem',
                                        paddingRight: '3rem',
                                        paddingTop: '0.5rem',
                                        paddingBottom: '0.5rem',
                                        marginTop: '0rem',
                                        width: '100%',
                                        '&:hover': { backgroundColor: '#2D6CDF', outline: 'white' },
                                        '&.Mui-disabled': {
                                            background: '#E4ECFB',
                                            color: '#fff'
                                        }
                                    }}
                                    // onClick={() => {
                                    //     router.push('/login');
                                    // }}
                                >
                                    {/* {loading && <TailSpin color="#FFF" height={20} width={20} />}
                            {!loading && 'Create Account'} */}
                                    {'Submit'}
                                </Button>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
        )
        }

    </Formik >

    )
}

export default Register;
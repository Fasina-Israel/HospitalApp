"use client"
import React from 'react'
import styles from './login.module.scss'
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation'
import { Button, Box, Typography } from '@mui/material';
import { Formik, Field } from 'formik';
// import validator from 'validator';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';



const Login = () => {

    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const submit = useCallback(async (values) => {
        const details = {
            email: values.email,
            password: values.password,
        };
        try {
            setLoading(true);
            console.log(details, 'details');
            const response = await axios.post('https://telemedicine-oiyv.onrender.com/api/v1/auth/authenticate', details, {
                "Content-Type": "application/json",
                // withCredentials: false
            },);
            console.log(response, 'response');

            if (response.data.accessToken) {
                console.log('token present')
                const authObj = {
                    email: response.data.email,
                    name: response.data.name,
                    roles: response.data.role,
                    id: response.data.userId,
                    firstName: response.data.firstName
                };
                // console.log(res.data.roles[0], 'driverRoles');
                const authObjString = JSON.stringify(authObj);
                console.log(authObjString, 'authObj');
                let token = response.data.accessToken;
                console.log(token, 'token');
                //   await AsyncStorage.setItem("authObj", authObjString);
                //   await AsyncStorage.setItem("token", token);
                window.sessionStorage.setItem('auth', JSON.stringify(authObj));
                window.sessionStorage.setItem('token', JSON.stringify(token));
                const auth = JSON.parse(window.sessionStorage.getItem('auth'));
                console.log(auth, 'auth');
                setLoading(false);
                if (auth.roles === "DOCTOR") {
                    router.push('/dashboard/doctor');
                } else if (auth.roles === "PATIENT") {
                    router.push('/dashboard/patient');
                    // Alert.alert("", "Invalid Email or Password");
                } else {
                    alert('', 'Invalid Email or Password');
                }

            } else {
                const data = await response.json();
                // notify(data.message, true);
                // setLoading(false);
            }
        } catch (err) {
            console.log(err, 'err');
            // notify(err.message, true);
            setLoading(false);
        }
    }, [router]);

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}

            validate={(values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Email cannot be empty !';
                }
                // } else if (!validator.isEmail(values.email)) {
                //     errors.email = 'Please enter a valid email !';
                // }
                if (!values.password) {
                    errors.password = 'Password cannot be empty !';
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
                <div className={styles.container}>
                    <div className={styles.container2}>
                        <div className={styles.formContainer}>
                            <div className={styles.header}>
                                <h2>Login</h2>
                            </div>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formField}>
                                    <div className={styles.formFieldContainer}>
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
                                                placeholder="Enter your First name"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.formField}>
                                    <div className={styles.formFieldContainer}>
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
                                                placeholder="Enter your First name"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.button}>
                                    <Button
                                        // onClick={() => {
                                        //     router.push('/dashboard/patient');
                                        // }}
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
                                    >
                                        {loading && <TailSpin color="#FFF" height={20} width={20} />}
                                        {!loading && 'Login'}
                                        {/* {'Submit'} */}
                                    </Button>
                                    <div className={styles.footer}
                                        onClick={() => {
                                            router.push('/register');
                                        }}>
                                        <Typography sx={{
                                            marginTop: '2rem',
                                            color: '#2D6CDF',
                                            fontSize: '16px',
                                            fontWeight: '600'

                                        }}>
                                            Dont have an account? Sign Up
                                        </Typography>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Formik >);
}
export default Login;
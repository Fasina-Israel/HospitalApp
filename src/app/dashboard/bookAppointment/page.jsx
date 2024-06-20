"use client"
import React from 'react'
import styles from '../bookAppointment/BookAppointment.module.scss'
import { useState, useCallback } from 'react';
import { Button, Box } from '@mui/material';
import { Formik, Field } from 'formik';
// import validator from 'validator';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Appointments = () => {
    // const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    // const togglePasswordVisibility = () => {
    //     setVisible(!visible);
    // };
    const router = useRouter();
    const [checked, setChecked] = useState(false);
    // const handleTermsChange = () => {
    //     setChecked(!checked);
    // };
    const [loading, setLoading] = useState(false);

    const handleRoute = () => {

    }

    const submit = useCallback(async (values) => {
        const details = {
            appointmentDate: values.appointmentDate,
            urgency: values.urgency,
            telemedicine: values.telemedicine
        };
        console.log('submit')
        try {
            setLoading(true);
            console.log(details, 'details');
            const response = await axios.post('https://telemedicine-oiyv.onrender.com/api/appointments/1', details, {
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
    }, [router]);

    return (<Formik
        initialValues={{
            urgency: "",
            date: new Date(),
            telemedicine: ""
        }}


        onSubmit={(values, { setSubmitting }) => {
            console.log('mounted');
            submit(values);
            setSubmitting(false);
        }}
    >
        {({ isValid, values, setFieldValue, errors, dirty, touched, handleSubmit, handleBlur }) => (

            <div className={styles.register_container}>
                <div className={styles.container2}>
                    <div className={styles.formContainer}>
                        <div className={styles.header}>
                            <h2>Book Appointment</h2>
                        </div>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formField}>
                                <div className={styles.text}>
                                    <h4>
                                        Date:
                                    </h4>
                                </div>
                                <div className={styles.dropDown}>
                                    <Field name="appointmentDate" className={styles.dropDown}>
                                        {({ field, form }) => (
                                            <DatePicker
                                                className={styles.datePicker}
                                                selected={field.value}
                                                onChange={(date) => setFieldValue(field.name, date)}
                                                dateFormat="dd/MM/yyyy"
                                                placeholderText='Enter your date'
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <div className={styles.text}>
                                    <h4>
                                        Urgency:
                                    </h4>
                                </div>
                                <div className={styles.dropDown}>
                                    <Field as="select" name="urgency" className={styles.dropDown}>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>

                                    </Field>
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <div className={styles.text}>
                                    <h4>
                                        Telemedicine:
                                    </h4>
                                </div>
                                <div className={styles.dropDown}>
                                    <Field as="select" name="telemedicine" className={styles.dropDown}>
                                        <option value="true">True</option>
                                        <option value="false">False</option>
                                    </Field>
                                </div>
                            </div>


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

export default Appointments;
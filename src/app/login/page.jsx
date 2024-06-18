// "use client"
// import React from 'react'
// import styles from './login.module.scss'
// import { useState, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button, Box } from '@mui/material';
// import { Formik, Field } from 'formik';
// import validator from 'validator';
//
//
// const login = () => {
//
//     const [loading, setLoading] = useState(false);
//
//     const submit = useCallback(async (values) => {
//         const details = {
//             email: values.email,
//             password: values.password,
//         };
//         try {
//             setLoading(true);
//             console.log(details, 'details');
//             const response = await fetch('http://localhost:8080/users/create', {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 // mode: 'no-cors',
//                 body: JSON.stringify(details)
//             });
//             console.log(response, 'response');
//             setLoading(false);
//             if (response.ok) {
//                 // navigate('/verify', { state: details });
//             } else {
//                 const data = await response.json();
//                 // notify(data.message, true);
//                 // setLoading(false);
//             }
//         } catch (err) {
//             console.log(err, 'err');
//             // notify(err.message, true);
//             // setLoading(false);
//         }
//     }, []);
//
//     return (
//         <Formik
//             initialValues={{
//                 email: '',
//                 password: '',
//             }}
//
//             validate={(values) => {
//                 const errors = {};
//                 if (!values.email) {
//                     errors.email = 'Email cannot be empty !';
//                 }
//                 // } else if (!validator.isEmail(values.email)) {
//                 //     errors.email = 'Please enter a valid email !';
//                 // }
//                 if (!values.password) {
//                     errors.password = 'Password cannot be empty !';
//                 }
//                 return errors;
//             }}
//             onSubmit={(values, { setSubmitting }) => {
//                 console.log('mounted');
//                 submit(values);
//                 setSubmitting(false);
//             }}
//         >
//             {({ isValid, values, errors, dirty, touched, handleSubmit, handleBlur }) => (
//                 <div className={styles.container}>
//                     <div className={styles.container2}>
//                         <div className={styles.formContainer}>
//                             <div className={styles.header}>
//                                 <h2>Login</h2>
//                             </div>
//                             <form onSubmit={handleSubmit} className={styles.form}>
//                                 <div className={styles.formField}>
//                                     <div className={styles.text}>
//                                         <h4>
//                                             Email:
//                                         </h4>
//                                     </div>
//                                     <div className={styles.input}>
//                                         <Field
//                                             className={styles.input}
//                                             id="email"
//                                             type="text"
//                                             name="email"
//                                             value={values.email}
//                                             onBlur={handleBlur}
//                                             placeholder="Enter your First name"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className={styles.formField}>
//                                     <div className={styles.text}>
//                                         <h4>
//                                             Password:
//                                         </h4>
//                                     </div>
//                                     <div className={styles.input}>
//                                         <Field
//                                             className={styles.input}
//                                             id="password"
//                                             type="text"
//                                             name="password"
//                                             value={values.password}
//                                             onBlur={handleBlur}
//                                             placeholder="Enter your First name"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className={styles.button}>
//                                     <Button
//                                         type="submit"
//                                         variant="contained"
//                                         // disabled={!isValid || !dirty || !checked}
//                                         sx={{
//                                             backgroundColor: '#2D6CDF',
//                                             paddingLeft: '3rem',
//                                             paddingRight: '3rem',
//                                             paddingTop: '0.5rem',
//                                             paddingBottom: '0.5rem',
//                                             marginTop: '0rem',
//                                             width: '100%',
//                                             '&:hover': { backgroundColor: '#2D6CDF', outline: 'white' },
//                                             '&.Mui-disabled': {
//                                                 background: '#E4ECFB',
//                                                 color: '#fff'
//                                             }
//                                         }}
//                                     >
//                                         {/* {loading && <TailSpin color="#FFF" height={20} width={20} />}
//                             {!loading && 'Create Account'} */}
//                                         {'Submit'}
//                                     </Button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </Formik >);
// }
// export default login;
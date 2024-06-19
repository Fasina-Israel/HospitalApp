"use client";
import { Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PatientProfileComponent from './../patient/PatientProfileComponent';
// import axios from 'axios';

const DoctorDashboard = ({ }) => {

    const [updater, setUpdater] = useState(null);
    const [patients, setPatients] = useState([]);

    const getAllPatient = async () => {
        const parsedObj = JSON.parse(window.sessionStorage.getItem('auth'));
        console.log(parsedObj, 'pObj')
        const token = JSON.parse(window.sessionStorage.getItem('token'));
        console.log(token, 'token')


        try {
            const response = await fetch('https://telemedicine-oiyv.onrender.com/patient', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(function (response) {
                    // The response is a Response instance.
                    // You parse the data into a useable format using `.json()`
                    return response.json();
                }).then(function (data) {
                    // `data` is the parsed version of the JSON returned from the above endpoint.
                    console.log(data);
                    setPatients(data) // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                })
        } catch (err) {
            console.log(err);
        };

    }
    useEffect(() => {
        getAllPatient();
    }, [updater]);

    return (
        <Box sx={{
            width: '100%',
            height: '90%',
            backgroundColor: '#fff',
            justifyContent: 'flexStart',
            alignItems: 'center'
        }}>
            <Box>
                <Typography> Doctor Dashboard</Typography>

                {patients.map((item, index) => (
                    <>
                        <PatientProfileComponent name={item.name} phone={item.phone} email={item.email} />
                    </>
                ))}
            </Box>
        </Box>
    )
}

export default DoctorDashboard;
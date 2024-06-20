"use client"
import { getAllDoctor } from '@/app/api/api';
import { Typography, Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DoctorProfileComponent from '../doctor/DoctorProfileComponent';
// import axios from 'axios';

const PatientOutlet = () => {

    const [updater, setUpdater] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const parsedObj = JSON.parse(window.sessionStorage.getItem('auth'));
    console.log(parsedObj, 'pObj')
    const token = JSON.parse(window.sessionStorage.getItem('token'));
    console.log(token, 'token')

    const getAllDoctors = async () => {
        const parsedObj = JSON.parse(window.sessionStorage.getItem('auth'));
        console.log(parsedObj, 'pObj')
        const token = JSON.parse(window.sessionStorage.getItem('token'));
        console.log(token, 'token')


        try {
            fetch('https://telemedicine-oiyv.onrender.com/doctor', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })

                // .then((response) => response.json())
                .then(function (response) {
                    // The response is a Response instance.
                    // You parse the data into a useable format using `.json()`
                    return response.json();
                }).then(function (data) {
                    // `data` is the parsed version of the JSON returned from the above endpoint.
                    console.log(data);
                    setDoctors(data) // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                })
        } catch (err) {
            console.log(err);
        };

    }
    useEffect(() => {
        getAllDoctors();
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
                <Typography> Patient Dashboard</Typography>
                <Typography> Please select any of the doctor below to book an appointment</Typography>

                {doctors.map((item, index) => (
                    // <Grid key={index} height="2rem" display="flex" >
                    //     <Typography fontSize="16px" color="black">
                    //         {item?.name}
                    //     </Typography>
                    // </Grid>
                    <Grid key={index}>
                        <DoctorProfileComponent name={item.name} speciality={item.specialization
                        } availabilty={'monday'} />
                    </Grid>
                ))}
            </Box>
        </Box>
    )

}

export default PatientOutlet;
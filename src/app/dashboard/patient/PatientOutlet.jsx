"use client"
import { getAllDoctor } from '@/app/api/api';
import { Typography, Box } from '@mui/material'
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
            // fetch('https://3ef1-105-113-63-65.ngrok-free.app/api/v1/auth/authenticate', {
            //     method: "GET",
            //     headers: {
            //         "Content-Type": "application/json",
            //         Authorization: `Bearer ${token}`,
            //     },
            // })
            //     .then((response) => response.json())
            //     .then((response) => {
            //         console.log("data", response);
            //         setDoctors(response);
            //     });
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
                <Typography> Doctor Dashboard</Typography>
                {/* <DoctorProfileComponent name="Adeolu Moruf" speciality={"Gynecologist"} availabilty={" Monday "} />
                <DoctorProfileComponent name="Folusho Folabi" speciality={"Pharmacist"} availabilty={" Monday "} />
                <DoctorProfileComponent name="Henry Akan" speciality={"Surgeon"} availabilty={" Monday "} />
                <DoctorProfileComponent name="Musa Kabiru" speciality={"Dentist"} availabilty={" Monday "} />
                <DoctorProfileComponent name="John Oladeji" speciality={"Optician"} availabilty={" Monday "} />
                <DoctorProfileComponent name="Fasina Israel" speciality={"Gynecologist"} availabilty={" Monday "} /> */}
            </Box>
        </Box>
    )

}

export default PatientOutlet;
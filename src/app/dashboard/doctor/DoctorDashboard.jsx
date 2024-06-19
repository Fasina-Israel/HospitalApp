"use client";
import { Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import axios from 'axios';

const DoctorDashboard = () => {

    const [updater, setUpdater] = useState(null);
    const [doctors, setDoctors] = useState([]);

    const getAllDoctors = async () => {
        const parsedObj = JSON.parse(window.sessionStorage.getItem('auth'));
        console.log(parsedObj, 'pObj')
        const token = JSON.parse(window.sessionStorage.getItem('token'));
        console.log(token, 'token')


        try {
            const response = await fetch('https://telemedicine-1axz.onrender.com/api/v1/doctor', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => response.json())
            .then((response) => {
                console.log("data", response);
                setDoctors(response);
            });
            const data = await response.json();
            console.log(data, 'data')
            console.log(response, 'res')
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
            <Typography>
                Doctor Dashboard
            </Typography>

        </Box>
    )
}

export default DoctorDashboard;
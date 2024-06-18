import { getAllDoctor } from '@/app/api/api';
import { Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PatientOutlet = () => {

    const [updater, setUpdater] = useState(null);
    const [doctors, setDoctors] = useState([]);
    // const parsedObj = JSON.parse(window.sessionStorage.getItem('auth'));
    // console.log(parsedObj, 'pObj')
    // const token = JSON.parse(window.sessionStorage.getItem('token'));
    // console.log(token, 'token')

    const getAllDoctors = async () => {
        const parsedObj = JSON.parse(window.sessionStorage.getItem('auth'));
        console.log(parsedObj, 'pObj')
        const token = JSON.parse(window.sessionStorage.getItem('token'));
        console.log(token, 'token')


        try {
            fetch('https://3ef1-105-113-63-65.ngrok-free.app/api/v1/auth/authenticate', {
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
                    Patient Dashboard
                </Typography>

            </Box>
        )
    
}

export default PatientOutlet;
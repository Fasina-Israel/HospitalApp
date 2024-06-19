"use client";

import React, { useEffect } from 'react'
import { Box, Text, Stack, IconButton } from '@mui/material'
// import { Outlet } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import { Nav_Buttons } from '../../data';
import dynamic from "next/dynamic";

const Appointment = dynamic(
    () => {
        return import("./Appointement");
    },
    { ssr: false }
);

const Page = () => {


    const theme = useTheme()

    return (
        <>
            <Box display={'flex'} flexDirection={'row'}>
                <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: '0px 0px 2px rgba(0,0,0,0.25)', height: '100vh', width: 100 }}>
                    <Stack direction="column" alignItems={"center"} sx={{ width: '100%' }} spacing={2} >
                        <Box sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: 64,
                            width: 64,
                            borderRadius: 1.5
                        }}>
                        </Box>
                        <Stack spacing={3}>
                            {Nav_Buttons.map((el) => <IconButton key={el.index}>
                                {el.icon}
                            </IconButton>)}
                        </Stack>
                    </Stack>
                </Box>
                {/* <Outlet /> */}
                <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: '0px 0px 2px rgba(0,0,0,0.25)', height: '100vh', width: 1400 }}>
                    <Appointment />
                </Box>
            </Box>
        </>
    )
}


export default Page;
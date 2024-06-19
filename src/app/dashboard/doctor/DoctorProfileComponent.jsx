"use client"
import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation'

const DoctorProfileComponent = ({ name, speciality, availabilty }) => {
    const router = useRouter()
    const theme = useTheme()
    return (
        <>
            <Box sx={{
                width: '15rem',
                height: '100%',
                justifyContent: 'flex-start',
                padding: '2%',
                gap: '1rem',
                flexDirection: 'column',
                marginTop: '2rem',
                alignItems: 'flex-start',
                backgroundColor: theme.palette.background.paper, boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
            }}
                onClick={() => {
                    router.push('/dashboard/appointment')
                }}
            >

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0.5rem'
                }}>
                    <Typography>
                        Name:
                    </Typography>
                    <Typography>
                        {name}
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0.5rem'
                }}>
                    <Typography>
                        Speciality:
                    </Typography>
                    <Typography>
                        {speciality}
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0.5rem'
                }}>
                    <Typography>
                        Avaliabilty:
                    </Typography>
                    <Typography>
                        {availabilty}
                    </Typography>
                </Box>
            </Box >
        </>
    )
}

export default DoctorProfileComponent
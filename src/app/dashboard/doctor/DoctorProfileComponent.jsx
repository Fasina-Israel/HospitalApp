import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const DoctorProfileComponent = ({ name, speciality, availabilty }) => {
    const router = useRouter()
    const theme = useTheme()
    return (
        <>
            <Box sx={{
                width: '10rem',
                height: '100%',
                justifyContent: 'flex-start',
                padding: '2%',
                gap: '1rem',
                flexDirection: 'column',
                // onClick={()=>{
                // router.push('/dashboard/patient/Appointment')}}
            marginTop: '2rem',
            alignItems: 'flex-start',
            backgroundColor: theme.palette.background.paper, boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
            }}>

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
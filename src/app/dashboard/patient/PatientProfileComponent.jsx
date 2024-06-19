import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';

const PatientProfileComponent = ({ name, phone, email }) => {
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
                backgroundColor: theme.palette.background.paper, boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
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
                        Phone:
                    </Typography>
                    <Typography>
                        {phone}
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0.5rem'
                }}>
                    <Typography>
                        Email:
                    </Typography>
                    <Typography>
                        {email}
                    </Typography>
                </Box>

            </Box>
        </>
    )
}

export default PatientProfileComponent
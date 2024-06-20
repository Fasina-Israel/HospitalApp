import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useRouter } from 'next/navigation'

const LandingPage = () => {
    const router = useRouter();
    return (
        <Box sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#243fae',
            flexDirection: 'column'
        }}>
            <Box sx={{
                height: '10%',
                width: '100%',
                textAlign: 'center',
                justifyContent: 'center',

                // display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
                // marginLeft: '20rem'
            }}>
                <Typography sx={{
                    fontSize: '50px',
                    fontWeight: '10rem',
                    textAlign: 'center',
                    color: '#fff',

                }}>
                    Welcome To Telemedicine
                </Typography>
            </Box>
            <Box sx={{
                height: '20%',
                width: '20%',
                gap: '2rem',
                marginTop: '3rem',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <Box sx={{
                    flexDirection: 'row',
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <Typography sx={{
                        color: '#fff',

                    }}>
                        Dont have an account,
                    </Typography>
                    <Box sx={{ backgroundColor: 'white', marginLeft: '1rem', borderRadius: '4px', justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            sx={{
                                backgroundColor: 'white',
                               
                            }}
                            onClick={() => {
                                router.push('/register');
                            }

                            }>
                            <Typography sx={{
                                color: '#243fae',
                            }}>
                                Sign Up
                            </Typography>
                        </Button>
                    </Box>
                </Box>
                <Box sx={{
                    flexDirection: 'row',
                    display: 'flex',
                    width: '100%',
                    marginTop: '3rem',
                    justifyContent: 'center'
                }}>
                    <Typography sx={{
                        color: '#fff',

                    }}>
                        Already have an account,
                    </Typography>
                    <Box sx={{ backgroundColor: 'white', marginLeft: '1rem', borderRadius: '4px' }}>
                        <Button sx={{
                            backgroundColor: 'white',

                        }}
                            onClick={() => {
                                router.push('/login');
                            }}
                        >
                            <Typography sx={{
                                color: '#243fae',

                                // fontWeight: '3rem'
                            }}>
                                Sign In
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box >



    )
}

export default LandingPage
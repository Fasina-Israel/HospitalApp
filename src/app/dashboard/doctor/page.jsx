"use client";
import React, { useEffect } from 'react'
import { Box, Text, Stack, IconButton } from '@mui/material'
// import { Outlet } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import { Nav_Buttons } from '../../data';

import { useRouter } from 'next/navigation'

const DoctorDashbaord = dynamic(() => import('./DoctorDashboard'), { ssr: false })
const Page = () => {

  const router = useRouter()
  const parsedObj = JSON.parse(window.sessionStorage.getItem('auth'));
  console.log(parsedObj, 'pObj')
  const token = JSON.parse(window.sessionStorage.getItem('token'));
  console.log(token, 'token')
  const theme = useTheme()
  const loadPage = () => {
    if (token) {
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
              <DoctorDashbaord />
            </Box>
          </Box>
        </>
      )
    }
    else {
      router.push('/login');
    }
  }
  useEffect(() => {
    window.alert("window.alert from client component");
    loadPage()
  }, []);
}

export default Page;
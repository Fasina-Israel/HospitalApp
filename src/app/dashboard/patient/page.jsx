"use client"
import React from 'react';
import Dashboard from './PatientDashboard';
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const parsedObj = JSON.parse(window.sessionStorage.getItem('auth'));
  console.log(parsedObj, 'pObj')
  const token = JSON.parse(window.sessionStorage.getItem('token'));
  console.log(token, 'token')
  if (token) {
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
  else {
    router.push('/login');
  }
}

export default Page
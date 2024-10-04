"use client"

import Navbar from '@/components/Store/Header/Navbar'
import Login from  '@/components/Admin/Login'
import React from 'react';

export async function submitPassword(password:string) {
await fetch(`/admin/api/login/hash/${password}`);
}


export default function Page() {
    return <>

      <Navbar></Navbar>

      <Login></Login>

    </>;

}
  
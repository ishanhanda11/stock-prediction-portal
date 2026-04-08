import axios from 'axios'
import React, { useEffect } from 'react'
import axiosInstance from '../../axioInstance'
const Dashboard =  () => {
    const accessToken = localStorage.getItem('accessToken')
    useEffect(()=>{
        const fetchProtectedData=async()=>{
            try{
                const response = await axiosInstance.get('/protected-view/',{
                    headers: {
                        Authorization : `Bearer ${accessToken}`
                    }
                })
                console.log('Successful: ', response.data)
            }catch(error){
                console.log('The fetched error: ', error)
            }
        }
        fetchProtectedData()
    },[])
  return (
    <div className='text-light'>Dashboard</div>
  )
}

export default Dashboard
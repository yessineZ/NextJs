import React from 'react'
import User from '@/app/dashboard/users/page' ;
import Analytics from '@/app/dashboard/analytics/page' ;  
const page = () => {
  return (
    <div className='flex flex-col gap-7 justify-center items-center'>
        <User/>
        <Analytics/>
    </div>
  )
}

export default page

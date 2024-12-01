import Link from 'next/link'
import React from 'react'

const page = () => {
    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            avatar: 'https://example.com/avatar1.jpg'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            avatar: 'https://example.com/avatar2.jpg'
        },

        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            avatar: 'https://example.com/avatar3.jpg'
        }
    ]
    return (
    <div className='min-h-screen border border-yellow-500 min-w-full'>
        <div className='text-center'>
            <h1 className='text-6xl font-bold'>Welcome to Next.js!</h1>
        </div>

        <div className='mt-3'>
            {users.map(user => {
                return (
                    
                    <div key={user.id} className='flex items-center gap-4'>
                        <Link href={`/dashboard/users/${user.id}`}>
                        <div className='flex items-center'>
                            <img src={user.avatar} alt={user.name} className='h-12 w-12 rounded-full' />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold'>{user.name}</h2>
                            <p className='text-sm'>{user.email}</p>
                        </div>
                        </Link>
                    </div>
                    
                )
            })}
            
        </div>
    
    </div>

  )
}

export default page
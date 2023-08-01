import SignIn from '@/components/auth/login'
import React from 'react'

const page = () => {
    
  return (
    <main>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 h-screen">
            <SignIn/>
        </div>
    </main>
  )
}

export default page
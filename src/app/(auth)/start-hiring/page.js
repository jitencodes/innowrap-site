import StartHiring from '@/components/auth/StartHiring'
import React from 'react'

const page = () => {
    
  return (
    <main>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 h-screen">
            <StartHiring/>
        </div>
    </main>
  )
}

export default page
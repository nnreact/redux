import { Loader2 } from 'lucide-react'
import React from 'react'

function Loader() {
    return (
        <div className='absolute top-0 left-0 gap-2 w-full h-screen bg-zinc-950 flex justify-center items-center'>
            <Loader2 className='animate-spin text-white w-8 h-8' />
            <p className='text-white text-lg'>Loading...</p>
        </div>
    )
}

export default Loader

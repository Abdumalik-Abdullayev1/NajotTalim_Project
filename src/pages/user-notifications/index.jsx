import React from 'react'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

const Index = () => {
  return (
    <div className='bg-white w-full h-[85vh] rounded-lg'>
        <div className='flex items-center justify-between p-8'>
            <h1 className='font-semibold text-xl'>Xabarnomalar</h1>
            <button><CleaningServicesIcon sx={{color: "gray"}}/></button>
        </div>
    </div>
  )
}

export default Index

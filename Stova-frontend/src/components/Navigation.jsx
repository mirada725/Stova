import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Globe } from 'lucide-react'

function Navigation(){

  return (
    <nav className='z-10 bg-slate-900 flex items-center justify-between px-8 text-white py-4'>
        <div className='flex items-center space-x-8'>
            <Link to='/' className="text-2xl font-bold">
                Stova
            </Link>
            <div className='hidden md:flex space-x-6'>
                <Link to={'/'} className='transition-colors duration-300 hover:text-blue-300'>
                    Home
                </Link>

                <Link to={'/'} className='transition-colors duration-300 hover:text-blue-300'>
                    Create Hotel
                </Link>
            </div>
        </div>
        <div className='flex items-center space-x-4'>
                <Button variant="ghost">
                    <Globe className='h-4 w-4'/>
                    EN
                </Button>
                <Button  className='text-white'>
                    Sign Out    
                </Button>
            </div>
    </nav>
  )
}

export default Navigation

import { signOut } from 'firebase/auth'
import React, { useCallback } from 'react'
import { auth } from '../../firebase.config'
import { useNavigate } from 'react-router-dom'

const SignOut = () => {
    const navigate = useNavigate();

    const handleSignOut = useCallback(() => {
        signOut(auth)
            .then(() => {
                console.log("User Sign Out")
                navigate('/login')
            })
    })
    return (
        <div onClick={handleSignOut} className='p-1'>
            Sign Out
        </div>
    )
}

export default SignOut

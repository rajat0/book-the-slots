import React, { useCallback, useState } from 'react'
//import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.config'
//import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    //const navigate = useNavigate()

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        console.log(email)
        try {
            await auth.sendPasswordResetEmail(email);
            setMessage('Password reset email sent!');
            setError('');
        } catch (err) {
            setError(err.message);
            setMessage('');
        }

    }, [email])



    return (
        <div className='h-full bg-white'>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input onChange={(e) => {
                                    e.preventDefault();
                                    setEmail(e.target.value)
                                }} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Rest Email</button>
                        </div>
                    </form>

                    {message ? <h1>{message}</h1> : ''}
                </div>
            </div>

        </div>
    )
}

export default ForgotPassword

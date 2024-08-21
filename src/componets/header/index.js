import React from 'react'
import SignOut from '../signout'

const Header = () => {
    return (
        <div className='z-10 border-red-500'>


            <nav className="z-10 bg-white border-solid border-2 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between px-4 ">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Book The Slots</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm bg-gray-300 rounded-md md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <SignOut />
                        </button>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Header

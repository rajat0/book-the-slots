import React from 'react'
import Calender from '../calender'
import { auth } from '../../firebase.config'
import Header from '../header'

const Container = () => {
    //  console.log(auth)
    return (
        <div>
            <Header />
            <Calender calendarId={auth.currentUser.email} />

        </div>
    )
}

export default Container

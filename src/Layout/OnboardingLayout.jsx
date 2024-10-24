import React from 'react'
import AuthHeader from '../Components/AuthHeader'
import { Outlet } from 'react-router-dom'

const OnboardingLayout = () => {
  return (
    <div>
        <AuthHeader/>
        <Outlet/>
    </div>
  )
}

export default OnboardingLayout

import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { Button } from 'react-bootstrap'

export const LoginButton = () => {
    const {loginWithRedirect, logout, isAuthenticated} = useAuth0();


    if (!isAuthenticated) {
        return <Button variant="secondary" onClick={() => loginWithRedirect()}>Log In</Button>
    }
    else {
        return <Button variant="secondary" 
        onClick={() => logout({ returnTo: window.location.origin})}>Log Out</Button>
    }

}
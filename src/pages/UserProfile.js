import React from "react";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
    const [user, setUser] = useState({})
    const params = useParams()
    const userId = params.id

    useEffect(() => {
        fetch(`http://localhost:4000/users/${userId}`)
        .then(res => res.json())
        .then(user => {
            setUser(user)
        })
    }, [userId])
    return (
        <>
            <header><NavBar /></header>
            <main>
                <h1>{user.name || 'Loading...'}</h1>
            </main>
        </>
    )
}
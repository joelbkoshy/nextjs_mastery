"use client";
import { useState } from "react";
import Link from "next/link";


type loginDetails = {
    email: string,
    password: string
}

export default function LoginPage() {


    const [loginUser, setLoginUser] = useState<loginDetails>({
        email: "",
        password: ""
    })

    const onLogin = async () => {

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />
            <label htmlFor="email">Email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4m focus:outline-none focus:border-gray-600"
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setLoginUser({ ...loginUser, email: e?.target?.value })}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                className="p-2 border border-gray-300 rounded-lg mb-4m focus:outline-none focus:border-gray-600"
                id="password"
                placeholder="Password"
                onChange={(e) => setLoginUser({ ...loginUser, password: e?.target?.value })}
            />

            <button
                onClick={onLogin}
                className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 border border-gray-800r mt-3 rounded">
                Login
            </button>
            <Link href='/signup'>Visit Signup Page</Link>
        </div>
    )
}
"use client";
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation";
import axios from "axios";

type userDetails = {
    email: string,
    password: string,
    username: string
}

export default function SignupPage() {

    const [user, setUser] = useState<userDetails>({
        email: "",
        password: "",
        username: ""
    })

    const onSignup = async () => {

    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4m focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user?.username}
                onChange={(e) => setUser({ ...user, username: e?.target?.value })}
                placeholder="username"
            />
            <hr />
            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4m focus:outline-none focus:border-gray-600"
                id="email"
                type="email"
                value={user?.email}
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                placeholder="email"
            />
            <hr />
            <label htmlFor="password">password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4m focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                value={user?.password}
                onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                placeholder="password"
            />
            <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 border border-gray-800r mt-3 rounded">
                Button
            </button>
            <Link href="/login"> Visit Login Page </Link>
        </div>
    )
}
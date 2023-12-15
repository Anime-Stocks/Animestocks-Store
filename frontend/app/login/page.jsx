"use client";

import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const response = await fetch("http://your-api-url/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);
    };
    return (
        <div className="flex flex-col items-center justify-between gap-5 p-24">
            Login Page
            <div className="text-black">
                <input type="text" name="username" value={username} onChange={handleUsername} />
                <input type="text" name="password" value={password} onChange={handlePassword} />
            </div>
            <button onClick={handleLogin}>Submit</button>
        </div>
    );
}

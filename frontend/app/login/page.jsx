"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            await axios.post("http://localhost:8080/authenticate", {
                username,
                password,
            });
        } catch (error) {
            console.error("Error in authentication:", error);
        }
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

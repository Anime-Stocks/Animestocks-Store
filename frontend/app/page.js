"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState();

    async function fetchTest() {
        const res = await axios("http://localhost:8080/test");
        const data = res.data;
        const message = data.message;
        setData(message);
    }
    console.log(data);

    useEffect(() => {
        fetchTest();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">{data}</main>
    );
}

import React from "react";
import { fetchData } from "../helpers";
import { Outlet, useLoaderData } from "react-router";
import Nav from "../components/Nav";



export function mainLoader(){
    const userName = fetchData("userName");
    return { userName }
}

export default function Main(){
    const {userName} = useLoaderData()
    return(
        <div>
            <Nav userName={userName}/>
            <main>
                <Outlet />
            </main>

        </div>
    )
} 
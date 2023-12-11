import React from "react";
import { fetchData } from "../helpers";
import { useLoaderData } from "react-router";

import Intro from "../components/Intro";

export function dashboardLoader(){
    const userName = fetchData("userName");
    return { userName }
}

//action
export async function dashboardAction({request}){
    const data = await request.formData();
    const userName = Object.fromEntries(data)
    try {
        localStorage.setItem("userName", JSON.stringify(formData.userName))
        return toast.success(`Welcome, ${userName}`)
    } catch(e) {
        throw new Error("There was a problem creating your account.")
    }
}


export default function Dashboard(){
    const {userName} = useLoaderData()
    return(
        <>
            {userName ? (<p>{userName}</p>) : (<Intro />)}
            {/* <Intro /> */}
        </>
    )
} 
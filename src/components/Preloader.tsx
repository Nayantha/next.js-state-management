"use client"
import { useRef } from "react"
import { store } from "@/store"
import { setStartupUser } from "@/store/searchSlice";
import { User } from "@/types"

function Preloader({users} : { users : User[]}){
    const loaded = useRef(false)
    if (!loaded.current){
        store.dispatch(setStartupUser(users))
        loaded.current = true
    }
    return null;
}
export default Preloader
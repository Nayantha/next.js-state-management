"use client"
import type {TypedUseSelectorHook} from "react-redux"
import {useDispatch, useSelector} from "react-redux"
import {AppDispatch, RootState} from "@/store"
import {setSearch} from "@/store/searchSlice"
import UserTable from "@/components/UserTable"
import {User} from "@/types";
import {useEffect} from "react";
import {userApi} from "@/store/userApi";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const SearchInput = () => {
    const dispatch = useAppDispatch()
    const search = useAppSelector((state) => state.search.search)
    const startupUser = useAppSelector((state) => state.search.startupUser)
    const data = useAppSelector(
        (state) =>
            state.userApi.queries[`search("${search}`]?.data as User[]
    )
    useEffect(() => {
        // @ts-ignore
        dispatch(userApi.endpoints.search.initiate(search))
    }, [dispatch, search])
    return (
        <div>
            <input type="text" value={search}
                // @ts-ignore
                   onChange={(e) => dispatch(setSearch(e.target.value))}
            />
            <UserTable users={search.length ? data ?? [] : startupUser}></UserTable>
        </div>
    )
}
export default SearchInput
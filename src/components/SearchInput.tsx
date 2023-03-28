"use client"
import { useDispatch, useSelector} from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setSearch } from "@/store/searchSlice";
import UserTable from "@/components/UserTable";
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const SearchInput = () =>{
    const dispatch = useAppDispatch()
    const search = useAppSelector((state) => state.search.search)
    const startupUser = useAppSelector((state) => state.search.startupUser)
    return (
        <div>
            <input type="text" value={search}
                // @ts-ignore
                   onChange={(e) => dispatch(setSearch(e.target.value))}
            />
            <UserTable users={startupUser}></UserTable>
        </div>
    )
}
export default SearchInput
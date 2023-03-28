import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { User } from "@/types"

export interface SearchState {
    search: string
    startupUser: User[]
}
const initialState: SearchState = {
    search: "",
    startupUser: [],
}
const searchSlice = createSlice({
    name: "",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setStartupUser: (state, action:PayloadAction<User[]>) => {
            state.startupUser = action.payload
        }
    },
})
export const {setSearch, setStartupUser } = searchSlice.actions
export default searchSlice.reducer
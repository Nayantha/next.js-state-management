import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { User } from "@/types"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api/"}),
    tagTypes: ["user"],
    endpoints: (builder) => ({
        search: builder.query<User[], string>({
            query: (q) => `search?name=${q}`,
            providesTags: (result, error, search) => [{type: "user", search}],
        })
    })
})
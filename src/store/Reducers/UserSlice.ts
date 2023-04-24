import {IUser} from "../../Types/UserTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUserState {
    user: IUser[]
    loader: boolean,
    error: string
}

const initialState: IUserState = {
    user: [],
    loader: false,
    error: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchingUser(state) {
            state.loader = true
        },
        fetchingUserSuccess(state, action: PayloadAction<IUser[]>) {
            state.loader = false
            state.user = action.payload
            state.error = ''
        },
        fetchingUserError(state, action: PayloadAction<string>) {
            state.loader = false
            state.user = []
            state.error = action.payload
        }
    }

})

export default userSlice.reducer
export const {fetchingUser,fetchingUserSuccess, fetchingUserError} = userSlice.actions
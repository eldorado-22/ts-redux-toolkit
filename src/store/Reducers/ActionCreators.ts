import {AppDispatch} from "../store";
import axios from "axios";
import {fetchingUser, fetchingUserSuccess, fetchingUserError} from "./UserSlice";

export const fetchingUsers = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingUser())
        const responsive = await axios('https://jsonplaceholder.typicode.com/users')
        dispatch(fetchingUserSuccess(responsive.data))
    } catch (e: any) {
        dispatch(fetchingUserError(e.message))
    }
}
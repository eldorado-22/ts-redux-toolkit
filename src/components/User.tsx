import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {fetchingUsers} from "../store/Reducers/ActionCreators";
const User = () => {
    const {user, loader, error} = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchingUsers)
    }, [])
    return (
        <div>
            {loader && <span className="loader"></span>}
            {error && <p>Error..</p>}
            {
                user.map(el => (
                    <div>
                        <h1>{el.name}</h1>
                        <h3>{el.username}</h3>
                        <p>{el.email}</p>
                        <p>{el.phone}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default User;
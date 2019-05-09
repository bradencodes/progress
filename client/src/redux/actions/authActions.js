import axios from "axios"
import setAuthToken from "../../utils/setAuthToken.js"
import jwtDecode from "jwt-decode"

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types.js"

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios.post("/api/users/register", userData)
        .then(res => history.push("/login")) // Redirect to login if registered
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

// Login
export const loginUser = userData => dispatch => {
    axios.post("/api/users/login", userData)
        .then(res => {
            // Save to local storage
            const { token } = res.data
            localStorage.setItem("jwtToken", token)

            // Set token to Auth header
            setAuthToken(token)

            // Decode token for user data
            const decoded = jwtDecode(token)

            // Set current user
            dispatch(setCurrentUser(decoded))
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    }
}

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken")

    // Remove auth header for future requests
    setAuthToken(false)

    // Set current user to empty object to turn isAuthenticated false
    dispatch(setCurrentUser({}))
}
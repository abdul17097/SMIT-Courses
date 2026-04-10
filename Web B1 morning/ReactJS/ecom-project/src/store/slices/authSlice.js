import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        email: "",
        password: ""
    },
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        logout: (state) => {
            localStorage.removeItem("token");
            state.email = "";
            state.password = "";
        }
    }

})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
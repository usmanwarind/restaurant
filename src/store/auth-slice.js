import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect, useState, useCallback } from "react";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: null,
    },

    reducers: {
        login(state, action) {
            let token = action.payload;
            localStorage.setItem("token", token.token);
            localStorage.setItem("expirationTime", token.expirationTime);
            state.isLoggedIn = true;
        },

        logout(state, action) {
            localStorage.removeItem("token");
            localStorage.removeItem("expirationTime");
            state.isLoggedIn = false;
        },
        checkAuth(state, action) {
            const storedtoken = action.payload;
            if (storedtoken) {
                state.isLoggedIn = true;
            } else {
                state.isLoggedIn = false;
            }
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice;

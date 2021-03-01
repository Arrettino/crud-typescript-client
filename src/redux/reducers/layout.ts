import { createReducer } from '@reduxjs/toolkit';
import { sidebarOpen, sidebarClose } from '../actions/layout';

const layoutReducer = createReducer({ sidebar: false }, (builder) => {
    builder
        .addCase(sidebarOpen, (state) => ({
            ...state,
            sidebar: true,
        }))
        .addCase(sidebarClose, (state) => ({
            ...state,
            sidebar: false,
        }));
});

export default layoutReducer;

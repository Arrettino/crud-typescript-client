import { createReducer } from '@reduxjs/toolkit';
import { changeEntrie } from '../actions/lang';

const layoutReducer = createReducer({ entrie: 'ES' }, (builder) => {
    builder.addCase(changeEntrie, (state, action) => ({
        ...state,
        entrie: action.payload,
    }));
});

export default layoutReducer;

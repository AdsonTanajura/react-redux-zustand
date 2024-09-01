import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: ['Fazer cafe', 'Estudar Redux', 'Teste de Todos'],

    reducers: {},
});

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
})
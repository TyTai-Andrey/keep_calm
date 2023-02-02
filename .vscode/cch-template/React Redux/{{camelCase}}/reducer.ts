// Core
import { createReducer } from '@reduxjs/toolkit';

// Actions
import { {{camelCase}}Actions } from './actions';

// Typings
import {
    {{pascalCase}}ItemModel,
} from './interfaces';

interface InitialState {
    {{pascalCase}}: {
        data: {
            total: number;
            result: {{pascalCase}}ItemModel[];
        } | null;
        loading: boolean;
        error: null;
    };
}

const initialState: InitialState = {
    {{pascalCase}}: {
        data: null,
        loading: true,
        error: null,
    },
};

export const {{camelCase}}Reducer = createReducer(
    initialState,
    (builder) => {
        builder.addCase(
            {{camelCase}}Actions.fetch{{pascalCase}}Request,
            (state) => {
                state.{{pascalCase}}.loading = true;
                state.{{pascalCase}}.error = null;
            },
        );

        builder.addCase(
            {{camelCase}}Actions.fetch{{pascalCase}}Success,
            (state, action) => {
                state.{{pascalCase}}.data = action.payload;
                state.{{pascalCase}}.loading = false;
                state.{{pascalCase}}.error = null;
            },
        );

        builder.addCase(
            {{camelCase}}Actions.fetch{{pascalCase}}Failure,
            (state, action) => {
                state.{{pascalCase}}.data = null;
                state.{{pascalCase}}.loading = false;
                state.{{pascalCase}}.error = action.payload;
            },
        );
    },
);

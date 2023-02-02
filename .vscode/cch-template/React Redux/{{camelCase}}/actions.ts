// Core
import { createAction } from '@reduxjs/toolkit';

// Types
import { {{camelCase}}Types } from './types';

export const {{camelCase}}Actions = {
  // Sync
  fetch{{pascalCase}}Request: createAction(
    {{camelCase}}Types.FETCH_{{upperSnakeCase}}_REQUEST,
  ),

  fetch{{pascalCase}}Success: createAction(
    {{camelCase}}Types.FETCH_{{upperSnakeCase}}_SUCCESS,
    (data) => ({ payload: data }),
  ),

  fetch{{pascalCase}}Failure: createAction(
    {{camelCase}}Types.FETCH_{{upperSnakeCase}}_FAILURE,
    (error) => ({ payload: error }),
  ),

  // Async
  fetch{{pascalCase}}Async: createAction(
    {{camelCase}}Types.FETCH_{{upperSnakeCase}}_ASYNC,
    (filter) => ({ payload: filter }),
  ),
};

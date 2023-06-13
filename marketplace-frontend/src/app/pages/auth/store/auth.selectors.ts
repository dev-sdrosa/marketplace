import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducers";


export const getAuthState = createFeatureSelector<AuthState>('auth');

export const isAuthenticatedSelector = createSelector(
  getAuthState, state => !!state.user
);

export const getTokenSelector = createSelector(
  getAuthState, state => state.user?.token
);

export const getUserSelector = createSelector(
  getAuthState, state => state.user
);
import { AuthData } from '../model/auth.model';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: AuthData;
  message?: string;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  message: '',
  loading: false,
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    case AuthActions.LOGIN_START:
      return {
        ...state,
        user: initialState.user,
        loading: true,
      };
    case AuthActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: initialState.user,
        message: action.message,
        loading: false,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: initialState.user,
        message: initialState.message,
        loading: false,
      };
    case AuthActions.CLEAR_ERROR:
      return {
        ...state,
        message: initialState.message,
      };
    default:
      return state;
  }
}

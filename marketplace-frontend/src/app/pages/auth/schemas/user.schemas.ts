export interface User {
	_id: string;
	username: string;
	email: string;
}

export interface AuthData {
	logedUser: User;
	token: string;
}

export interface UserResponse {
	data: AuthData;
	success: boolean;
    code: number,
	error?: any;
}

export interface RegisterUserResponse {
	data: boolean;
	success: boolean;
	errors?: any;
}

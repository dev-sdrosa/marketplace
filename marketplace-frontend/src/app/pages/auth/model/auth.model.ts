export class AuthData {
    constructor(
        public _id: string,
        public username: string,
        public email: string,
        private _token: string,
        private _tokenExpirationDate: Date | number
    ) {
        this._tokenExpirationDate = new Date(this._tokenExpirationDate);
    }

    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


export class LoginForm {
    constructor(
        public email: string,
        public password: string,
    ) {}
}